services=[];
cart = [];

var d = new Date();
var id = services.length;
id++;

dateToday = () => {
  let dd = new Date().getDate();
  let mm = new Date().getMonth() +1;
  let yy = new Date().getFullYear().toString().slice(-2);

  var today = dd + "/" + mm + "/" + yy;
  return today;
};

dateUntil = (d) => {
  let dias = 15;
  
  d.setDate(d.getDate() + dias);

  let dd = d.getDate();
  let mm = d.getMonth() +1;
  let yy = d.getFullYear().toString().slice(-2);

  let until = dd + "/" + mm + "/" + yy;
  return until;
}


class Servicio{
  constructor(id, title, description, price){
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

function newService(id, title, description, price, services){
  let service = new Servicio (id++, title, description, price);

  services.push(service);
}

function addToCart(id, services){
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      let service = new Servicio (services[i].id, services[i].title, services[i].description, services[i].price);
      
      cart.push(service);
    }
  } 
}

function removeFromCart(id, services){
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      
      cart.splice(i,1);
    }
  } 
}

function message(){
  let price=0;

  dateToday = dateToday();
  dateUntil = dateUntil(d);
  
  if(cart.length === 1){
    price = cart[0].price;

    console.log("Hola " + name + ". Cómo estás? Hoy " + dateToday + ", el servicio que estas adquiriendo tiene un costo de: $" + price + ". Este precio es válido hasta: " + dateUntil);
  } else {
    for (i=0 ; i<cart.length ; i++) {
      price = price + cart[i].price;
    }

    console.log("Hola " + name + ". Cómo estás? Hoy " + dateToday + ", los servicios que estas adquiriendo tienen un costo de: $" + price + ". Este precio es válido hasta: " + dateUntil);
  }
}

name = prompt("Cómo te llamas?");

newService (id++, "Diseño de logo", "Descripción del trabajo y su alcance.", 18000, services);
newService (id++, "Diseño de logo y manual de marca", "Descripción del trabajo y su alcance.", 28000, services);
newService (id++, "Rediseño de logo", "Descripción del trabajo y su alcance.", 13000, services);

addToCart (1 , services);
addToCart (2 , services);
removeFromCart (2 , services);
addToCart (3 , services);

console.log(services);
console.log(cart);
message();