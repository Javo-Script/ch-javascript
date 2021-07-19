/*-----------------------------------------
                   DATA
  ---------------------------------------*/
  services=[];
  members=[];

  $.getJSON("data.json", (res, code) => {
    if (code == "success") {
      services = res.services;
      members = res.members;
    }
  })

/*-----------------------------------------
                   FUNCIONES
  ---------------------------------------*/
loadBag = () => {
  let items=[];
  
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
    items.push(service.id);
  
    let itemId = item.id.toString();

    let increaseBtn = "#increase-" + item.id.toString(); 
    $(increaseBtn).on('click', () => {increaseCartItem(itemId)});

    let decreaseBtn = "#decrease-" + item.id.toString(); 
    $(decreaseBtn).on('click', () => {decreaseCartItem(itemId)});

    let removeBtn = "#remove-" + item.id.toString(); 
    $(removeBtn).on('click', () => {removeCartItem(itemId)});
  
  }
  
var estimate = document.getElementById("estimate");

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

  $(app).append(`
  <div class="get-meeting">
    <button type="button" id="trigger" class="btn btn-outline-primary">Solicitar una reunión para avanzar con el presupuesto.</button>
  </div>`)

  let modal = `<div class="modal-container">
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
      <button id="close-mail" type="button" class="btn btn-primary">Cerrar</button>
    </form>
  </div>
</div>`;

  let mailContent = $("#estimate")[0].innerHTML;

  $("#trigger").on("click", ()=>{
    $(app).append(modal);
    
    $("#close-mail").on('click', () => {
      $(".modal-container").remove();
    });
  });


  $("#send-mail").on('click', () => {
    let name = $("#name").val()
    let date = $("#date").val()
    window.open(`mailto:test@example.com?subject=Pedido de reunion para avanzar con el presupuesto&body=Buenas,
    Mi nombre es ${name}. Estoy interesado en contratar los siguientes servicios:
    ${mailContent}
    Podría tener una meeting el ${date} para ultimar detalles y avanzar con el presupuesto final.
    Saludos,
    ${name}`);

    $(".modal-container").remove();
  })
};

increaseCartItem = (id) => {
  var item = cart.find(element => element.id == id)
  item.quantity++;
  item.subtotal = item.quantity * item.price;
  cartTotal();
  emptyApp();
  loadBag();
}

decreaseCartItem = (id) => {
  var item = cart.find(element => element.id == id)
  item.quantity--;
  item.subtotal = item.quantity * item.price;

  if(item.quantity==0){
    removeCartItem(item.id);
  }
  
  cartTotal();
  emptyApp();
  loadBag();
}

removeCartItem = (id) => {
  for (i=0 ; i<cart.length ; i++){
    if (cart[i].id == id){
      cart.splice(i,1);
    }
  }
  
  cartTotal();
  emptyApp();
  loadBag();
}
/*
loadProfile = () => {
  
};*/

/*-----------------------------------------
                USAGE
  ---------------------------------------*/

$(document).ready( function() {
  loadStore();

  emptyApp = () => {
    $(app).empty();
  }

  $(storeBtn).on('click', () =>{
    emptyApp();
    loadStore();
    console.log ('click en boton store')
  })
  $(bagBtn).on('click', () =>{
    emptyApp();
    loadBag();
    console.log ('click en boton bag')
  })
  $(profileBtn).on('click', () =>{
    emptyApp();
    loadProfile();
    console.log ('click en boton profile')
  })
})