const clrWrapper = document.querySelector(".color-wrapper");
const generateBtn = document.querySelector(".clr-generator");
const clrCode = document.querySelector(".clr-code");

const char = "0123456789abcdef";

let clr = "#";
const generateClr = () => {
  let clr = "#";
  for (let i = 0; i < 6; i++) {
    let randChar = char[Math.floor(Math.random() * 16)];
    clr += randChar;
    clrCode.textContent = clr;
    clrWrapper.setAttribute("style", `background: ${clr}`);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  generateClr();
});

generateBtn.addEventListener("click", () => {
  generateClr();
});
