//STORAGE
//LOCALSTORAGE
localStorage.setItem('Usuario', 'Laura'); //(clave,valor)
console.log(localStorage.getItem('Usuario'));
localStorage.removeItem('Usuario');
//SESSIONSTORAGE
sessionStorage.setItem('Auto', 'Ford');
console.log(sessionStorage.getItem('Auto'));
//Ejercicio parte 1:
/* Pedir a traves de prompt nombre y apellido y
guardar ambos datos en el sessionStorage, luego mostrarlos */
var nom = prompt("Ingrese su nombre");
var ape = prompt("Ingrese su apellido");
//aqui lo guardamos al storage
sessionStorage.setItem('nombre', nom);
sessionStorage.setItem('apellido', ape);
//Lo mostramos
console.log(sessionStorage.getItem('nombre') + " " + sessionStorage.getItem('apellido'));
//FORMATO JSON
const jsonEjemplo = '{"Nombre":"Horacio Fernandez","Edad":34}';
const objetoEjemplo = JSON.parse(jsonEjemplo);
console.log(jsonEjemplo);
console.log(objetoEjemplo);
console.log(objetoEjemplo.Edad);
console.log(JSON.stringify({ producto: "Teclado", precio: 899 }));
// --------- EJEMPLO array de Objetos ---------- //
const empleados = [{ legajo: 121314, empleado: "Jorge Arias", sueldo: 67000 },
    { legajo: 23456, empleado: "Nicolas Gomez", sueldo: 79000 },
    { legajo: 87450, empleado: "Ana Paz", sueldo: 55000 },
    { legajo: 09785, empleado: "Maria Ressia", sueldo: 98000 }
];
console.log(empleados);
//FUNCION PARA GUARDAR EN EL LOCALSTORAGE
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Invocar a la funcion
guardarLocal("listaEmpleados", JSON.stringify(empleados));
//Creo una clase Empleado
class Empleado {
    constructor(obj) {
        this.legajo = obj.legajo;
        this.empleado = obj.empleado.toUpperCase();
        this.sueldo = obj.sueldo;
    }
    aumentarSueldo() {
        this.sueldo = this.sueldo * 1.30;
    }
}
//Obtenemos el listado de empleados almacenados
const almacenados = JSON.parse(localStorage.getItem("listaEmpleados"));
const misEmpleados = [];
//Iteramos almacenados y convertimos a Empleado
for (const ob of almacenados) {
    misEmpleados.push(new Empleado(ob));
}
console.log(misEmpleados);