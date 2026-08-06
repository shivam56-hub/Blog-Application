const express = require("express");

const route = express.Router();
route.post("/register", (req,res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required..."
        })
    }

    res.status(201).json({
        message: "User Registered successfully",
        user: {
            name,
            email
        }
    })
})

route.post("/login", (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "Email and password are required..."
        })
    }
    if(email ==="shivam@gmail.com" && password === "shivam123"){
        return res.status(201).json({
        message: "Login successfully",
        user: {
            name : "Shivam",
            email
        }
    })
    }
    return res.status(401).json({
        message: "Invalid email and password"
    })

})


module.exports = route;