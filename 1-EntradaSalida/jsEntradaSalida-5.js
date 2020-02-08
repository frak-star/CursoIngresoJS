/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //declaro las variables 
    var nombre;
    var edad;
//Tomo los datos de las cajas de texto, las id del html 
    nombre = document.getElementById("elNombre").value;
    edad = documente.getElementById("laEdad").value;


    alert("Usted se llama " +nombre+ " y tiene " +edad);


    
}

