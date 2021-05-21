// FUNCIONES SIMPLES (SIN PARAMETROS)
function saludar() {
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  alert("Buenas noches " + nombre + " " + apellido);
}
saludar();
// FUNCION CON PARAMETROS
function calcularElCuadrado(miNumero) {
  let resultado = miNumero * miNumero;
  console.log("El cuadrado de:" + miNumero + " es: " + resultado);
}
var num = parseInt(prompt("Ingresa el numero para calcular el cuadrado"));
calcularElCuadrado(num);
//FUNCION CON PARAMETROS Y RETORNO DE RESULTADO
function sumarDosNumeros(num1, num2) {
  var montoTotal = num1 + num2;
  return montoTotal;
}
var precioProd1 = 1000;
var precioProd2 = 890;
var gastoTotal = sumarDosNumeros(precioProd1, precioProd2);
var descuento = gastoTotal * 0.15;
var precioConDesc = gastoTotal - descuento;
console.log("Gastaste $:" + gastoTotal);
console.log("El descuento es de $:" + descuento);
console.log("Precio final con descuento $" + precioConDesc);
//FUNCION FLECHA
var saludo = () => {
  let nombre = prompt("Ingresa nombre:");
  let apellido = prompt("Ingresa apellido:");
  alert("Hola " + nombre + " " + apellido);
}
saludo();
//FUNCION FLECHA OPCION 2
var saludo = (nombre, apellido) => {
  alert("Hola" + nombre + " " + apellido);
}
saludo("Juan", "Alvarez");
saludo(prompt("Ingresa nombre: "), prompt("Ingresa apellido"));