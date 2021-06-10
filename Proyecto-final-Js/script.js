//"use strict"
/*-----------------------------------------
                   DATA
  ---------------------------------------*/

services=[{
  "id":"01",
  "title":"Diseño de logo",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 18000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},{
  "id":"02",
  "title":"Diseño de logo y manual de marca",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 25000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},{
  "id":"03",
  "title":"Rediseño de logo",
  "description":"Descripción del trabajo y su alcance.",
  "category":"branding",
  "price": 13000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},{
  "id":"04",
  "title":"Landing page",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 18000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},{
  "id":"05",
  "title":"Sitio en WordPress",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 35000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},{
  "id":"06",
  "title":"Sitio web (HTML, CSS)",
  "description":"Descripción del trabajo y su alcance.",
  "category":"development",
  "price": 28000,
  "imgBanner":"https://www.fillmurray.com/g/1200/675",
  "imgCard":"https://www.fillmurray.com/g/300/300",
  "imgThumb":"https://www.fillmurray.com/g/80/80",
  "pageUrl":"#"
},];

var cart = [];

var d = new Date();
var id = services.length;
id++;

var catalogue = document.getElementById("store-catalogue");

/*-----------------------------------------
                CLASSES
  ---------------------------------------*/

  class Servicio{
    constructor(id, title, description, category, price, imgBanner, imgCard, imgThumb, pageUrl){
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.price = price;
      this.imgBanner = imgBanner;
      this.imgCard = imgCard;
      this.imgThumb = imgThumb;
      this.pageUrl = pageUrl;
    }
  }

  class CartItem{
    constructor(id, title, description, category, price, imgThumb){
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.price = price;
      this.imgThumb = imgThumb;
      this.quantity = 1;
      this.subtotal = price;
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

  let today = dd + "/" + mm + "/" + yy;
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
newService = (id, title, description, category, price, imgBanner, imgCard, imgThumb) => {
  let service = new Servicio (id++, title, description, category, price, imgBanner, imgCard, imgThumb);

  services.push(service);
}

//STORE CATALOGUE MANIPULATION
addToCatalogue = () => {
  for(service of services){
    let item = document.createElement("div");
    item.classList.add('card');

    item.innerHTML = `<img src="${service.imgCard}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="text-muted">${service.category.toUpperCase()}</h5>
        <h5 class="card-title">${service.title}</h5>
        <p class="card-text">${service.description}</p>
        <div class="btn btn-light">$${service.price}</div>
        <button id="item-${service.id}" class="btn btn-primary"><i class="fas fa-shopping-cart"></i></button>
      </div>`;

      catalogue.appendChild(item);

      let addBtn = document.getElementById(`item-${service.id}`);

      addBtn.addEventListener('click', ()=>{addToCart(service.id)});
  }
}

filterByCategory = (value, services) => {
  let filtered = services.filter(service => service.category.includes(value));
  console.log(filtered);
}

//CART MANIPULATION
addToCart = (id) => {
  var id = id;
  var result = false;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      if (cart.length > 0){
        for (item of cart){
          if (item.id == id){
            result = {
              "match" : true,
              "id" : cart.indexOf(item)
            };
          }
        }
        if(result.match===true){
          let i = result.id;
          cart[i].quantity++;
          cart[i].subtotal = cart[i].quantity * cart[i].price;

          console.log(cart);
        } else {
          let service = new CartItem (services[i].id, services[i].title, services[i].description, services[i].category, services[i].price, services[i].imgThumb);
        
          cart.push(service); 
          console.log(cart);
        }
      } else {
        let service = new CartItem (services[i].id, services[i].title, services[i].description, services[i].category, services[i].price, services[i].imgThumb);
      
        cart.push(service); 
        console.log(cart);
      }
    }
  }

  cartTotal();
}

removeFromCart = (id, services) => {
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      
      cart.splice(i,1);
    }
  }

  cartTotal();
}

cartTotal = () =>{
  let total = 0;

  for(i=0 ; i<cart.length ; i++){
    total = total + cart[i].subtotal;
  }

  console.log(total);
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

  addToCatalogue();