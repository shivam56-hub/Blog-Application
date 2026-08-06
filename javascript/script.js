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

let allBlogs = [];

function disBlogs(blogs) {
    if (!blogContainer) return;
    blogContainer.innerHTML = "";
    blogs.forEach(blog => {
        blogContainer.innerHTML += `
        <article class="blog-card">
            <img src="${blog.image}" alt="${blog.title}">

            <div class="blog-content">
                <span class="category">${blog.category}</span>
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <p><strong>By ${blog.author}</strong></p>
                <span>${blog.date}</span>
                <button class="read-btn">Read More</button>
            </div>
        </article>
        `;
    });
}
if (blogContainer) {
    const storeBlogs = localStorage.getItem("blogs");
    if (storeBlogs) {
        allBlogs = JSON.parse(storeBlogs)
        disBlogs(allBlogs);

    } else {
        fetch("blog.json")
            .then(response => response.json())
            .then(data => {
                allBlogs = data;
                localStorage.setItem("blogs", JSON.stringify(data));
                disBlogs(allBlogs)
            })
            .catch(error => {
                console.error(error);
            });
    }

}

// if (blogContainer) {

//     fetch("blog.json")
//         .then(response => response.json())
//         .then(data => {

//             const oldBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

//             const allBlogsData = [...data, ...oldBlogs];

//             localStorage.setItem("blogs", JSON.stringify(allBlogsData));

//             allBlogs = allBlogsData;

//             disBlogs(allBlogs);

//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

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
