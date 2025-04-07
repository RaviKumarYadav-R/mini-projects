const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    document.querySelector(".open")?.classList.remove("open"); // Remove 'open' class from any currently active image
    image.classList.add("open"); // Add 'open' class to the clicked image
  });
});
