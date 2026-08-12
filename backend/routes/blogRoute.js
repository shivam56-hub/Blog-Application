const express = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog");
const blog = require("../models/blog");
const authMiddleware = require("../middleware/authMiddleware");
const uploadToCloudinary = require("../config/cloudinaryUpload");
const cloudinary = require("../config/cloudinary")

const route = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
});

// const uploadToCloudinary = (buffer) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: "blog-images",
//       },
//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       }
//     );

//     stream.end(buffer);
//   });
// };
// module.exports = upload;
// To get all the blogs

route.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log("Blog Found", blogs.length);
    res.status(200).json({
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

route.get("/my-blogs", authMiddleware, async (req, res) => {
  try {
    console.log("Logged in user:", req.user);
    const blogs = await Blog.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    console.log("User blogs:", blogs.length);

    res.status(200).json({
      blogs,
    });
  } catch (error) {
    console.error("Error fetching user's blogs:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Get single blog by id

route.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      blog,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});


// Create Blog

route.post(
  "/",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      let imageUrl = "";

      if (req.file) {
        const result = await uploadToCloudinary(req.file.buffer);
            console.log("Cloudinary upload successful:");
            console.log(result.secure_url);
        imageUrl = result.secure_url;
        console.log("Cloudinary URL:", result.secure_url);
      }

      const blog = new Blog({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        author: req.body.author,
        date: req.body.date,
        status: req.body.status,
        image: imageUrl,
        user: req.user.id
      });

      await blog.save();

      res.status(201).json({
        message: "Blog created successfully",
        blog
      });

    } catch (error) {
      console.error("Create Blog Error:", error);

      res.status(500).json({
        message: "Server error",
        error: error.message
      });
    }
  }
);

route.put("/:id", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    const { title, category, description, author, date, status } = req.body;

    const updateData = {
      title,
      category,
      description,
      author,
      date,
      status,
    };

    // if new image uploaded
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      updateData.image = result.secure_url;
    }

    const blog = await Blog.findByIdAndUpdate(
      {
        _id: req.params.id,
        user: updateData,
      },
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(201).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Error updating blog: ", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

route.patch("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        message: "Status is Required",
      });
    }
    if (!["published", "draft"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }

    const blog = await Blog.findByIdAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        status,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(200).json({
      message: "Blog status updated successfully",
      blog,
    });
  } catch (error) {
    console.log("Patch Error:", error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// Delete Operations
route.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(201).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete Blog Error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// route.get("/profile", authMiddleware, async (req, res) => {
//   try{
//     const user = await User.findById(req.user.id).select("-password");

//     if(!user){
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }
//     res.status(201).json({
//       user,
//     });
//   }catch(error){
//     console.error("Profile Error: ",error);

//     res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// });

module.exports = upload;
module.exports = route;
