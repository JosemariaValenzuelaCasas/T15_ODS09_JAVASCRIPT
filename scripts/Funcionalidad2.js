//funcionalidad hover boton
const boton = document.getElementById("leer-mas");
    boton.addEventListener("mouseover", function () {
    boton.classList.add("hovered");
});

boton.addEventListener("mouseout", function () {
    boton.classList.remove("hovered");
});
