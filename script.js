function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let total = 0;

  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    total += item.preco;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.nome}</strong><br>
      Tamanho: ${item.tamanho} <br>
      Cor: ${item.cor} <br>
      Preço: R$ ${item.preco.toFixed(2).replace(".", ",")}
      <br><br>
      <button onclick="removerItem(${index})">Remover</button>
      <hr>
    `;

    lista.appendChild(li);
  });

  totalEl.innerText =
    "Total: R$ " + total.toFixed(2).replace(".", ",");
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function finalizarCompra() {
  alert(
    "Pedido registrado!\n\n" +
    "Faça o pagamento via Pix e envie o comprovante.\n\n" +
    "Obrigado por comprar na Backseat Wear 🖤"
  );

  localStorage.removeItem("carrinho");
}
