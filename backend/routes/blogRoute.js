const express = require("express");
const multer = require("multer");
const path = require("path")
const Blog = require("../models/blog");
const blog = require("../models/blog");

const route = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
});


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


// Get single blog by id

route.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if(!blog){
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(201).json({
      blog
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});



// Create Blog

route.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, category, description, author, date, status } = req.body;

    // Image path

    const image = req.file 
    ? `/uploads/${req.file.filename}`
     : "";

    // Required fields

    if (!image || !title || !category || !description || !author || !date) {
      return res.status(400).json({
        message: "All fields are required...",
      });
    }

    // Create blog in MongoDB

    const blog = await Blog.create({
      image,
      title,
      category,
      description,
      author,
      date,
      status,
    });
    res.status(201).json({
      message: "Blog Created successfully",
      blog,
    });
  } catch (error) {
    console.error("error");

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});


route.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, category, description, author, date, status } = req.body;

    const updateData = {
      title, category, description, author, date, status };

      // if new image uploaded
      if(req.file){
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const updateBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new:true, runValidators:true}
      );

      if(!updateBlog){
        return res.status(404).json({
          message:"Blog not found"
        });
      }
      res.status(201).json({
        message: "Blog updated successfully",
        blog
      })
  } catch (error) {
    console.error("Error updating blog: ",error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

route.patch("/:id/status", async (req, res) => {
  try {
      const { status } = req.body;
      if(!status){
        return res.status(400).json({
          message:"Status is Required",
        });
      }
      if(!["published","draft"].includes(status)){
        return res.status(400).json({
          message: "Invalid status",
        });
      }

      const blog = await Blog.findByIdAndUpdate(req.params.id,{status},
        {
          new:true,
          runValidators:true,
        }
      );
      if(!blog){
        return res.status(404).json({
          message:"Blog not found",
        });
      }
      res.status(200).json({
        message: "Blog status updated successfully",
        blog,
      });
    }catch(error){
      console.log("Patch Error:",error);
      res.status(500).json({
        message:"Server Error",
        error: error.message
      });
    }
  });


// Delete Operations
route.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if(!blog){
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    res.status(201).json({
      message:"Blog deleted successfully"
    });
  } catch (error) {
    console.error("Delete Blog Error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});


module.exports = route;
