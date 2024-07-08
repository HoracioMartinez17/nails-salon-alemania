// cargarMenus.js
import data from "./datos/fotosMenu.js";

document.addEventListener('DOMContentLoaded', () => {
    const contenedorMenuUl = document.getElementById("menu-ul");

    // Verificación de la existencia del contenedor
    if (!contenedorMenuUl) {
        console.error("Elemento con ID 'menu-ul' no encontrado.");
        return;
    }

    // Función para formatear un número como euros
    const formatToEuro = (amount) => {
        const formatter = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
        });
        return formatter.format(amount);
    };

    const createMenuItem = (data) => {
        const precioFormateado = formatToEuro(data.precio);
        const ofertaFormateada = data.oferta ? formatToEuro(data.oferta) : null;

        const menuContanerLi = document.createElement("li");
        const plantilla = `
            <div class="pricing-card">
                <figure
                    class="card-banner img-holder"
                    style="--width: 100; --height: 100"
                >
                    <img
                        src="${data.imagen}"
                        alt="${data.nombre}"
                        width="100"
                        height="100"
                        class="img-cover"
                    />
                </figure>

                <div class="wrapper">
                    <h3 class="h3 card-title">${data.nombre}</h3>
                    <p class="card-text">${data.ingredientes}</p>
                </div>

                <data class="card-price" value="${ofertaFormateada ? data.oferta : data.precio}">
                    ${ofertaFormateada ? 
                        `<span style="text-decoration: line-through; color: red;">${precioFormateado}</span> ${ofertaFormateada}` : 
                        precioFormateado}
                </data>
            </div>
        `;
        menuContanerLi.innerHTML = plantilla;
        return menuContanerLi;
    };

    const renderMenuItems = (fotosMenu) => {
        contenedorMenuUl.innerHTML = "";
        fotosMenu.forEach((menuFoto) => {
            const menuItem = createMenuItem(menuFoto);
            contenedorMenuUl.append(menuItem);
        });
    };

    const handleCategoryClick = (category) => {
        const categoryData = data.services[category];
        if (categoryData) {
            renderMenuItems(categoryData);
        } else {
            console.error(`Categoría '${category}' no encontrada en los datos.`);
        }
    };

    document.getElementById('categorias').addEventListener('click', (event) => {
        if (event.target.closest('button')) {
            const filterBtn = event.target.closest('button');
            const category = filterBtn.getAttribute('data-filter-btn');

            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            filterBtn.classList.add('active');

            // Handle category click
            handleCategoryClick(category);
        }
    });

    // Initial load
    handleCategoryClick('Nails');
});
