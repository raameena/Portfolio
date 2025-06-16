// theme-toggle.js

document.addEventListener("DOMContentLoaded", () => {
  // First, find the <i> tag, which is where Quarto put the aria-label.
  const icon = document.querySelector('i[aria-label="Toggle theme"]');
  
  // Then, get the parent <a> tag of that icon. This is our actual button.
  const btn = icon ? icon.closest('a') : null;

  // If we couldn't find the button, stop.
  if (!btn) {
    console.warn("Could not find the theme toggle button.");
    return;
  }

  const root = document.documentElement;

  // This function applies the theme and changes the icon's class.
  const applyTheme = (theme) => {
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme-preference", theme);
    
    // We overwrite the class of the icon we found to switch between sun and moon.
    icon.className = theme === "dark"
      ? "bi bi-sun-fill"
      : "bi bi-moon-fill";
  };

  // When the button is clicked, prevent the redirect and toggle the theme.
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const currentTheme = root.getAttribute("data-bs-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

  // This part handles the initial state you wanted.
  // It checks for a saved preference first. If there isn't one, it checks
  // your computer's OS setting (light or dark mode) and respects it.
  const saved = localStorage.getItem("theme-preference");
  const initialTheme = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(initialTheme);
});