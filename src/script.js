
function mostrarCollar() {
    // Obtener los valores seleccionados por el usuario
    var color = document.getElementById("color").value;
    var diseño = document.getElementById("diseño").value;
    var medida = document.querySelector('input[name="medida"]:checked').value;
    var dije = document.getElementById("dije").checked;
    var tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Construir el collar personalizado
    var collarHTML = '<div style="background-color: ' + color + '; width: 200px; height: 20px; margin-bottom: 10px;"></div>';
    collarHTML += '<p>Diseño: ' + diseño + '</p>';
    collarHTML += '<p>Medida: ' + medida + '</p>';
    collarHTML += '<p>Dije: ' + (dije ? 'Sí' : 'No') + '</p>';
    collarHTML += '<p>Tipo: ' + tipo + '</p>';

    // Mostrar el collar personalizado en el área de vista previa
    document.getElementById("collar-personalizado").innerHTML = collarHTML;
}
// Obtener el botón de búsqueda y el campo de búsqueda
var botonBusqueda = document.getElementById("boton-busqueda");
var campoBusqueda = document.getElementById("campo-busqueda");

// Agregar un evento de clic al botón de búsqueda
botonBusqueda.addEventListener("click", function() {
    // Mostrar o ocultar el campo de búsqueda al hacer clic en el botón
    if (campoBusqueda.style.display === "none") {
        campoBusqueda.style.display = "block";
    } else {
        campoBusqueda.style.display = "none";
    }
});
var textoBusqueda = document. createElement ("span");
textoBusqueda.innerText = "Buscar Productos"; 
document.getElementById ("boton-busqueda").appendChild(textoBusqueda); 

document.getElementById("boton-busqueda").addEventListener("mouseenter" , function(){
    textoBusqueda.style.opacity = "1"; 
});
document.getElementById("boton-busqueda").addEventListener("mouseleave" , function(){
    textoBusqueda.style.opacity ="0";
});

