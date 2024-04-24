"use strict";

/**
 * Agregar evento a un elemento.
 * @param {HTMLElement} elem - Elemento al que se le agregará el evento.
 * @param {string} type - Tipo de evento (por ejemplo, 'click', 'scroll', etc.).
 * @param {Function} callback - Función que se ejecutará cuando ocurra el evento.
 */
const addEventOnElem = function (elem, type, callback) {
  // Si elem es una colección de elementos
  if (elem.length > 1) {
    // Iterar sobre cada elemento y agregar el evento
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    // Si elem es un solo elemento, agregar el evento directamente
    elem.addEventListener(type, callback);
  }
};

/**
 * Alternar el menú de navegación.
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

// Agregar evento de clic al botón de alternar el menú de navegación
addEventOnElem(navToggler, "click", toggleNavbar);

// Función para cerrar el menú de navegación
const closeNavbar = () => navbar.classList.remove("active");

// Agregar evento de clic a cada enlace de navegación para cerrar el menú al hacer clic
addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Hacer activo el encabezado y el botón de retroceso al desplazarse hasta 100px.
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  // Si la posición de desplazamiento vertical es mayor que 100px
  if (window.scrollY > 100) {
    // Agregar la clase 'active' al encabezado y al botón de retroceso
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    // De lo contrario, eliminar la clase 'active'
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

// Agregar evento de desplazamiento a la ventana para activar el encabezado y el botón de retroceso
addEventOnElem(window, "scroll", headerActive);

/**
 * Función de filtrado.
 */
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  // Eliminar la clase 'active' del último botón de filtro clicado
  lastClickedFilterBtn.classList.remove("active");
  // Agregar la clase 'active' al botón de filtro actual
  this.classList.add("active");
  // Guardar el botón de filtro actual para la próxima vez
  lastClickedFilterBtn = this;

  // Iterar sobre los elementos a filtrar
  for (let i = 0; i < filterItems.length; i++) {
    if (
      this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all"
    ) {
      // Si el botón de filtro coincide o es 'all', mostrar el elemento
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      // De lo contrario, ocultar el elemento
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

// Agregar evento de clic a los botones de filtro
addEventOnElem(filterBtns, "click", filter);

const dialog = document.getElementById("miDialog");
const btnAbrirModal = document.querySelector("[data-id='abrir-modal']");
const btnCerrarModal = document.querySelector("[data-id='cerrar-modal']");
let iframe = document.getElementById("iframe");
let urlReservas = 'https://kko.kisscalservice.de/?dbstudio=ks_linetattoo';

btnAbrirModal.addEventListener("click", () => {
  dialog.showModal();
  dialog.style.display = "grid";
  iframe.src =  urlReservas;
  iframe.style.display = "block";
});

btnCerrarModal.addEventListener("click", () => {
  dialog.style.display = "none";
  dialog.close();
});
