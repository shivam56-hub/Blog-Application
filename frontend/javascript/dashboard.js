const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
  alert("Please login first!");

  window.location.href = "login.html";
}

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Welcome User

const storeUser = JSON.parse(localStorage.getItem("user"));

const welcomeMessage = document.getElementById("welcomeMessage");
if (storeUser) {
  welcomeMessage.textContent = `Welcome, ${storeUser.name} 👋`;
}

// Blog Container

const myBlogs = document.getElementById("myBlogs");

// Render Dashboard

async function renderDashboard() {
  try {
    console.log("Fetching blogs..");
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login First");
      window.location.href = "login.html";
    }
    const response = await fetch("https://blog-application-086t.onrender.com/api/blogs/my-blogs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    console.log("Response:", response.status);
    console.log("Data", data);

    if (!response.ok) {
      alert(data.message || "Unlock to fetch blogs");
      return;
    }
    // const blogs = data.blogs || [];
    const blogs = data.blogs;
    console.log("No. of blogs", blogs.length);
    console.log("First Blog", blogs[0]);
    myBlogs.innerHTML = "";

    // "Statistics"

    document.getElementById("totalBlogs").textContent = blogs.length;
    const published = blogs.filter(
      (blog) => blog.status?.toLowerCase() === "published",
    ).length;
    const draft = blogs.filter(
      (blog) => blog.status?.toLowerCase() === "draft",
    ).length;

    document.getElementById("publishedBlog").textContent = published;
    document.getElementById("draftBlog").textContent = draft;

    // Render Blogs

    blogs.forEach((blog) => {
      myBlogs.innerHTML += `
      <div class="dashboard-blog">

                   <img 
                    src="https://blog-application-086t.onrender.com${blog.image}" 
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

                       <button class="status-btn" onclick="toggleStatus('${blog._id}','${blog.status}')">
                       ${blog.status}
                       </button>

                    </div>

                    <div class="blog-actions">

                        <button onclick="editBlog('${blog._id}')">
                            Edit
                        </button>

                        <button onclick="deleteBlog('${blog._id}')">
                            Delete
                        </button>

                    </div>

                </div> `;
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    alert("Unable to connect to server!");
  }
}

renderDashboard();

async function toggleStatus(id, currentStatus) {
  const newStatus =
    currentStatus.toLowerCase() === "published" ? "draft" : "published";

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://blog-application-086t.onrender.com/api/blogs/${id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      },
    );

    const data = await response.json();

    console.log("PATCH response:", data);

    if (!response.ok) {
      alert(data.message || "Unable to update status");
      return;
    }

    alert("Blog status updated successfully!");

    // MongoDB se fresh data load
    await renderDashboard();
  } catch (error) {
    console.error("PATCH Status Error:", error);

    alert("Unable to connect to server!");
  }
}

async function deleteBlog(id) {
  const confirmDelete = confirm("Are you sure you want to delete this blog?");

  if (!confirmDelete) {
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://blog-application-086t.onrender.com/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    console.log("Delete response:", data);

    if (!response.ok) {
      alert(data.message || "Unable to delete blog");
      return;
    }

    alert("Blog deleted successfully!");

    // MongoDB se blogs dobara load
    await renderDashboard();
  } catch (error) {
    console.error("Delete Error:", error);

    alert("Unable to connect to server!");
  }
}

async function editBlog(id) {
  try {
    console.log("Edit Clicked");
    console.log("Editing Blog ID:", id);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      window.location.href = "login.html";
      return;
    }
    const response = await fetch(`https://blog-application-086t.onrender.com/api/blogs/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response Status: ", response.status);

    const data = await response.json();

    console.log("Edit response:", data);

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Session expired. Please login again!");

        window.location.href = "login.html";

        return;
      }
      alert(data.message || "Blog not found");
      return;
    }

    localStorage.setItem("editBlog", JSON.stringify(data.blog));
    console.log("Saved editBlog", data.blog);

    window.location.href = "create-blog.html";
  } catch (error) {
    console.error("Edit Error:", error);

    alert("Unable to connect to server!");
  }
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";
  });
}
