
function mostrarCollar() {
    var color = document.querySelector('.color.selected');
    if (!color) {
        alert("Por favor, selecciona un color.");
        return;
    }
    color = color.dataset.color;

    document.querySelectorAll('.color').forEach(function(color) {
        color.addEventListener('click', function() {
            document.querySelectorAll('.color').forEach(function(c) {
                c.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    var design = document.querySelector('input[name="diseno"]:checked').value;

    var collarHTML = '';

    // Si el color seleccionado es rosa y el diseño no es reciclable, reducir su tamaño
    if (color === "rosa" && design !== "reciclable") {
        collarHTML += '<img src="images/etiquetarosa.png" alt="rosa" style="width: 20%;">';
    } else {
        // Si el diseño es reciclable, mostrar etiquetamadera sin importar el color seleccionado
        if (design === "reciclable") {
            collarHTML += '<img src="images/etiquetamadera.png" alt="etiquetamadera" style="width: 20%;">';
        } else {
            // Agrega la vista previa de la etiqueta según el color seleccionado
            collarHTML += '<img src="images/etiqueta' + color + '.png" alt="' + color + '" style="width: 20%;">';
        }
    }

    // Agrega la imagen del diseño seleccionado
    collarHTML += '<img src="images/' + design + '.jpg" alt="' + design + '" style="width: 20%;">';

    document.getElementById("collar-personalizado").innerHTML = collarHTML;
}

document.querySelectorAll('.color').forEach(function(color) {
    color.addEventListener('click', function() {
        document.querySelectorAll('.color').forEach(function(c) {
            c.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

document.querySelectorAll('input[name="diseno"]').forEach(function(design) {
    design.addEventListener('change', function() {
        var selectedDesign = document.querySelector('input[name="diseno"]:checked').value;
        if (selectedDesign === "reciclable") {
            document.querySelectorAll('.color').forEach(function(c) {
                c.disabled = true;
            });
        } else {
            document.querySelectorAll('.color').forEach(function(c) {
                c.disabled = false;
            });
        }
    });
});

document.getElementById("boton-busqueda").addEventListener("mouseleave" , function(){
    textoBusqueda.style.opacity ="0";
});
document.addEventListener('DOMContentLoaded', function () {
    // Función para desplazamiento suave a una sección
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Manejadores de eventos para enlaces de navegación
    document.getElementById('nav-accesorios').addEventListener('click', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        scrollToSection('disena-collar'); // Navega a la sección Diseña el Collar de tu Mascota
    });

    document.getElementById('nav-contacto').addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contacto'); // Navega a la sección de Contacto
    });
});
