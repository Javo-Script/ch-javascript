//LISTAS - ARRAYS
var lista = ["Pan", "Galletitas", "Leche", "Gaseosa", "Harina"];
console.log(lista[0]);
console.log(lista[2]);
console.log("Longitud de la lista: " + lista.length);
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//Metodo toString()
console.log("Metodo toString(): " + lista.toString());

//Metodo push()
lista.push("Manteca");

console.log(lista);
//Metodo join()
console.log(lista.join(" + "));

//Metodo concat()
const miListaMix = ["Parlante", 567, true];
const unionListas = lista.concat(miListaMix);
console.log("Union de dos listas con concat(): " + unionListas);

//Metodo slice()
var nuevaList = lista.slice(1, 3);
console.log(nuevaList);
console.log(lista);

//DIAPO 23
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;

//Empleo de do...while para cargar nombres en el array por prompt()
do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
} while (listaNombres.length != cantidad)

//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);

//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

// ARRAY DE OBJETOS
const producto1 = {
    id: 1,
    producto: "mouse inalambrico",
    marca: "Genius",
    precio: 899,
    cantidad: 1
}
const listaDeCarrito = [];
function agregarAListaCarrito() {
    listaDeCarrito.push(producto1);
}
function verListaCarrito() {
    let total = 0;
    for (elemento of listaDeCarrito) {
        console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
        //total = total + elemento.precio;
        total += elemento.precio;
    }
    console.log("Son " + listaDeCarrito.length + " productos\n  Total de la compra: $" + total);
}

//METODO FIND - devuelve el valor del PRIMER elemento del Array que satisface la comprobacion
const listaNumeros = [12, 45, 76, 4, 12];
const valor = listaNumeros.find(item => item < 15);
console.log(valor);

//METODO FILTER - crea un nuevo array con todos los elementos que satisfacen la comprobacion
const numeros = [1, 2, 3, 4, 5];
const filtro1 = numeros.filter(elemento => elemento > 3); //Encuentra [4,5]
const filtro2 = numeros.filter(elemento => elemento < 4); //Encuentra [1,2,3]
console.log(filtro1);
console.log(filtro2);
const nombres = ["Ana", "Ema", "Juan", "Elia"];

//Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro3 = nombres.filter(elemento => elemento.includes("n"));
console.log(filtro3);

//METODO MAP
const nume = [1, 2, 3, 4, 5];
const porDos = nume.map(x => x * 2); // porDos = [2, 4, 6, 8, 10]
const masCien = nume.map(x => x + 100); // 
console.log(porDos);
console.log(masCien);
const nombr = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombr.map(nombre => nombre.length); //lengths = [3, 3, 4, 4]
console.log(lengths);