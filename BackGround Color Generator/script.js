const ParagraphEl = document.querySelector(".color-hex");
const copyBtn = document.querySelector("span");
const GenerateBtn = document.querySelector("button");
const body = document.body;

GenerateBtn.addEventListener("click", () => {
  const hex = "0123456789ABCDEF";
  let hexVal = "#";
  for (let i = 0; i < 6; i++) {
    hexVal = hexVal + hex[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor = hexVal;
  ParagraphEl.innerText = hexVal;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(ParagraphEl.innerText);
});

// follow infinite_css on instagram
