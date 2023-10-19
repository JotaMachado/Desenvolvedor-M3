const jsonServerURL = "http://localhost:5000/products";

const dataList = document.getElementById("productContainer");

export function fetchData() {
  let filteredProducts = [];
  let checkedSize;
  let checkedColor;
  let checkedPrice;

  fetch(jsonServerURL)
    .then((response) => response.json())
    .then((data) => {
      dataList.innerHTML = "";

      data.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = `product ${product.size[0]} ${product.size[1]} `;

        productDiv.setAttribute("data-color", product.color);
        productDiv.setAttribute("data-size", product.size);
        productDiv.setAttribute("data-price", product.price);
        productDiv.setAttribute("data-date", product.date);
        const productContent = `
            <img class="product__image" src="${product.image}" alt="${
          product.name
        }">
            <h2 class="product__name">${product.name}</h2>
            <p class="product__price">R$ ${product.price.toFixed(2)}</p>
            <p class="product__installments">até ${
              product.parcelamento[0]
            }x de R$ ${product.parcelamento[1].toFixed(2)}</p>
            <button class="product__button">Comprar</button>
        `;

        productDiv.innerHTML = productContent;
        dataList.appendChild(productDiv);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar dados do servidor JSON:", error);
    });
}
