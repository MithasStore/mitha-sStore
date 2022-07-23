const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector("nav"),
  searchToggle = document.querySelector(".searchToggle");

// ===== SEARCH TOGGLE =====
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// ===== OPEN SIDEBAR MENU =====
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));
