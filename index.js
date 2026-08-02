let email=document.getElementById("email")
let password=document.getElementById("password")
let loginbtn=document.getElementsByClassName("login-btn")[0]
let loginpage=document.getElementsByClassName("login-page")[0]

let students=JSON.parse(localStorage.getitem("students"))


loginbtn.addEventListener("click", () => {
    const enteredemail = email.value;
    const enteredpassword = password.value;

    let foundUser = false;

    for (const user of students) {
        if (
            enteredemail === user.email &&
            enteredpassword === user.password
        ) {
            foundUser = true;

            localStorage.setItem("loggedInUser", JSON.stringify(user));

            window.location.href = "dashboard.html";
            break; 
        }
    }

    if (!foundUser) {
        alert("Wrong email or password");
    }
});