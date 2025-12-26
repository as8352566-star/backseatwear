<script>
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho 🛒");
}

function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");
  let total = 0;

  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    total += item.preco;
    lista.innerHTML += `
      <li>
        ${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerItem(${index})">X</button>
      </li>
    `;
  });

  totalEl.innerText = "Total: R$ " + total.toFixed(2);
}

function removerItem(index) {
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}
</script>
