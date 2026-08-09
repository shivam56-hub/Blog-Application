const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const route = express.Router();

// Register
route.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required...",
      });
    }
    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exist...",
      });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create User

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      message: "User Registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("error");

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

// --------- Login -------------

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required...",
      });
    }
    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email and Password...",
      });
    }

    // compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Password Incorrect",
      });
    }

    res.status(201).json({
      message: "Login Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("error");

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});


module.exports = route;

// const express = require("express");

// const route = express.Router();
// route.post("/register", (req,res) => {
//     const {name, email, password} = req.body;

//     if(!name || !email || !password){
//         return res.status(400).json({
//             message: "All fields are required..."
//         })
//     }

//     res.status(201).json({
//         message: "User Registered successfully",
//         user: {
//             name,
//             email
//         }
//     })
// })

// route.post("/login", (req,res) => {
//     const {email, password} = req.body;

//     if(!email || !password){
//         return res.status(400).json({
//             message: "Email and password are required..."
//         })
//     }
//     if(email ==="shivam@gmail.com" && password === "shivam123"){
//         return res.status(201).json({
//         message: "Login successfully",
//         user: {
//             name : "Shivam",
//             email
//         }
//     })
//     }
//     return res.status(401).json({
//         message: "Invalid email and password"
//     })

// })

// module.exports = route;
