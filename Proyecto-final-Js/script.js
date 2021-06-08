/*-----------------------------------------
                   DATA
  ---------------------------------------*/

services=[{
  "id":"01",
  "title":"Diseño de logo",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 18000
},{
  "id":"02",
  "title":"Diseño de logo y manual de marca",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 25000
},{
  "id":"03",
  "title":"Rediseño de logo",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 13000
},{
  "id":"04",
  "title":"Landing page",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 18000
},{
  "id":"05",
  "title":"Sitio en WordPress",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 18000
},{
  "id":"06",
  "title":"Sitio web (HTML, CSS)",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 18000
},];

cart = [];

var d = new Date();
var id = services.length;
id++;

let catalogue = document.getElementById("store-catalogue");

/*-----------------------------------------
                CLASSES
  ---------------------------------------*/

  class Servicio{
    constructor(id, type, title, description, price){
      this.id = id;
      this.type = type;
      this.title = title;
      this.description = description;
      this.price = price;
    }
  }

/*-----------------------------------------
                FUNCTIONS
  ---------------------------------------*/

//DATE FUNCTIONS
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

//SERVICE CREATOR
newService = (id, type, title, description, price, services) => {
  let service = new Servicio (id++, type, title, description, price);

  services.push(service);
}

//STORE CATALOGUE MANIPULATION
addToCatalogue = () => {
  for(product of services){
    let item = document.createElement("div");
    
    item.innerHTML = `<div class="card"">
      <img src="https://www.fillmurray.com/g/300/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="text-muted">`+product.category.toUpperCase()+`</h5>
        <h5 class="card-title">`+product.title+`</h5>
        <p class="card-text">`+product.description+`</p>
        <div class="btn btn-light">AR$`+product.price+`</div>
        <button class="btn btn-primary" onclick=addToCart(`+product.id+`)>Add to cart</button>
      </div>
    </div>`;

    catalogue.appendChild(item);
  }
}

filterBy = (filter, services) => {
  let filtered = services.filter(service => service.type.includes(filter));
  console.log(filtered);
}

//CART MANIPULATION
addToCart = (id) => {
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      let service = new Servicio (services[i].id, services[i].type, services[i].title, services[i].description, services[i].price);
      
      cart.push(service); 
      console.log(cart);
    }
  }
}

removeFromCart = (id, services) => {
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      
      cart.splice(i,1);
    }
  } 
}

message = () => {
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

/*-----------------------------------------
                USAGE
  ---------------------------------------*/
/*
name = prompt("Cómo te llamas?");
addToCart (01 , services);
addToCart (02 , services);
removeFromCart (02 , services);
addToCart (03 , services);



filterBy("Development", services)
message();
*/

console.log(services);
addToCatalogue();