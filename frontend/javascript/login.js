const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(
      "https://blog-application-086t.onrender.com/api/auth/login", 
      {
        method: "POST",

        headers: {
         "Content-Type": "application/json"
        },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log("backend response: ", data);

    if (!response.ok) {
      alert(data.message || "Login Failed");
      return;
    }
    // login state
    localStorage.setItem("isLoggedIn", "true");

    // save logged-in user
    // localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    alert(data.message);
    window.location.href = "index.html";
  } catch(error){
        console.error("Login Error: ", error);
        alert("Server is not running!| login Error: "+ error.message)
    }
});
