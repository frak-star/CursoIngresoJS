/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var uno
var dos

uno = parseFloat(document.getElementById(importe).value);

dos = uno * 25 / 100;
document.getElementById("resultado").value = dos;





}
