// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const abierto = navLinks.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", abierto);
});

// Scroll interno suave
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// Filtros del cataloo
const botonesFiltro = document.querySelectorAll(".filtros button");
const autos = document.querySelectorAll(".auto-card");

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    const filtro = boton.dataset.filter;

    autos.forEach(auto => {
      if (filtro === "all" || auto.classList.contains(filtro)) {
        auto.style.display = "block";
      } else {
        auto.style.display = "none";
      }
    });
  });
});


// Fade up al entrar
function animarAutos() {
  autos.forEach(auto => {
    const bounding = auto.getBoundingClientRect();
    if (bounding.top < window.innerHeight - 100) {
      auto.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", animarAutos);
window.addEventListener("load", animarAutos);


// Evento resize (accesibilidad)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
