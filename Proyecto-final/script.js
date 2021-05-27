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
  constructor(id, type, title, description, price){
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

function newService(id, type, title, description, price, services){
  let service = new Servicio (id++, type, title, description, price);

  services.push(service);
}

function addToCart(id, services){
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      let service = new Servicio (services[i].id, services[i].type, services[i].title, services[i].description, services[i].price);
      
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

function filterBy(filter, services){
  let filtered = services.filter(service => service.type.includes(filter));
  console.log(filtered);
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

newService (id++, "Branding", "Diseño de logo", "Descripción del trabajo y su alcance.", 18000, services);
newService (id++, "Branding", "Diseño de logo y manual de marca", "Descripción del trabajo y su alcance.", 25000, services);
newService (id++, "Branding", "Rediseño de logo", "Descripción del trabajo y su alcance.", 13000, services);
newService (id++, "Development", "Landing page", "Descripción del trabajo y su alcance.", 19000, services);
newService (id++, "Development", "Sitio en WordPress", "Descripción del trabajo y su alcance.", 36000, services);
newService (id++, "Development", "Sitio web (HTML, CSS)", "Descripción del trabajo y su alcance.", 28000, services);

addToCart (1 , services);
addToCart (2 , services);
removeFromCart (2 , services);
addToCart (3 , services);

console.log(services);
console.log(cart);

filterBy("Development", services)
message();