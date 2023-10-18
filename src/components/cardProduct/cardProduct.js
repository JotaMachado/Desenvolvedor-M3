verificarComponentes();

function verificarComponentes() {
  var Cards = document.getElementsByClassName("Card");

  if (Cards) {
    createCard(Cards);
  }
}

function createCard() {
  for (const c of Cards) {
    var Card = document.createElement("Card");
    var h1 = document.createElement("h1");
    h1.innerHTML = "Criando componentes";
    Card.appendChild(h1);
    c.appendChild(Card);
  }
}
