loadBag = () => {
  $(app).append(`
  <table class="table table-hover" style="text-align: center;">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Servicio</th>
        <th scope="col">Categoria</th>
        <th scope="col">Precio unitario</th>
        <th scope="col">Subtotal</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody id="cart-items">`);
  
  for(item of cart){
    
    $("#cart-items").append(`
    <tr id="item-${item.id}">
      <th scope="row"><button id="increase-${item.id}"><i class="fas fa-plus"></i></button><button id="decrease-${item.id}"><i class="fas fa-minus"></i></button>${item.quantity}</th>
      <td>${item.title}</td>
      <td>${item.category}</td>
      <td>$${item.price}</td>
      <td>$${item.subtotal}</td>
      <td><button id="remove-${item.id}"><i class="fas fa-times"></i></button></td>
    </tr>`);

    var increase = "#increase-"+item.id;
    var decrease = "#decrease-"+item.id;
    var remove = "#remove-"+item.id;
    $(increase).click(()=>{increaseCartItem(item.id)});
    $(decrease).click(()=>{decreaseCartItem(item.id)});
    $(remove).click(()=>{removeCartItem(item.id)});
  }
  $(app).append(`  
  </tbody>
  </table>
  <table class="table">
    <tr>
      <th scope="row"></th>
      <td></td><td></td><td></td><td></td><td></td>
      <td><strong>TOTAL $${totalCart}</strong></td>
    </tr>
  </table>`)

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
    console.log(item.id);
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

loadProfile = () => {};

$(document).ready( function() {

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