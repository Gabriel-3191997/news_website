// scroll.js
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");

  // Scroll right
  document.querySelector("#scrollRight").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
  });

  // Scroll left
  document.querySelector("#scrollLeft").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
  });
});
