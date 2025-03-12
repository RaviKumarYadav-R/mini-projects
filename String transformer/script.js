const input = document.querySelector("input");
const lowerCase = document.querySelector(".lowerCase");
const upperCase = document.querySelector(".upperCase");
const camelCase = document.querySelector(".camelCase");
const pascalCase = document.querySelector(".pascalCase");
const snakeCase = document.querySelector(".snakeCase");
const kababCase = document.querySelector(".kababCase");
const trim = document.querySelector(".trim");

function toCamelCase(str) {
  const splitData = str.split(" ");
  const returnData = splitData
    .map((elem, i) => {
      if (i === 0) return elem;
      if(!elem) return
      return elem[0].toUpperCase() + elem.slice(1, elem.length);
    })
    .join("");
  return returnData;
}
function topascalCase(str) {
  const splitData = str.split(" ");
  const returnData = splitData
    .map((elem, i) => {
      if(!elem) return
      return elem[0].toUpperCase() + elem.slice(1, elem.length);
    })
    .join("");
  return returnData;
}

function transformedText() {
  const inputValue = input.value.trim();
  lowerCase.innerText = inputValue.toLowerCase();
  upperCase.innerText = inputValue.toUpperCase();
  camelCase.innerText = toCamelCase(inputValue.toLowerCase());
  pascalCase.innerText = topascalCase(inputValue.toLowerCase());
  snakeCase.innerText = inputValue.split(" ").join("_");
  kababCase.innerText = inputValue.split(" ").join("-");
  trim.innerText = inputValue.split(" ").join("");
}

transformedText();
input.addEventListener("input", () => {
  transformedText();
});
