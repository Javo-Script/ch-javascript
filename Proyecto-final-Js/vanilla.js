/*increaseCartItem = (id) => {  
  for (i=0; i<cart.length; i++){
    if(cart[i].id == id){      
      cart[i].quantity++;
      cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
  }
  cartTotal();
  emptyApp();
  loadBag();
}

decreaseCartItem = (id) => { 
  for (i=0; i<cart.length; i++){
    if(cart[i].id == id){      
      cart[i].quantity--;
      cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
    if(cart[i].quantity == 0){
      removeCartItem(item.id);
    }
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
}*/