const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storeUser = JSON.parse(localStorage.getItem("user"));
  console.log(storeUser);

  if (
    storeUser &&
    email === storeUser.email &&
    password === storeUser.password
  ) {

    localStorage.setItem("isLoggedIn","true");

    alert("Login Successful!");
    
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password!");
  }
});
