export function orderByPriceDesc() {
  const dataList = document.getElementById("productContainer");
  const products = document.querySelectorAll(".product");
  const descending = document.getElementById("descending");

  const productPrices = Array.from(products).map((element) =>
    element.getAttribute("data-price")
  );
  productPrices.sort((a, b) => b - a);

  productPrices.forEach((price) => {
    const element = dataList.querySelector(`[data-price="${price}"]`);
    if (element) {
      dataList.appendChild(element);
    }
  });

  descending.addEventListener("click", orderByPriceDesc);
}
