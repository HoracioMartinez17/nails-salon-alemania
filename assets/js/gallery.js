const contenedorCategoria = document.getElementById("contenedor-gallery");

const createMenuItem = (menuFoto) => {
    const menuContanerLi = document.createElement("d");
    const plantilla= `
    <div class="swiper-slide">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 422; --height: 550"
                  >
                    <img
                      src="./assets/images/color-1.jpg"
                      width="422"
                      height="550"
                      loading="lazy"
                      alt="Hair Cutting"
                      class="img-cover"
                    />
                  </figure>
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