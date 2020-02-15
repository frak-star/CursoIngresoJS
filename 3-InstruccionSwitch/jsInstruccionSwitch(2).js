function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;


switch (mes) {

    case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
 case "Mayo":
  alert("Falta para el invierno")
  break
case "Junio":
case "Julio":
    alert ("Abrigate");
 break;
case "Agosto":
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
alert ("Felices fiestas");
break;
}



}//FIN DE LA FUNCIÓN