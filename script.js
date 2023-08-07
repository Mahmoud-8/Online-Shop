import {addToCart} from "./cards.js"


const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});


