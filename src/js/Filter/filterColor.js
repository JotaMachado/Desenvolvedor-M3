export function FilterColor() {
  const products = document.querySelectorAll(".product");
  const selectedCategories = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.getAttribute("name"));

  products.forEach((product) => {
    const productSizes = product.getAttribute("data-size").split(",");
    const productColors = product.getAttribute("data-color");
    const productPrice = parseFloat(product.getAttribute("data-price"));
    const isVisible =
      selectedCategories.length === 0 ||
      selectedCategories.every(
        (category) =>
          productSizes.includes(category) || productColors.includes(category)
      );
    // switch (selectedPriceRange) {
    //   case "0-50":
    //     isVisibleByPrice = productPrice >= 0 && productPrice <= 50;
    //     break;
    //   case "51-150":
    //     isVisibleByPrice = productPrice > 50 && productPrice <= 150;
    //     break;
    //   case "151-300":
    //     isVisibleByPrice = productPrice > 150 && productPrice <= 300;
    //     break;
    //   case "301-500":
    //     isVisibleByPrice = productPrice > 300 && productPrice <= 500;
    //     break;
    // }
    // const isVisiblex = isVisibleByCategory && isVisibleByPrice;
    product.style.display = isVisible ? "block" : "none";
  });
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", FilterColor);
});
