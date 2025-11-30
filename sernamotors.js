// menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // ARIA accesibilidad
  const abierto = navLinks.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", abierto);
});

// Scroll para navegación interna
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const destino = document.querySelector(link.getAttribute("href"));
    destino.scrollIntoView({
      behavior: "smooth"
    });

    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
