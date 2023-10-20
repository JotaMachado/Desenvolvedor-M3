export function CartPurchase() {
  const headerCart = document.getElementById("headerCart");
  const Cart = document.getElementById("Cart");
  headerCart.addEventListener("click", function () {
    Cart.style.display = Cart.style.display === "block" ? "none" : "block";
  });
}
