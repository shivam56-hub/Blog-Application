const isLoggedIn = localStorage.getItem("isLoggedIn");
if(isLoggedIn!== "true"){
    alert("Please login first!")

    window.location.href = "login.html"
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


blogForm.addEventListener("submit", function(e) {

    e.preventDefault();
    const image = document.getElementById("image").value;
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;


    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];


    // EDIT MODE
    if (editBlogData) {

        blogs = blogs.map(blog => {

            if (blog.id === editBlogData.id) {

                return {
                    ...blog,
                    image,
                    title,
                    category,
                    description,
                    author,
                    date,
                    status
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

        const newBlog = {

            id: Date.now(),
            image,
            title,
            category,
            description,
            author,
            date,
            status

        };

        blogs.push(newBlog);

        localStorage.setItem(
            "blogs",
            JSON.stringify(blogs)
        );

        alert("Blog Published Successfully!");

    }


    blogForm.reset();

    window.location.href = "dashboard.html";

});