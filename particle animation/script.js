brightColors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#EE82EE",
  "#FF1493",
  "#FFD700",
  "#FF6347",
  "#32CD32",
  "#00FA9A",
  "#00BFFF",
  "#8A2BE2",
  "#FF4500",
  "#DC143C",
  "#ADFF2F",
  "#FF8C00",
  "#FF00FF",
  "#7FFF00",
];

const shapes = [
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  "circle(50% at 50% 50%)",
  "ellipse(25% 40% at 50% 50%)",
];

document.body.addEventListener("mousemove", (e) => {
  const left = e.clientX;
  const top = e.clientY;
  const div = document.createElement("div");
  div.style.left = `${left}px`;
  div.style.top = `${top}px`;

  for (let index = 0; index < 10; index++) {
    const color = Math.floor(Math.random() * 20);
    const shapeindex = Math.floor(Math.random() * 5);
    const size = Math.floor(Math.random() * 15) + 1;
    const positionX = Math.floor(Math.random() * 100) + 1;
    const positiony = Math.floor(Math.random() * 100) + 1;

    const span = document.createElement("span");
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    span.style.left = `${positionX}%`;
    span.style.top = `${positiony}%`;
    span.style.clipPath = shapes[shapeindex];
    span.style.boxShadow = `0 0 10px red`;
    span.style.backgroundColor = brightColors[color];
    div.append(span);
  }
  document.body.append(div);

  setTimeout(() => {
    div.remove();
  }, 3000);

  // const translate_X = Math.floor(Math.random() * 100) + 1;
  // const translate_y = Math.floor(Math.random() * 100) + 1;
});
