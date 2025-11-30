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

// Modal de autos
const modal = document.getElementById("modalAuto");
const cerrarModal = document.getElementById("cerrarModal");
const modalImg = document.getElementById("modalImg");
const modalTitulo = document.getElementById("modalTitulo");
const modalModelo = document.getElementById("modalModelo");
const modalPrecio = document.getElementById("modalPrecio");

// Abrir modal al hacer clic en "Más información"
document.querySelectorAll(".auto-card").forEach(card => {
  const btn = card.querySelector(".btn-info");

  btn.addEventListener("click", () => {
    modalImg.src = card.querySelector("img").src;
    modalTitulo.textContent = card.querySelector("h3").textContent;
    modalModelo.textContent = "Modelo: " + card.querySelector(".modelo").textContent;
    modalPrecio.textContent = "Precio: " + card.querySelector(".precio").textContent;

    modal.classList.add("show");
  });
});

// Cerrar modal con la X
cerrarModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Cerrar modal haciendo clic fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
