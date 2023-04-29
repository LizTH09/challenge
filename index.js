const notFound = document.querySelector(".notFound");
const result = document.querySelector(".result");
const copyButton = document.querySelector(".copyButton");
const info = document.querySelector(".info");
const buttonEncrypt = document.querySelector(".encrypt");

// Encriptado de texto

const encryptText = () => {
  let myText = getText();
  let newText = myText
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("resultText").value = newText;
};

// Desencriptación de texto

const decryptText = () => {
  let myText = getText();
  let newText = myText
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("resultText").value = newText;
};

// Copiar texto en portapapeles

const copyText = () => {
  navigator.clipboard.writeText(resultText.value);
  copyButton.innerHTML = "Copiado!";
  setTimeout(() => {
    copyButton.innerText = "Copiar";
  }, 2000);
};

const restrictions = () => {};

//Obtener texto del input (Text Area) y cambiar diseño si se encuentra resultados

const getText = () => {
  let text = document.getElementById("inputText").value;
  text && verifyNotEmpty();

  //   Se obtiene un array con cada caracter y se compara con los permitidos, en caso sean caracteres especiales, se reemplaza por un caracter equivalente

  let oneWord = text.split("");
  let specialCharacter = false;
  const regex = /^[a-z\s]*$/;
  oneWord.forEach((word) => {
    if (!regex.test(word)) {
      specialCharacter = true;
    }
  });
  specialCharacter &&
    alert(
      "El texto de entrada contiene carácteres no soportados. Se procederá a reemplazar con carácteres permitidos"
    );
  text = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  document.getElementById("inputText").value = text;

  return text;
};

//Cambiar diseño si hay resuldado

const verifyNotEmpty = () => {
  notFound.style.display = "none";
  result.style.display = "flex";
};
