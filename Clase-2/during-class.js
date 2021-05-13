// EJERCICIO: Preguntar la edad del usuario y segun sea, escribir los siguientes mensajes:
// Si tiene entre 0 y 17 años -> “Eres niño o adolescente”
// Si tiene entre 18 y 40 años -> “Eres un joven lleno de vida”
// Si tiene mas de 40 años -> “Estás muy bien realmente!!!!”

/*
var edad=parseInt(prompt("Que edad tenes?"));
if (edad<=17){
  alert("Eres niño o adolescente");
} else if (edad<=40){
  alert("Eres un joven lleno de vida");
} else{
  alert("Estás muy bien realmente!!!!");
}

*/
/*
var edad2 = parseInt(prompt("Ingrese su edad"));
var legal = (edad2 >= 18);

if (legal){
  console.log("Puede entrar.");
} else {
  console.log("No puede entrar.");
}

*/

let name = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");

if ((name !="") && (lastName !="")){
  console.log(name + " " + lastName);
}

/*----------------------------------------------------------
  NO ES LO MISMO ESTO
if ((name!="") && ((name=="Javier") || (name=="javier"))){}
*/

/* QUE ESTO
if ((name!="") && (name=="Javier")) || (name=="javier")){}
-----------------------------------------------------------*/

var number1 = 1;
var number2 = "1";
var iguales = (number1==number2); // el == compara solo el valor
var noSonIguales = (number1===number2); // el === compara tanto el VALOR como el TIPO DE VALOR

console.log(iguales + "     " + noSonIguales);