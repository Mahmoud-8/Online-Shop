export function addToCart(event) {
  const item = event.target.getAttribute("data-item");
  const price = parseFloat(event.target.getAttribute("data-price"));
  cartItems.push({ item, price }); 
  totalPrice += price;
  updateCart();
}

export function removeCartItem(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    totalPrice -= removedItem.price;     
    updateCart();
  } 