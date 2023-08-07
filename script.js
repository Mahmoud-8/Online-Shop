import {addToCart,removeCartItem} from "./cards.js"



const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsContainer = document.getElementById("cartItems");
const cartItems = [];
let totalPrice = 0;


function updateCart() {
  cartItemsContainer.innerHTML = ""; 
  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.textContent = `${item.item} -  €${item.price}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => removeCartItem(index));
    
    cartItemElement.appendChild(removeButton);
    cartItemsContainer.appendChild(cartItemElement);
  });
  const totalElement = document.createElement("div");
  totalElement.textContent = `Total: €${totalPrice}`;
  cartItemsContainer.appendChild(totalElement);
}
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});


