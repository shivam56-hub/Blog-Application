const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());

const authRoute = require("./routes/authRoute");
app.use("/api/auth",authRoute)

const blogRoute = require("./routes/blogRoute");
app.use("/api/blogs",blogRoute)


app.get("/",(req,res) => {
    res.json({
        message: "Blog API is running",
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
