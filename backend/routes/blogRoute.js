const express = require("express");
const  authRoute  = require("./authRoute");

const route = express.Router();

route.post("/",(req,res) =>{
    const {
        image,
        title,
        category,
        description,
        author,
        date,
        status
    }  = req.body;

    if(!title || !category || !description || !author || !date){
        return res.status(400).json({
            message: "All fields are required..."
        });
    }
    const blog = {
        id: Date.now(),
        image,
        title,
        category,
        description,
        author,
        date,
        status
    };
    res.status(201).json({
        message: "Blog created successfully",
        blog
    })
})

module.exports = route