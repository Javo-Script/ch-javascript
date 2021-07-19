//"use strict"
/*-----------------------------------------
                VARIABLES

  Creo algunas de las variables y capturo algunos elementos que voy a necesitar mas adelante
  ---------------------------------------*/
var cart = [];
let totalCart=0;

var d = new Date();
var valid="";

var servicesId = services.length;
servicesId++;

var app = document.getElementById("app");

var storeBtn = document.getElementById("store");
var bagBtn = document.getElementById("bag");

/*-----------------------------------------
                CLASSES
  ---------------------------------------*/

  // Creo una clase constructora de servicios
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

  // Creo una clase contructora de elementos del carrito
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
// Funcion para capturar el dia actual
dateToday = () => {
  let dd = new Date().getDate();
  let mm = new Date().getMonth() +1;
  let yy = new Date().getFullYear().toString().slice(-2);

  let today = dd + "/" + mm + "/" + yy;
  return today;
};

// Funcion para sumarle 15 dias a la fecha actual y definir un plazo de vigencia
dateUntil = () => {
  let dias = 15;
  
  d.setDate(d.getDate() + dias);

  let dd = d.getDate();
  let mm = d.getMonth() +1;
  let yy = d.getFullYear().toString().slice(-2);

  valid = dd + "/" + mm + "/" + yy;
}

//SERVICE CREATOR
// Funcion para crear un nuevo servicio
newService = (id, title, description, category, price, imgBanner, imgCard, imgThumb) => {
  let service = new Servicio (id++, title, description, category, price, imgBanner, imgCard, imgThumb);

  services.push(service);
}

// TOKEN MANIPULATION
// Traigo del localStorage el token de sesion
var token = localStorage.getItem('Token');

// Chequeo que el token exista
if (!token){
  console.log('No existe un token de usuario. Debe iniciar sesión o registrarse para continuar.');
}

// Prototipo de funcion para iniciar sesion, generar un token y guardarlo en el localStorage
logIn = () => {
  var userLogged = prompt('Ingrese su nombre de usuario.');
  var passwordLogged = prompt('Ingrese su contraseña.');
  var user = {
    'name': false,
    'pass': false
  };

  for (authorized of members){

    if(authorized.user==userLogged){
      user.name = true;
    }
    if(authorized.password==passwordLogged){
      user.pass = true;
    }
    if (user.name !== user.pass){
      user.name = false;
      user.pass = false;
    }
  }

  if (user.name==true && user.pass==true){
    let tokenCreated="";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
    for ( var i = 0; i < 8; i++ ) {
      tokenCreated += characters.charAt(Math.floor(Math.random() * characters.length));
    }
      
    localStorage.setItem("token", tokenCreated);
    console.log("Iniciaste sesión correctamente")
    return tokenCreated;
  } else {
    return ('El usuario y contraseña ingresados no corresponden con un usuario registrado.');
  }
}
// Prototipo de funcion para cerrar sesion y borrar el token del localStorage
logOut = () => {
  localStorage.removeItem('token');
  return ('Cerraste la sesión correctamente');
}

//STORE MANIPULATION
// Funcion para crear los elementos y cargar los servicios en el DOM
loadStore = () => {
  let title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = `<h1>Cotiza tus necesidades</h1>
      <h2>Elegi los servicios que te interesa contratar y consulta un precio aproximado para los mismos.</h2>`;
  app.appendChild(title);

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
      app.appendChild(item);

      let itemButtonId = "item-" + service.id.toString();  
      let itemListenerId = service.id.toString();  
      let itemBtn = document.getElementById(itemButtonId);
      itemBtn.addEventListener('click', () => {addToCart(itemListenerId)});
  }
}

// Prototipo de funcion para filtrar los servicios por categoria
filterByCategory = (value, services) => {
  let filtered = services.filter(service => service.category.includes(value));
  console.log(filtered);
}

//CART MANIPULATION
// Funcion para crear los objetos del carrito, agregarlos al array asegurandome de que si ya esta seleccionado, incremente la cantidad de ese servicio en vez de crear un objeto nuevo, y calcular el total del carrito
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

        } else {
          let service = new CartItem (services[i].id, services[i].title, services[i].description, services[i].category, services[i].price, services[i].imgThumb);
        
          cart.push(service);
        }
      } else {
        let service = new CartItem (services[i].id, services[i].title, services[i].description, services[i].category, services[i].price, services[i].imgThumb);
      
        cart.push(service);
      }
    }
  }

  cartTotal();
}

// Funcion para remover un servicio de carrito
removeFromCart = (id, services) => {
  var id = id;
  for (i=0 ; i<services.length ; i++){
    if(id == services[i].id){
      
      cart.splice(i,1);
    }
  }
}

// Funcion para calcular el total del carrito
cartTotal = () =>{
  let result=0;

  for(item of cart){
    totalCart = result + parseInt(item.subtotal);
    result = totalCart;
  }
  if(cart.length==0){
    totalCart = 0;
  }
}