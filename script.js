/* MODO CLARO*/
const body = document.querySelector("body");
const header = document.querySelector("header");
const aside = document.querySelector(".aside-container");
const navButtonIm = document.querySelector("#navButtonIm");
const navButtonTxt = document.querySelector("#navButtonTxt");
const lightbutton= document.querySelector("#lightButton");

lightbutton.addEventListener("click", ()=> {
body.classList.add("light-mode");
header.classList.add("light-mode");
aside.classList.add("light-mode");
navButtonIm.classList.add("light-mode");
navButtonTxt.classList.add("light-mode");
lightbutton.classList.add("light-mode");
})