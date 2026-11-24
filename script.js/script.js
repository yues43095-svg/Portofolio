document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const htmlElement = document.documentElement;

  const year = document.getElementById("currentYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  function applyTheme(theme) {
    htmlElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    if (themeIcon) {
      themeIcon.className = theme === "dark"
        ? "bi bi-sun-fill"
        : "bi bi-moon-stars-fill";
    }
  }

  applyTheme(localStorage.getItem("theme") || "light");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }
});