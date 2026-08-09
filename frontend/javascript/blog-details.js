const { response } = require("express");
const { param } = require("../../backend/routes/blogRoute");

const blogDetails = document.getElementById("blogDetails");

// get blog ID from URL

const params = new URLSearchParams(window.location.search);
const blogId = param.get("id");

if (!blogId) {
    blogDetails.innerHTML = "<h2>Blog not found </h2>";
} else {
    fetch(`http://localhost:5000/api/blog/${blogId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Blog not found");
            }
            return response.json();
        })
        .then((data) => {
            const blog = data.blog;
            blogDetails.innerHTML = `
        <img 
            src="http://localhost:5000${blog.image}" 
            alt="${blog.title}"
        >
        <span class="category">
            ${blog.category}
        </span>
        <h2>
            ${blog.title}
        </h2>
        <p>
          ${blog.description}
        </p>
        <p>
          <strong>By ${blog.author}</strong>
        </p>
        <p>
        ${blog.date}
        </p>
        <p>
        Status:${blog.status}
        </p>
        `;
        })
        .catch(error => {
            console.error("Error",error);
            blogDetails.innerHTMLm=`<h2>Unable to load blog</h2>
            `;
        })
}
