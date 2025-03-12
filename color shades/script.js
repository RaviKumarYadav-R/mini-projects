function adjustHexColor(color, factor) {
  if (color[0] === "#") color = color.slice(1);

  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  r = Math.min(255, Math.max(0, Math.floor(r * factor)));
  g = Math.min(255, Math.max(0, Math.floor(g * factor)));
  b = Math.min(255, Math.max(0, Math.floor(b * factor)));

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function generateShades(color, shadesCount) {
  const shades = [];
  for (let i = 0; i < shadesCount; i++) {
    const factor = 1 - i / (shadesCount - 1);
    const shade = adjustHexColor(color, factor);
    shades.push(shade);
  }
  shades.forEach((elem) => {
    const div = document.createElement("div");
    div.style.backgroundColor = elem;
    const span = document.createElement("span")
    span.innerText = elem
    div.append(span)
    document.body.append(div);
  });
}

generateShades("#ff0000", 5);
