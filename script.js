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
asideInput.classList.toggle("light-mode");
backgroundInput.classList.toggle("light-mode");
fxInput.classList.toggle("light-mode");
resetButton.classList.toggle("light-mode");
})

lightButton.addEventListener("click", ()=> {

} )

/*LIGHT MODE BUTTON */

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



/*CLOSE ASIDE*/

const closeAsideButton = document.querySelector("#closeAsideButton");

const closeAside = () => {

  imageAside.classList.add('hidden-aside');
  imageAside.classList.remove('aside-image');
  textAside.classList.add('hidden-aside');
  textAside.classList.remove('aside-text');
  aside.classList.add('hidden-aside');
  aside.classList.remove('aside-container');
}

closeAsideButton.addEventListener('click', closeAside);


/*UPLOAD IMAGE*/

const url = document.querySelector(".aside-url-input");
const uploadImage = () => {
  const uploadImage = document.querySelector(".meme-image");
  uploadImage.style.backgroundImage = `url("${url.value}")`;
  uploadImage.style.backgroundSize = 'contain'
  uploadImage.style.backgroundRepeat = 'no-repeat'
  uploadImage.style.backgroundPosition = 'center'
}
url.addEventListener('change', uploadImage);



/*IMAGE FILTERS*/
/*Background Color*/
const backgroundColorMeme = document.querySelector(".background-color");
const changeColor = () => {
  const memeColor = document.querySelector(".meme-image");
  memeColor.style.backgroundColor = backgroundColorMeme.value;
}
backgroundColorMeme.addEventListener('input', changeColor);

/*Color Fx*/
const colorFx = document.querySelector(".background-fx");
const changeFx = () => {
  const memeColor = document.querySelector(".meme-image");
  memeColor.style.backgroundBlendMode = colorFx.value;
}
colorFx.addEventListener('input', changeFx);

/*Filters Sliders*/

// const filterBlend = document.querySelector(".input-filter");
const filterBlend = document.getElementsByClassName("input-filter");
const memeColor = document.querySelector(".meme-image");
const brightness = document.querySelector("#brightnessSlider");
const opacity = document.querySelector("#opacitySlider");
const contrast = document.querySelector("#contrastSlider");
const blurSlider = document.querySelector("#blurSlider");
const grayscale = document.querySelector("#grayScaleSlider");
const sepia = document.querySelector("#sepiaSlider");
const hueRotation = document.querySelector("#hueRotateSlider");
const saturation = document.querySelector("#saturateSlider");
const invert = document.querySelector("#invertSlider");

const changeFilter = () => {
      let brightnessValue = brightness.value;
      let opacityValue = opacity.value;
      let contrastValue = contrast.value;
      let blurValue = blurSlider.value;
      let grayscaleValue = grayscale.value;
      let sepiaValue = sepia.value;
      let hueRotationValue = hueRotation.value;
      let saturationValue = saturation.value;
      let invertValue = invert.value;
    memeColor.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) blur(${blurValue}px) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) sepia(${sepiaValue}%) saturate(${saturationValue}%) invert(${invertValue})`;
  }

for (i = 0; i < filterBlend.length; i++) {
  filterBlend[i].addEventListener('input', changeFilter);
}

///////ESTO ES OTRA OPCION P LOS FILTROS/////////

// const actualizarImagen = (evento) => {
//   if (evento.target.value.length !== 0) {
//     $('image-meme').style.backgroundImage = `url("${evento.target.value}")`
//   }
// }

// const actualizarColorMezcla = (evento) => {
//   $('blend-mode-color').innerText = evento.target.value.toUpperCase()
//   $('image-meme').style.backgroundColor = evento.target.value
// }

// const actualizarTipoMezcla = (evento) => {
//   $('image-meme').style.backgroundBlendMode = evento.target.value
// }


// const actualizarFiltros = () => {
//   const brightness = $('brightness-slider').value
//   const opacity = $('opacity-slider').value
//   const blur = $('blur-slider').value
//   const contrast = $('contrast-slider').value
//   const grayscale = $('grayscale-slider').value
//   const hue = $('hue-slider').value
//   const sepia = $('sepia-slider').value
//   const saturate = $('saturate-slider').value
//   const invert = $('invert-slider').value

//   $('.meme-image').style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
// }

// const reestrablecerFiltros = () => {
//   $('brightness-slider').value = 1
//   $('opacity-slider').value = 1
//   $('blur-slider').value = 0
//   $('contrast-slider').value = 100
//   $('grayscale-slider').value = 0
//   $('hue-slider').value = 0
//   $('sepia-slider').value = 0
//   $('saturate-slider').value = 100
//   $('invert-slider').value = 0

//   actualizarFiltros()
// }


//TEXT FILTERS//

//Top Text
const textInputTop = document.querySelector("#textAreaTop");
const topText = document.querySelector(".top-text");
const changeText = () => {
topText.innerText = textInputTop.value;
}
textInputTop.addEventListener('input', changeText);

//Bottom Text
const textInputBottom = document.querySelector("#textAreaBottom");
const bottomText = document.querySelector(".bottom-text");
const changeText2 = () => {
  bottomText.innerText = textInputBottom.value;
}
textInputBottom.addEventListener('input', changeText2);

// Text Font //
const txtFont = document.querySelector(".text-font-input");
const changeFont = () => {
  topText.style.fontFamily = txtFont.value
  bottomText.style.fontFamily = txtFont.value
}
txtFont.addEventListener('change', changeFont);

//Hide Text//
const hideTopText = document.querySelector(".top-text-checkbox");
const hideBottomText = document.querySelector(".bottom-text-checkbox");
const hideText = () => {
  const hide = topText.getAttribute('class');

  if (hide === "top-text") {
    topText.classList.remove("top-text");
    topText.classList.add("hidden-text");
  }else {
    topText.classList.add("top-text");
    topText.classList.remove("hidden-text");
  } 
}
hideTopText.addEventListener('click', hideText);

const hideText2 = () => {
  const hide2 = bottomText.getAttribute('class');

  if (hide2 === "bottom-text") {
    bottomText.classList.remove("bottom-text");
    bottomText.classList.add("hidden-text");
  }else {
    bottomText.classList.add("bottom-text");
    bottomText.classList.remove("hidden-text");
  } 
}
hideBottomText.addEventListener('click', hideText2);
