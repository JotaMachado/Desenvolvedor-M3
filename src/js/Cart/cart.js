const removeCartItemBtn = document.getElementsByClassName("btn__purchase");
for (let i = 0; i < removeCartItemBtn.length; i++) {
  const element = removeCartItemBtn[i];
  button.addEventListener("click", function (event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  });
}

function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartRows = cartItemContainer.getElementsByClassName("cart-row");
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("cart-price")[0];
    const quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
  }
}
