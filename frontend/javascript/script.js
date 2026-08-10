const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// search 
const search = document.getElementById("search");
const blogContainer = document.getElementById("blogContainer");

function viewBlog(id){
    console.log("Blog ID: ",id)
    window.location.href = `blog-details.html?id=${id}`;
}

let allBlogs = [];

function disBlogs(blogs) {
    if (!blogContainer) return;
    blogContainer.innerHTML = "";
    blogs.forEach(blog => {
        blogContainer.innerHTML += `
        <article class="blog-card">
            <img src = "http://localhost:5000${blog.image}"
            alt="${blog.title}"
            >

            <div class="blog-content">
                <span class="category">${blog.category}</span>
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <p><strong>By ${blog.author}</strong></p>
                <span>${blog.date}</span>
                <button class="read-btn" onclick="viewBlog('${blog._id}')">Read More</button>
            </div>
        </article>
        `;
    });
}
if (blogContainer) {
   fetch("http://localhost:5000/api/blogs")
   .then(response => response.json())
   .then(data => {
    if(!data.blogs){
        throw new Error("Blogs data not found");
    }
        allBlogs = data.blogs;
        disBlogs(allBlogs)
   })
   .catch(error => {
    console.error("Error fetching blogs: ",error);
   });

}

// localStorage.removeItem("blogs")
if (search) {
    search.addEventListener("input", () => {
        const searchValue = search.value.toLowerCase();

        const filterBlogs = allBlogs.filter(blog =>
            blog.title.toLowerCase().includes(searchValue) ||
            blog.category.toLowerCase().includes(searchValue) ||
            blog.author.toLowerCase().includes(searchValue)
        );

        disBlogs(filterBlogs);
    });
}

// display after login

const guestLinks = document.getElementById("guestLinks");
const userLinks = document.getElementById("userLinks");

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
    guestLinks.style.display = "none";
    userLinks.style.display = "flex";
}

// logout button

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";
    });
}
