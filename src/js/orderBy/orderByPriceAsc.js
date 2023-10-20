export function orderByPriceAsc() {
  const dataList = document.getElementById("productContainer");
  const products = document.querySelectorAll(".product");
  const ascending = document.getElementById("ascending");

  const productPrices = Array.from(products).map((element) =>
    element.getAttribute("data-price")
  );
  productPrices.sort((a, b) => a - b);

  productPrices.forEach((price) => {
    const element = dataList.querySelector(`[data-price="${price}"]`);
    if (element) {
      dataList.appendChild(element);
    }
  });

  ascending.addEventListener("click", orderByPriceAsc);

  descending.addEventListener("click", function () {});
}
