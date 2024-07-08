"use strict";

/**
 * Agregar evento a un elemento.
 * @param {HTMLElement} elem - Elemento al que se le agregará el evento.
 * @param {string} type - Tipo de evento (por ejemplo, 'click', 'scroll', etc.).
 * @param {Function} callback - Función que se ejecutará cuando ocurra el evento.
 */


document.addEventListener('DOMContentLoaded', () => {
  const swiperWrapper = document.getElementById('swiper-wrapper');
  const totalImages = 26; // Total number of images
  const width = 550;
  const height = 550;

  for (let i = 1; i <= totalImages; i++) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const figure = document.createElement('figure');
    figure.className = 'card-banner img-holder';
    figure.style.setProperty('--width', `${width}`);
    figure.style.setProperty('--height', `${height}`);

    const imgCover = document.createElement('img');
    imgCover.src = `assets/images/uñas/uñas-${i}.webp`; // Adjust the path as needed
    imgCover.width = width;
    imgCover.height = height;
    imgCover.loading = 'lazy';
    imgCover.alt = `uñas image ${i}`;
    imgCover.className = 'img-cover-1';

    const imgContain = document.createElement('img');
    imgContain.src = `assets/images/uñas/uñas-${i}.webp`; // Adjust the path as needed
    imgContain.width = width;
    imgContain.height = height;
    imgContain.loading = 'lazy';
    imgContain.alt = `uñas image ${i}`;
    imgContain.className = 'img-contain-1';

    // Add click event to open modal image within the figure
    imgCover.addEventListener('click', () => {
      imgContain.style.display = 'block';
    });

    // Add click event to close modal image
    imgContain.addEventListener('click', () => {
      imgContain.style.display = 'none';
    });

    figure.appendChild(imgCover);
    figure.appendChild(imgContain);
    slide.appendChild(figure);
    swiperWrapper.appendChild(slide);
  }
});
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


const dialog = document.getElementById("miDialog");
const btnAbrirModal = document.querySelectorAll("[data-id='abrir-modal']");
const btnCerrarModal = document.querySelector("[data-id='cerrar-modal']");
let iframe = document.getElementById("iframe");
let urlReservas = "https://www.fresha.com/de/a/nail-line-heilbronn-heilbronn-stresemannstrasse-110-yzne02bw/booking?menu=true";

// Agrega un event listener a cada botón de abrir modal
btnAbrirModal.forEach(btn => {
  btn.addEventListener("click", () => {
    dialog.showModal();
    dialog.style.display = "grid";
    iframe.src = urlReservas;
    iframe.style.display = "block";
  });
});

btnCerrarModal.addEventListener("click", () => {
  dialog.style.display = "none";
  iframe.src = "";
  iframe.style.display = "none";
  dialog.close();
});