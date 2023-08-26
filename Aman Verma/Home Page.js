let searchDiv = document.querySelector(".search-bar");
let formm = document.querySelector("#form1");
let searchIcon = document.querySelector("#search");
let navigationbar = document.querySelector(".navigation-bar");
let navbar = document.querySelector(".nav-bar");
let searchBtn = document.querySelector(".big-search");
let loginBtn = document.querySelector("#login-button");
let loginPage = document.querySelector(".login-page");
let formClose = document.querySelector("#form-close");
let signupBtn = document.querySelector("#signup-button");
let signupPage = document.querySelector(".signup-page");
let formClose2 = document.querySelector("#form-close2");
let menuBar = document.querySelector("#menu-bar");
let navBarDiv = document.querySelectorAll(".nav-bar-div");
navigationbar.removeChild(searchDiv);
searchIcon.addEventListener("mouseenter", () => {
    navigationbar.appendChild(searchDiv);
})
window.onscroll = () => {
    navigationbar.removeChild(searchDiv);
}
formm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("searched");
})
loginBtn.addEventListener("click", () => {
    loginPage.classList.add("login-page-click");
    formClose.addEventListener("click", () => {
        loginPage.classList.remove("login-page-click");
    })
})
signupBtn.addEventListener("click", () => {
    signupPage.classList.add("signup-page-click");
    formClose2.addEventListener("click", () => {
        signupPage.classList.remove("signup-page-click");
    })
})