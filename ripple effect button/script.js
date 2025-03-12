const button = document.querySelectorAll(".ripple-button");
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const span = document.createElement("span");
    span.style.top = y + "px";
    span.style.left = x + "px";
    button.append(span);
    setTimeout(() => {
      span.remove();
    }, 1000);
  });
});
