function botón() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:");
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Gracias por tu visita a mi pagina web " + opcion;
            }
            document.getElementById("mensaje").innerHTML = mensaje;
}