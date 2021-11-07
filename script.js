const url = "http://api.voicerss.org/";
const apiKey = "9b687eec4a494bc78f6d372d5748514c";
const buildUrl = (str) => `${url}?key=${apiKey}&hl=en-gb&src=${str}&v=Lily&r=2`;

const username = () => document.getElementById("username");
const password = () => document.getElementById("password");

const welcomeMsg = "Hello human, welcome to the login page";
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
