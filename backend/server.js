const express = require("express");
const cors = require("cors");
const path = require("path")
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors({
    origin:[
    "https://blog-application-pzqyvynsb-shivam-blog-application.vercel.app"
    ]
}));
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const authRoute = require("./routes/authRoute");
app.use("/api/auth",authRoute)

const blogRoute = require("./routes/blogRoute");
app.use("/api/blogs",blogRoute)


// -------- Connected Database --------------
connectDB();

app.get("/",(req,res) => {
    res.json({
        message: "Blog API is running",
    })
})


// -------- listening port --------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
