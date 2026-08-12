const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {
        const response = await fetch(
            "https://blog-application-086t.onrender.com/api/auth/register",
            {
                method :"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if(!response.ok){
            alert(data.message);
            return;
        }
        alert(data.message);
        window.location.href = "login.html";
    }
    catch(error){
        alert("New version text 1234");
        // console.error("Register Error: ", error);
        // alert("Server is not running!| Register Error: " + error.message)
    }
})

