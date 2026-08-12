const token = localStorage.getItem("token");

if(!token){
    alert("Please login first!");
    window.location.href = "login.html";
}

async function loadProfile(){
    try {
        const response = await fetch(
            `https://blog-application-086t.onrender.com/api/auth/profile`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const data = await response.json();
        console.log("Profile Response:", data);

        if(!response.ok){
            alert(data.message || "Unable to load profile");
            return;
        }

        // Display user information

        document.getElementById("userName").textContent = data.user.name;
        document.getElementById("userEmail").textContent = data.user.email;
    }catch(error){
        console.error("Profile Error: ",error);
        alert("Unable to connect to server!");
    }
}

loadProfile();

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click",() =>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful!");

    window.location.href = "login.html";
});