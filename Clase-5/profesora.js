// OBJETOS
// Objeto literal
const miElectrodomestico1 = {
  nombre: "pava electrica",
  precio: 2999
}
console.log(miElectrodomestico1);
//modifico una propiedad
miElectrodomestico1.precio = 3999;
console.log(miElectrodomestico1);
const miElectrodomestico2 = {
  nombre: "lavarropas",
  precio: 90000
}
console.log(miElectrodomestico2);
//miElectrodomestico1 = miElectrodomestico2; ERROR
var miElectrodomestico3 = {
  nombre: "horno microondas",
  precio: 65000
}
console.log(miElectrodomestico3);
miElectrodomestico3 = miElectrodomestico1;
console.log(miElectrodomestico3);
//FORMA FUNCION CONSTRUCTORA
function Auto(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}
let auto1 = new Auto("Peugeot", "208", 2019);
alert("Marca: " + auto1.marca);
let marcaAuto2 = "Ford";
let modeloAuto2 = "Mondeo";
let anioAuto2 = 2017;
let auto2 = new Auto(marcaAuto2, modeloAuto2, anioAuto2);
console.log(auto2);
//CLASES
class Producto {
  constructor(nombre, precio) {
      this.nombre = nombre.toUpperCase();
      this.precio = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
  vender() {
      this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
console.log(producto1);
producto1.sumaIva();
console.log(producto1);
producto2.sumaIva();
producto1.vender();
console.log(producto1);
class Bicicleta {
  constructor(marca, color, condicion) {
      this.marca = marca.toLowerCase();
      this.color = color;
      this.condicion = condicion;
  }
  mostrarBici() {
      console.log("Marca: " + this.marca + " Color: " + this.color + " Condicion: " + this.condicion);
  }
}
const bici1 = new Bicicleta("Raleigh", "Rojo", "Usada");
bici1.mostrarBici();
//FOR...IN
for (let propBici in bici1) {
  console.log("Propiedad del objeto bici1: " + propBici);
}
//Datito de color de la clase
function f1() {
  return this;
}
console.log(f1());
//Otro ejemplo
class Animal {
  constructor(especie, cantPatas, color) {
      this.especie = especie;
      this.cantPatas = parseInt(cantPatas);
      this.color = color;
  }
  mostrarAnimal() {
      console.log(this.especie + " - " + this.cantPatas + " - " + this.color);
  }
}
let miPerro = new Animal("Golden Retriever", "4", "Dorado");
miPerro.mostrarAnimal();