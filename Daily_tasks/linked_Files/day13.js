
let userList = [{
    username: "User1",
    password: "Password1"
},
{
    username: "User2",
    password: "Password2"
},
];
function validateUsername() {
    const username = document.getElementById("username").value;
    const usernameErr = document.getElementById("username-err");
    if (username === "") {
        usernameErr.innerHTML = "Username cannot be empty";
        return false;
    }
    else if (Number.isInteger(parseInt(username))) {
        usernameErr.innerHTML = "Enter valid username";
        return false;
    }
    else {
        usernameErr.innerHTML = "";
    }
    return true;
}
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordErr = document.getElementById("password-err");
    const minLength = 8;

    if (password.length < minLength) {
        passwordErr.innerHTML = `Password must be at least ${minLength} characters long`;
        return false;
    } else {
        passwordErr.innerHTML = "";
    }
    return true;
}

let btn = document.getElementById("submit");
btn.addEventListener("click", function (event) {
    validateUsername();
    validatePassword();


    const usernameErr = document.getElementById("username-err").innerHTML;
    const passwordErr = document.getElementById("password-err").innerHTML;
    if (usernameErr !== "" || passwordErr !== "") {
        event.preventDefault();
    }

    if (validateUsername() && validatePassword()) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const foundUser = userList.find(user => user.username === username && user.password === password);
        if (foundUser) {
            alert("Logged In");

            setTimeout(() => {
                window.location.href = "http://127.0.0.1:8080/Daily_tasks/linked_Files/home-13.html";
            }, 2);
        }
        else {
            alert("Invalid username or password.")
            event.preventDefault();
        }
    }

});