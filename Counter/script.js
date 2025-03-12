const countNo = document.querySelector(".count-no");
const input = document.querySelector("input");
const increment = document.querySelector(".Increment");
const Decrement = document.querySelector(".Decrement");
const resetBtn = document.querySelector(".reset");

increment.addEventListener("click", () => {
  let inputVal = Number(input.value);
  let count = Number(countNo.innerText);
  countNo.innerText = count + inputVal;
});
Decrement.addEventListener("click", () => {
  let inputVal = Number(input.value);
  let count = Number(countNo.innerText);
  countNo.innerText = count - inputVal;
});

resetBtn.addEventListener("click", () => {
  countNo.innerText = 0;
});
