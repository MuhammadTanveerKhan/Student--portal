let email=document.getElementById("email")
let password=document.getElementById("password")
let loginbtn=document.getElementsByClassName("login-btn")[0]
let loginpage=document.getElementsByClassName("login-page")[0]

let users=[
    {
email:"tanveer12@gmail.com",
password:"1234"
    },
    {
        email:"hussain12@gmail.com",
        password:"9988"
    }
]
 loginbtn.addEventListener("click",() => {
const enteredemail=email.value
const enteredpassword=password.value
 
loginbtn.addEventListener("click", () => {
    const enteredemail = email.value;
    const enteredpassword = password.value;

    let foundUser = false;

    for (const user of users) {
        if (
            enteredemail === user.email &&
            enteredpassword === user.password
        ) {
            foundUser = true;

            localStorage.setItem("loggedInUser", JSON.stringify(user));

            window.location.href = "dashboard.html";
            break; // Stop checking other users
        }
    }

    if (!foundUser) {
        alert("Wrong email or password");
    }
});