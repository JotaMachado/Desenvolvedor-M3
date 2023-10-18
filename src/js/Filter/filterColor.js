export function FilterColor() {
  const products = document.querySelectorAll(".product");
  const selectedCategoriesByName = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.getAttribute("name"));


  const selectedCategoriesByValue = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.getAttribute("value"));



  products.forEach((product) => {
    const productSizes = product.getAttribute("data-size").split(",");
    const productColors = product.getAttribute("data-color");
    const productPrice = parseFloat(product.getAttribute("data-price"));


    const isVisible = selectedCategoriesByName.every(
      (category) =>
        productSizes.includes(category) || productColors.includes(category) || searchByPrice(productPrice, selectedCategoriesByValue)
    );

    product.style.display = isVisible ? "block" : "none";
    debugger
  });
}


function searchByPrice(productPrice, selectedCategoriesByValue) {
  if (selectedCategoriesByValue[0] != null) {
    var categorySize = JSON.parse(selectedCategoriesByValue);
    let isVisibleByPrice = false;

    if (categorySize.type == "price") {
      switch (categorySize.value) {
        case "0-50":
          isVisibleByPrice = productPrice >= 0 && productPrice <= 50;
          break;
        case "51-150":
          isVisibleByPrice = productPrice > 50 && productPrice <= 150;
          break;
        case "151-300":
          isVisibleByPrice = productPrice > 150 && productPrice <= 300;
          break;
        case "301-500":
          isVisibleByPrice = productPrice > 300 && productPrice <= 500;
          break;
      }
      return isVisibleByPrice;
    }

  }
  return false;
}


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", FilterColor);
});
