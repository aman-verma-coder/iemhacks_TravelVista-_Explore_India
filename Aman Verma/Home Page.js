let searchDiv = document.querySelector(".search-bar");
let formm = document.querySelector("#form1");
let searchIcon = document.querySelector("#search");
let navigationbar = document.querySelector(".navigation-bar");
let navbar = document.querySelector(".nav-bar");
let searchBtn = document.querySelector(".big-search");
let loginBtn = document.querySelector("#login-button");
let loginPage = document.querySelector("#login-container");
let formClose = document.querySelector("#form-close");
let signupBtn = document.querySelector("#signup-button");
let signupPage = document.querySelector(".signup-page");
let formClose2 = document.querySelector("#form-close2");
let menuBar = document.querySelector("#menu-bar");
let navBarDiv = document.querySelectorAll(".nav-bar-div");
let vidBtn = document.querySelectorAll(".vid-btn");
let vidBtnActive = ['vid-btn1', 'vid-btn2', 'vid-btn3', 'vid-btn3', 'vid-btn4', 'vid-btn5'];
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
    loginPage.classList.add("login-container2");
    formClose.addEventListener("click", () => {
        loginPage.classList.remove("login-container2");
    })
})
signupBtn.addEventListener("click", () => {
    signupPage.classList.add("signup-page-click");
    formClose2.addEventListener("click", () => {
        signupPage.classList.remove("signup-page-click");
    })
})
menuBar.addEventListener("click", () => {
    navbar.classList.toggle("nav-bar-again");
    navBarDiv.classList.add(".nav-bar-div2");
    menuBar.addEventListener("click", () => {
        navbar.classList.toggle("nav-bar-again");
        navbar.classList.add("nav-bar");
        navBarDiv.classList.remove(".nav-bar-div2");
    })
})
vidBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // let vidBtnActive = document.querySelectorAll(".vid-btn.active");
        // vidBtnActive.classList.remove("active");
        // btn.classList.add("active");
        (document.querySelectorAll('.controls .active')).classList.remove('active');
        btn.classList.add('active');
    });
});
let video1 = document.querySelector("#vid-icon1");
let vid1 = document.querySelector("#vid1");
let video2 = document.querySelector("#vid-icon2");
let vid2 = document.querySelector("#vid2");
let video3 = document.querySelector("#vid-icon3");
let vid3 = document.querySelector("#vid3");
let video4 = document.querySelector("#vid-icon4");
let vid4 = document.querySelector("#vid4");
let video5 = document.querySelector("#vid-icon5");
let vid5 = document.querySelector("#vid5");
let previousVideo = vid1;
video1.addEventListener("click", () => {
    previousVideo.classList.remove("autoply");
    vid1.classList.add("autoply");
    previousVideo = vid1;
})
video2.addEventListener("click", () => {
    previousVideo.classList.remove("autoply");
    vid2.classList.add("autoply");
    previousVideo = vid2;
})
video3.addEventListener("click", () => {
    previousVideo.classList.remove("autoply");
    vid3.classList.add("autoply");
    previousVideo = vid3;
})
video4.addEventListener("click", () => {
    previousVideo.classList.remove("autoply");
    vid4.classList.add("autoply");
    previousVideo = vid4;
})
video5.addEventListener("click", () => {
    previousVideo.classList.remove("autoply");
    vid5.classList.add("autoply");
    previousVideo = vid5;
})