/* LIGHT MODE*/
const body = document.querySelector("body");
const header = document.querySelector("header");
const aside = document.querySelector(".aside-container");
const navButtonIm = document.querySelector("#navButtonIm");
const navButtonTxt = document.querySelector("#navButtonTxt");
const input = document.querySelector("input");
const textAreaTop = document.querySelector("#textAreaTop");
const textAreaBottom = document.querySelector("#textAreaBottom");
const textFontInput = document.querySelector("select.text-font-input");
const textSizeInput = document.querySelector("input.text-size-input");
const textColorInput =document.querySelector("input.text-color-input");
const textBackgroundInput = document.querySelector("input.text-background-input");
const outlineNone = document.querySelector("#outlineNone");
const outlineLight = document.querySelector("#outlineLight");
const outlineDark = document.querySelector("#outlineDark");
const lineheightInput = document.querySelector("select.lineheight-input");
const paddingInput = document.querySelector("input.padding-input");
const asideInput = document.querySelector("input.aside-url-input");
const backgroundInput = document.querySelector("input.background-color")
const fxInput =  document.querySelector("select.background-fx");
const resetButton =  document.querySelector(".filters-reset-button");
const lightButton = document.querySelector("#lightButton");

lightButton.addEventListener("click", ()=> {
body.classList.toggle("light-mode");
header.classList.toggle("light-mode");
aside.classList.toggle("light-mode");
navButtonIm.classList.toggle("light-mode");
navButtonTxt.classList.toggle("light-mode");
input.classList.toggle("light-mode");
textAreaTop.classList.toggle("light-mode");
textAreaBottom.classList.toggle("light-mode");
textFontInput.classList.toggle("light-mode");
textFontInput.classList.toggle("light-mode");
textSizeInput.classList.toggle("light-mode");
textColorInput.classList.toggle("light-mode");
textBackgroundInput.classList.toggle("light-mode");
outlineNone.classList.toggle("light-mode");
outlineLight.classList.toggle("light-mode");
outlineDark.classList.toggle("light-mode");
lineheightInput.classList.toggle("light-mode");
paddingInput.classList.toggle("light-mode");
lightButton.classList.toggle("light-mode");
asideInput.classList.add("light-mode");
backgroundInput.classList.toggle("light-mode");
fxInput.classList.toggle("light-mode");
resetButton.classList.toggle("light-mode");
})

lightButton.addEventListener("click", ()=> {

} )

/*BOTON MODO CLARO/OSCURO */

const lightMode = document.querySelector("#lightButton");
const lightModeButton = document.querySelector("#lightModeButton");

const changeMode = () => {

lightModeButton.classList.toggle('light');
const mode = lightModeButton.getAttribute('class');
if (mode === "light-mode-button light") {
  lightModeButton.innerText = 'Claro';
} else {
  lightModeButton.innerText = 'Oscuro';
}
}
lightMode.addEventListener('click', changeMode)


/*HIDDEN ASIDE */

const textAside = document.querySelector("#asideText");
const imageAside = document.querySelector(".aside-image");
const textAsideButton = document.querySelector("#navButtonTxt");
const imageAsideButton = document.querySelector("#navButtonIm");

const showAside = () => {

  const showMode = textAside.getAttribute("class");
    if (showMode === "hidden-aside") {
      textAside.classList.remove('hidden-aside');
      imageAside.classList.remove('aside-image');
      imageAside.classList.add('hidden-aside');
    } else {
      textAside.classList.add('hidden-aside');
      imageAside.classList.add('aside-image');
      imageAside.classList.remove('hidden-aside');
    }
  }

textAsideButton.addEventListener("click", showAside);
imageAsideButton.addEventListener("click", showAside);



/*CLOSE*/

const closeAsideButton = document.querySelector("#closeAsideButton");

const closeAside = () => {

  imageAside.classList.add('hidden-aside');
  imageAside.classList.remove('aside-image');
  textAside.classList.add('hidden-aside');
  textAside.classList.remove('aside-text');
  aside.classList.add('hidden-aside');
  aside.classList.remove('aside-container');
}

closeAsideButton.addEventListener('click', closeAside)








/*
const buttonImage = document.querySelector("#navButtonIm");
const buttonText = document.querySelector("#navButtonTxt");
const asideImage = document.querySelector(".aside-image");
const asideText = document.querySelector("#asideText");
const asideBar = document.querySelector(".aside-container");

const showAside = () => {

buttonText.classList.toggle('hidden-aside');
const showTextAside = asideImage.getAttribute('class');

if (showTextAside === "#asideText.hidden-aside") {
  asideText.classList.remove('hidden-aside');
  asideImage.classList.add('hidden-aside');
  
  
} else if (showTextAside === buttonImage) {
  asideText.classList.add('hidden-aside');
  asideImage.classList.remove('hidden-aside');
}

} 

buttonImage.addEventListener("click", showTextAside);
buttonText.addEventListener("click", showAside);

*/