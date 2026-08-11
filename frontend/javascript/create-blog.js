const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first!");
  window.location.href = "login.html";
}


const blogForm = document.getElementById("blogForm");


// CHECK IF WE ARE EDITING


const editBlogData = JSON.parse(localStorage.getItem("editBlog"));

if (editBlogData) {
  document.getElementById("title").value = editBlogData.title;
  document.getElementById("category").value = editBlogData.category;
  document.getElementById("description").value = editBlogData.description;
  document.getElementById("author").value = editBlogData.author;
  document.getElementById("date").value = editBlogData.date;
  document.getElementById("status").value = editBlogData.status;
  document.querySelector("h1").textContent = "Edit Blog";
  document.querySelector("#blogForm button").textContent = "Update Blog";
}


// FORM SUBMIT


blogForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Session expired. Please login again.");
    window.location.href = "login.html";
    return;
  }


  // EDIT MODE → PUT


  if (editBlogData) {
    try {
      const imageFile = document.getElementById("image").files[0];

      const formData = new FormData();

      // New image selected?
      if (imageFile) {
        formData.append("image", imageFile);
      }

      formData.append("title", document.getElementById("title").value);

      formData.append("category", document.getElementById("category").value);

      formData.append(
        "description",
        document.getElementById("description").value,
      );

      formData.append("author", document.getElementById("author").value);

      formData.append("date", document.getElementById("date").value);

      formData.append("status", document.getElementById("status").value);

      // PUT request
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/blogs/${editBlogData._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const data = await response.json();

      console.log("PUT Response:", data);

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          alert("Session expired. Please login again.");

          window.location.href = "login.html";

          return;
        }

        alert(data.message || "Unable to update blog");

        return;
      }

      alert("Blog Updated Successfully!");

      // Remove edit mode AFTER successful update
      localStorage.removeItem("editBlog");

      window.location.href = "dashboard.html";

      return;
    } catch (error) {
      console.error("Update Blog Error:", error);

      alert("Unable to connect to server!");
    }

    return;
  }


  // CREATE MODE → POST


  try {
    const imageFile = document.getElementById("image").files[0];

    if (!imageFile) {
      alert("Please select an image");

      return;
    }

    const formData = new FormData();

    formData.append("image", imageFile);

    formData.append("title", document.getElementById("title").value);

    formData.append("category", document.getElementById("category").value);

    formData.append(
      "description",
      document.getElementById("description").value,
    );

    formData.append("author", document.getElementById("author").value);

    formData.append("date", document.getElementById("date").value);

    formData.append("status", document.getElementById("status").value);

    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    console.log("POST Response:", data);

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Session expired. Please login again.");

        window.location.href = "login.html";

        return;
      }

      alert(data.message || "Unable to create blog");

      return;
    }

    alert("Blog Created Successfully!");

    blogForm.reset();

    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Create Blog Error:", error);

    alert("Unable to connect to server!");
  }
});
