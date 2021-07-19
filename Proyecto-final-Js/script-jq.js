/*-----------------------------------------
                   DATA
  ---------------------------------------*/
  services=[];
  members=[];


  // Traigo la data de desde un JSON local
    
  $.getJSON("data.json", (res, code) => {
    if (code == "success") {
      services = res.services;
      members = res.members;
    }
  })

/*-----------------------------------------
                   FUNCIONES
  ---------------------------------------*/

// Funcion para cargar el contenido de la pantalla del carrito
loadBag = () => {

  // Comienzo creando la estructura de la tabla
  $(app).append(`
  <div id="estimate">
    <table class="table table-hover table-top" style="text-align: center;">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Servicio</th>
          <th scope="col">Categoria</th>
          <th scope="col">Precio unitario</th>
          <th scope="col">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="cart-items">
    </div>`);
  
  // Recorro el carrito y vuelco los servicios seleccionados en la trabla
  for(item of cart){
    
    $("#cart-items").append(`
    <tr id="item-${item.id}" class="row-content">
    <td scope="row" class="flex"><button id="increase-${item.id}"><i class="fas fa-plus"></i></button><button id="decrease-${item.id}"><i class="fas fa-minus"></i></button><p>${item.quantity}</p></td>
      <td>${item.title}</td>
      <td>${item.category}</td>
      <td>$${item.price}</td>
      <td><strong>$${item.subtotal}</strong></td>
      <td class="flex"><button id="remove-${item.id}"><i class="fas fa-times"></i></button></td>
    </tr>`);
  
    let itemId = item.id.toString();

    let increaseBtn = "#increase-" + item.id.toString(); 
    $(increaseBtn).on('click', () => {increaseCartItem(itemId)});

    let decreaseBtn = "#decrease-" + item.id.toString(); 
    $(decreaseBtn).on('click', () => {decreaseCartItem(itemId)});

    let removeBtn = "#remove-" + item.id.toString(); 
    $(removeBtn).on('click', () => {removeCartItem(itemId)});
  
  }
// Capturo el elemento contenedor de la tabla para completar las tablas
var estimate = document.getElementById("estimate");

// Cierro la estructura de la tabla y luego creo una segunda tabla para mostrar el monto total
  $(estimate).append(`  
  </tbody>
  </table>
  <table class="table table-total">
    <tr>
      <th scope="row"></th>
      <td></td><td></td><td></td><td></td><td></td>
      <td><strong>TOTAL $${totalCart}</strong></td>
    </tr>
  </table>
  <p class="valid-thru">Válido hasta ${valid}. Los precios no incluyen IVA.</p>`);

  // Por fuera del elemento que contiene las tablas, agrego el boton disparador del modal para mandar un mail solicitando una meeting
  $(app).append(`
  <div class="get-meeting">
    <button type="button" id="trigger" class="btn btn-outline-primary">Solicitar una reunión para avanzar con el presupuesto.</button>
  </div>`)

  // Creo el modal con un campo para el nombre y otro para una fecha sugerida y dos botones para mandar por mail y para cerrar el modal
  let modal = `
  <div class="modal-container">
    <div class="modal-content">
      <h2>Complete los datos para solicitar por mail una meeting</h2>
      <form id="form">
        <div class="mb-3">
          <input type="text" class="form-control" id="name" placeholder="Nombre y apellido" value="">
        </div>
        <div class="mb-3">
          <input type="date" class="form-control" id="date" value="">
        </div>
        <button id="send-mail" type="button" class="btn btn-primary">Enviar mail</button>
        <button id="close-modal" type="button" class="btn btn-primary">Cerrar</button>
      </form>
    </div>
  </div>`;

  // Capturo el texto del elemento que contiene las tablas con los servicios seleccionados para poder mandarlo por mail
  /*let mailContent = $("#estimate")[0].innerHTML;*/
  let mailContent = $("#estimate").text();

  // Creo el listener para el disparador del modal
  $("#trigger").on("click", ()=>{

    // Agrego el modal en el DOM
    $(app).append(modal);
    
    // Creo el listener para cerrar el modal removiendolo del DOM
    $("#close-modal").on('click', () => {
      $(".modal-container").remove();
    });

    // Creo el listener para el boton send-mail, capturo los valores del mail y la fecha y abro una pestaña con un mailto con el mail, asunto y mensaje predefinido
    $("#send-mail").on('click', () => {
      let name = $("#name").val();
      let date = $("#date").val();
      window.open(`mailto:test@example.com?subject=Pedido de reunion para avanzar con el presupuesto&body=Buenas, Mi nombre es ${name}. Estoy interesado en contratar los siguientes servicios: ${mailContent} Podría tener una meeting el ${date} para ultimar detalles y avanzar con el presupuesto final. Saludos, ${name}`);

      // Remuevo el modal del DOM
      $(".modal-container").remove()
    })
  });  
};

// Funcion para incrementar en una unidad el valor de los servicios seleccionados
increaseCartItem = (id) => {
  var item = cart.find(element => element.id == id)
  item.quantity++;
  item.subtotal = item.quantity * item.price;

  // Recalculo el total del carrito
  cartTotal();
  // Vacio el carrito
  emptyApp();
  // Vuelvo a cargar el carrito con el contenido actualizado
  loadBag();
}

// Funcion para decrementar en una unidad el valor de los servicios seleccionados
decreaseCartItem = (id) => {
  var item = cart.find(element => element.id == id)
  item.quantity--;
  item.subtotal = item.quantity * item.price;

  if(item.quantity==0){
    removeCartItem(item.id);
  }
  
  // Recalculo el total del carrito
  cartTotal();
  // Vacio el carrito
  emptyApp();
  // Vuelvo a cargar el carrito con el contenido actualizado
  loadBag();
}

// Funcion para eliminar un servicio del carrito
removeCartItem = (id) => {
  for (i=0 ; i<cart.length ; i++){
    if (cart[i].id == id){
      cart.splice(i,1);
    }
  }
  
  // Recalculo el total del carrito
  cartTotal();
  // Vacio el carrito
  emptyApp();
  // Vuelvo a cargar el carrito con el contenido actualizado
  loadBag();
}

/*-----------------------------------------
                USAGE
  ---------------------------------------*/

$(document).ready( function() {
  // Una vez cargados todos los archivos y funciones, cargo el listado de servicios en la pagina inicial
  loadStore();

  // Llamo a la funcion para calcular la fecha de videncia
  dateUntil();

  // Funcion para vaciar el contenido del nodo app
  emptyApp = () => {
    $(app).empty();
  }

  // Capturo el boton de la tienda, creo el listener que llama a las funciones de vaciar app y de carga de la tienda
  $(storeBtn).on('click', () =>{
    emptyApp();
    loadStore();
  })
  
  // Capturo el boton del carrito, creo el listener que llama a las funciones de vaciar app y de carga del carrito
  $(bagBtn).on('click', () =>{
    emptyApp();
    loadBag();
  })
})