const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {
        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method :"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();
        console.log("backend response: ",data)

        if(!response.ok){
            alert(data.message);
            return;
        }
        // login state
        localStorage.setItem("isLoggedIn","true");

        // save logged-in user
        localStorage.setItem(
          "user",JSON.stringify(data.user)
        )
        alert(data.message);
        window.location.href = "index.html";
    }
    catch(error){
        console.error("Login error: ", error);
        alert("Server is not running!")
    }
})


// const loginBtn = document.getElementById("loginBtn");
// loginBtn.addEventListener("click", () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const storeUser = JSON.parse(localStorage.getItem("user"));
//   console.log(storeUser);

//   if (
//     storeUser &&
//     email === storeUser.email &&
//     password === storeUser.password
//   ) {

//     localStorage.setItem("isLoggedIn","true");

//     alert("Login Successful!");
    
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid email or password!");
//   }
// });
