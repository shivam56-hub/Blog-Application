const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn !== "true") {
  alert("Please login first!");

  window.location.href = "login.html";
}

const blogForm = document.getElementById("blogForm");

const editBlogData = JSON.parse(localStorage.getItem("editBlog"));

// Check if we are editing

if (editBlogData) {
  document.getElementById("title").value = editBlogData.title;
  document.getElementById("category").value = editBlogData.category;
  document.getElementById("description").value = editBlogData.description;
  document.getElementById("author").value = editBlogData.author;
  document.getElementById("date").value = editBlogData.date;
  document.getElementById("status").value = editBlogData.status;

  // Change heading
  document.querySelector("h1").textContent = "Edit Blog";

  // Change button
  document.querySelector("#blogForm button").textContent = "Update Blog";
}

blogForm.addEventListener("submit", async function (e) {
  e.preventDefault();


  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const author = document.getElementById("author").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // EDIT MODE
  if (editBlogData) {
    blogs = blogs.map((blog) => {
      if (blog.id === editBlogData.id) {
        return {
          ...blog,
          image,
          title,
          category,
          description,
          author,
          date,
          status,
        };
      }

      return blog;
    });

    localStorage.setItem("blogs", JSON.stringify(blogs));

    localStorage.removeItem("editBlog");

    alert("Blog Updated Successfully!");
  }

  // CREATE MODE
  else {
    try {
      const imageFile = document.getElementById("image").files[0];

      // Image Validate

      if (!imageFile) {
        alert("Please select an image");
        return;
      }

      const title = document.getElementById("title").value;
      const category = document.getElementById("category").value;
      const description = document.getElementById("description").value;
      const author = document.getElementById("author").value;
      const date = document.getElementById("date").value;
      const status = document.getElementById("status").value;

      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("date", date);
      formData.append("status", status);

      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Backend response", data);

      if (!response.ok) {
        alert(data.message || "Unable to create blog");
        return;
      }
      alert("Blog created successfully!");

      blogForm.reset();
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Create Blog Error: ", error);
      alert("Unable to connect to server!");
    }
  }
});
