export function orderBy() {
  const dataList = document.getElementById("productContainer");
  const sortButton = document.getElementById("sortBtn");
  const sortOptions = document.getElementById("sortOptions");

  sortButton.addEventListener("click", function () {
    sortOptions.style.display =
      sortOptions.style.display === "block" ? "none" : "block";
  });

  const products = document.querySelectorAll(".product");
  const recent = document.getElementById("recent");

  const productDates = Array.from(products).map((element) =>
    element.getAttribute("data-date")
  );
  productDates.sort((a, b) => new Date(b) - new Date(a));
  productDates.forEach((date) => {
    const element = dataList.querySelector(`[data-date="${date}"]`);
    if (element) {
      dataList.appendChild(element);
    }
  });
  recent.addEventListener("click", orderBy);
}
