function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      ";expires=" +
      expires.toUTCString() +
      ";path=/";
  }
  
  function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split("=");
      if (cookiePair[0].trim() === name) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember").checked;
  
    if (rememberMe) {
      setCookie("username", username, 30);
      setCookie("password", password, 30);
    } else {
      setCookie("username", "", -1);
      setCookie("password", "", -1);
    }
  });
  
  function login() {
    var Name = document.getElementById("Name").value;
    var number = document.getElementById("number").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (
      Name.length != 0 &&
      number != 0 &&
      username.length != 0 &&
      password.length != 0
    ) {
      localStorage.setItem("Name", Name);
      localStorage.setItem("number", number);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Your details are saved. Now you can use your credentials to login.");
    } else {
      alert("Sign up form can't be empty! Please enter your details.");
    }
  }
  
  var attempt = 3;
  function validate() {
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    const username1 = localStorage.getItem("username");
    const password1 = localStorage.getItem("password");
    if (username.length != 0 && password.length != 0) {
      if (username == username1 && password == password1) {
        alert("Login successfully! You are entering in TravelVista.");
        window.location = "dashboard.html";
        return false;
      } else {
        alert("Invalid User Id/Password");
        attempt--;
        alert("Only " + attempt + " attempt(s) are left");
        if (attempt == 0) {
          alert("You have reached maximum number of attempts.");
          document.getElementById("username").disabled = true;
          document.getElementById("password").disabled = true;
          document.getElementById("submit").disabled = true;
        }
        return false;
      }
    } else {
      alert(
        "User Id/Password can't be empty! Please enter your User Id/Password."
      );
    }
  }
  
  function forgot() {
    const newPassword = prompt("Enter your new password:");
    if (newPassword !== null && newPassword !== "") {
      localStorage.setItem("password", newPassword);
      alert("Password changed successfully!");
    }
    else{
      alert("New password can't be empty. Enter your new password.");
    }
  }
  