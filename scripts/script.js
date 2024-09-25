//FUNCION BOTON SABER MAS
document.getElementById("leer-mas").addEventListener("click", function() {
    const fondoImagen = document.querySelector(".fondo-imagen");
    const cuadroImagen = document.querySelector(".cuadro-oscurecido");
    const textoAdicional = document.getElementById('texto-adicional');
    const boton = document.getElementById("leer-mas");

    if (textoAdicional.style.display === 'block') {
        textoAdicional.style.display = 'none';
        fondoImagen.style.height = "100%";
        cuadroImagen.style.height = "100%";
        boton.innerHTML = '¡Haz clic aquí! <i class="fas fa-chevron-down"></i>';
    } else {
        textoAdicional.style.display = 'block';
        fondoImagen.style.height = "110%";
        cuadroImagen.style.height = "110%";
        boton.innerHTML = 'Mostrar menos <i class="fas fa-chevron-up"></i>';
    }
});
