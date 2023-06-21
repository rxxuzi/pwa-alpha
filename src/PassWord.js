var password = document.getElementById("password");
var username = document.getElementById("username");
s
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username == "admin" && password == "admin") {
    alert("Login successfully");
    return false;
    } else {
    alert("Login failed");
    }
}
