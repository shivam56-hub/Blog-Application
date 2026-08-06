const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        name : name,
        email : email,
        password : password
    };
    localStorage.setItem("user",JSON.stringify(user));

    alert("Registration successful!")
});