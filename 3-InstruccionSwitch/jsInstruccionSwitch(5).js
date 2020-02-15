/*Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.".*/




function mostrar()
{
    var hora;

hora = document.getElementById("hora").value;
hora = parseInt (hora)

switch (true)
{
 case   (hora >=7 && hora <=11):
 alert ("Es de mañana");
                
 break;
}
//tambien se puede realizar switch (hora) case 7:  case 8:   case 9:  alert("es de mañana)"

}//FIN DE LA FUNCIÓN