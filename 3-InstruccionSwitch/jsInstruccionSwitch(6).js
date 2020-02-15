/*Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.". 
si está entre las 12 y las 19 : "Es de tarde.". 
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.". 
si NO está entre las 0 y las 24 : "la hora no existe.".*/


function mostrar()
{

var hora
 hora= document.getElementById("hora").value;

 hora = parseInt(hora);

switch  (true)
 {

 case hora <7 :
             alert ("Es de noche");
break;

case  (hora >=7 && hora <=11):
            alert ("Es de mañana");
 break;

 case  (hora > 11 && hora <=19) :
    alert ("Es de tarde");
 break;

 case (hora > 19 && hora <=24):
    alert (" Es de noche");
 break;
        
case (hora > 0 && hora > 24):
      alert ("La hora no existe"); // modificar no es valido !!!!!
 break;


} 

//FIN DE LA FUNCIÓN