const blogDetails = document.getElementById("blogDetails");

// get blog ID from URL

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

if (!blogId) {
    blogDetails.innerHTML = "<h2>Blog not found </h2>";
} else {
    fetch(`https://blog-application-086t.onrender.com/api/blogs/${blogId}`)
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
          class="blog-details-image"
          src="https://blog-application-086t.onrender.com${blog.image}" 
          alt="${blog.title}"
        >
        <span class="category">
            ${blog.category}
        </span>
        <h1 class="blog-details-title">
            ${blog.title}
        </h1>
        <p class="blog-details-description">
          ${blog.description}
        </p>
        <div class="blog-meta">
        <p>
          <strong>By ${blog.author}</strong>
        </p>
        <p>
        ${blog.date}
        </p>
        <p>
         <strong>Status:</strong> 
         <span class="status">${blog.status}</span>
        </p>
        </div>
        `;
        })
        .catch((error) => {
            console.error("Error", error);
            blogDetails.innerHTML = `
            <div class="error-message">
            <h2>Unable to load blog</h2>
            <p>Please try again later.</p>
            </div>
            `;
        });
}
