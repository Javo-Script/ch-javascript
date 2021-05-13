//EJERCICIO 1
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " X " + i + " = " + resultado);
}
//EJERCICIO 2
for (let i = 1; i <= 5; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
}
//EJERCICIO 3
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if (i == 5) {
        break;
    }
    alert(i);
}
//EJERCICIO 4
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if (i == 5) {
        continue;
    }
    alert(i);
}
//EJERCICIO 5
var acumuladorNotas = 0;
var promedio;
var cantNotas = parseInt(prompt("Que cantidad de notas vas a promediar?"));
let nota;
for (let i = 1; i <= cantNotas; i++) {
    nota = parseInt(prompt("Ingrese la nota " + i));
    acumuladorNotas = +nota;
}
promedio = acumuladorNotas / cantNotas;
alert("El promedio de tus notas es: " + promedio);
//EJERCICIO 6
var nombre = prompt("Ingresa tu nombre: (escribe salir para finalizar)");
var cont = 1;
while (nombre != "salir") {
    console.log("Tu nombre es: " + nombre + ". Te asignamos el turno: " + cont);
    cont = cont + 1;
    nombre = prompt("Ingresa tu nombre: (escribe salir para finalizar)");
}
//EJERCICIO 7
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        case "PABLO":
            alert("HOLA PABLO");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}