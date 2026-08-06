const isLoggedIn = localStorage.getItem("isLoggedIn");
if(isLoggedIn!== "true"){
    alert("Please login first!")

    window.location.href = "login.html"
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

const storeUser = JSON.parse(localStorage.getItem("user"));

const welcomeMessage = document.getElementById("welcomeMessage");
if (storeUser) {
    welcomeMessage.textContent = `Welcome, ${storeUser.name} 👋`;
}

const myBlogs = document.getElementById("myBlogs");

function renderDashboard() {

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    myBlogs.innerHTML = "";

    // Statistics
    document.getElementById("totalBlogs").textContent = blogs.length;

    const published = blogs.filter(
        blog => blog.status === "published"
    ).length;

    const drafts = blogs.filter(
        blog => blog.status === "draft"
    ).length;

    document.getElementById("publishedBlogs").textContent = published;
    document.getElementById("draftBlogs").textContent = drafts;


    // Render Blogs
    blogs.forEach(blog => {

        myBlogs.innerHTML += `
            <div class="dashboard-blog">

                <img 
                    src="${blog.image || ""}" 
                    alt="${blog.title}"
                >

                <div class="blog-info">

                    <span class="category">
                        ${blog.category}
                    </span>

                    <h3>
                        ${blog.title}
                    </h3>

                    <p>
                        ${blog.description}
                    </p>

                    <small>
                        By ${blog.author} • ${blog.date}
                    </small>

                </div>

                <div class="blog-actions">

                    <button onclick="editBlog(${blog.id})">
                        Edit
                    </button>

                    <button onclick="deleteBlog(${blog.id})">
                        Delete
                    </button>

                </div>

            </div>
        `;

    });
}

renderDashboard();


function deleteBlog(id) {

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const confirmDelete = confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) {
        return;
    }

    blogs = blogs.filter(blog => blog.id !== id);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    renderDashboard();
}

function editBlog(id){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blog = blogs.find(blog => blog.id === id);
    if(!blog){
        alert("Blog not found");
        return;

    }
    localStorage.setItem("editBlog",JSON.stringify(blog));

    window.location.href = "create-blog.html"
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";
    });
}