const cartItemsContainer = document.getElementById("cartItems");
import {removeCartItem} from "./cards.js"
export function updateCart(cartItems,totalPrice) {

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