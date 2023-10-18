export function FilterSize() {
  const products = document.querySelectorAll(".product");
  const selectedCategories = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  )
    .map((checkbox) => checkbox.getAttribute("name"))
    .toString();

  products.forEach((product) => {
    const productCategory = product.getAttribute("data-size");

    console.log("productCategory", productCategory);
    console.log("selectedCategories", selectedCategories);

    const isVisible =
      selectedCategories.length === 0 ||
      productCategory.includes(selectedCategories);

    product.style.display = isVisible ? "block" : "none";
  });
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", FilterSize);
});
