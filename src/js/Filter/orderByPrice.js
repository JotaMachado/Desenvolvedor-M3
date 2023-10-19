export function orderBy() {
  const sortButton = document.getElementById("sortBtn");
  const sortOptions = document.getElementById("sortOptions");

  sortButton.addEventListener("click", function () {
    sortOptions.style.display =
      sortOptions.style.display === "block" ? "none" : "block";
  });
  const products = document.querySelectorAll(".product");

  const recent = document.getElementById("recent");
  const ascending = document.getElementById("ascending");
  const descending = document.getElementById("descending");

  products.forEach((product) => {
    console.log(product);
    const productDates = product.getAttribute("data-date");
    const parts = productDates.split("-");

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
  });

  recent.addEventListener("click", toggleSortOptions);

  ascending.addEventListener("click", function () {});

  descending.addEventListener("click", function () {});
}
