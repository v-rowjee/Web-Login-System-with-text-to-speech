// text-to-speech api

const url = "http://api.voicerss.org/";
const apiKey = "9b687eec4a494bc78f6d372d5748514c";
const buildUrl = (str) => `${url}?key=${apiKey}&hl=en-gb&src=${str}&v=Lily&r=2`;

const username = () => document.getElementById("username");
const password = () => document.getElementById("password");
const newUsername = () => document.getElementById("newUsername");
const newPassword = () => document.getElementById("newPassword");

const welcomeMsg = "Hello human, welcome to the login page";
const registerMsg =
  "This is the registration form. Create your new account here";
const loginMsg = "You're back to the login form. Sign in to continue";
const usernameMsg = "Enter your username";
const passwordMsg = "Enter your password";

document.addEventListener("DOMContentLoaded", () => {
  new Audio(buildUrl(welcomeMsg)).play();
});

username().addEventListener("click", () => {
  new Audio(buildUrl(usernameMsg)).play();
});

password().addEventListener("click", () => {
  new Audio(buildUrl(passwordMsg)).play();
});

newUsername().addEventListener("click", () => {
  new Audio(buildUrl(usernameMsg)).play();
});

newPassword().addEventListener("click", () => {
  new Audio(buildUrl(passwordMsg)).play();
});

// SWAPING TO OTHER FORM

const swapForm = () => document.getElementById("swapForm");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const title = document.getElementById("title");

swapForm().addEventListener("click", () => {
  // Login form -> Register Form
  if (title.innerHTML == "Login.") {
    new Audio(buildUrl(registerMsg)).play();

    loginForm.style = "display: none";
    registerForm.style = "display: flex";

    title.innerHTML = "Register.";
    swapForm().innerHTML = "Have an account? <br />Login Now!";

    // Register Form -> Login Form
  } else if (title.innerHTML == "Register.") {
    new Audio(buildUrl(loginMsg)).play();

    registerForm.style = "display: none";

    title.innerHTML = "Login.";
    swapForm().innerHTML = "Dont have an account yet?<br />Register now!";

    loginForm.style = "display: flex";
  }
});
