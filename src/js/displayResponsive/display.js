export function display() {
  if (window.innerWidth <= 767) {
    var dynamicDiv = document.createElement("div");
    DivConvert = dynamicDiv.innerHTML;
    dynamicDiv.textContent = "Este é um elemento criado com JavaScript.";

    document.getElementById("content").appendChild(dynamicDiv);
  }
}
window.addEventListener("load", display);
