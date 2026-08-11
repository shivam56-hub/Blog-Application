const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : ["published","draft"],
      default: "draft"
    },

    // Logged-in user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("blog", blogSchema);