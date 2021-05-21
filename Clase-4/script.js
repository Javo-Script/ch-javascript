services = [
  {
    id : "101",
    title : "Diseño de logo",
    description : "Descripción del trabajo y su alcance.",
    price : 18000,
    cantidad : 1
  },
  {
    id : "102",
    title : "Diseño de logo y manual de marca",
    description : "Descripción del trabajo y su alcance.",
    price : 28000,
    cantidad : 1
  },
  {
    id : "103",
    title : "Rediseño de logo",
    description : "Descripción del trabajo y su alcance.",
    price : 13000,
    cantidad : 1
  }
];
cart = [];

dateToday = () => {
  let dd = new Date().getDate();
  let mm = new Date().getMonth() +1;
  let yy = new Date().getFullYear().toString().slice(-2);

  var today = dd + "/" + mm + "/" + yy;
  return today;
};

var d = new Date();

dateUntil = (d) => {
  let dias = 15;
  
  d.setDate(d.getDate() + dias);

  let dd = d.getDate();
  let mm = d.getMonth() +1;
  let yy = d.getFullYear().toString().slice(-2);

  let until = dd + "/" + mm + "/" + yy;
  return until;
}

addService = () => {
  name = prompt("Cómo te llamas?");
  serviceAsked = prompt("Cuál de los siguientes servicios necesita? Diseño de logo; Diseño de logo y manual de marca; Rediseño de logo.");

  serviceToAdd = services.find(service => service.title === serviceAsked);

  dateToday = dateToday();
  dateUntil = dateUntil(d);

  console.log("Hola " + name + ". Cómo estás? Hoy " + dateToday + ", el servicio de " + serviceToAdd.title + " tiene un costo de: $" + serviceToAdd.price + ". Este precio es válido hasta: " + dateUntil);
}


console.log(addService());