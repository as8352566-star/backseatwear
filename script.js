// Carrinho salvo no navegador
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar produto
function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho 🛒");
}

// Carregar carrinho (para usar depois em carrinho.html)
function carregarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");

  if (!lista || !totalEl) return;

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;

    const li = document.createElement("li");
    li.innerHTML = `
${item.nome} (Tam: ${item.tamanho}) — R$ ${item.preco.toFixed(2)}

      <button onclick="removerItem(${index})">X</button>
    `;

    lista.appendChild(li);
  });

  totalEl.innerText = "Total: R$ " + total.toFixed(2);
}

// Remover item
function removerItem(index) {
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

// Limpar carrinho após compra
function finalizarCompra() {
  alert("Pedido realizado! Enviaremos as instruções do Pix no seu e-mail.");
  carrinho = [];
  localStorage.removeItem("carrinho");
  carregarCarrinho();
}
function adicionarComTamanho(nome, preco, selectId) {
  const tamanho = document.getElementById(selectId).value;

  if (tamanho === "") {
    alert("Escolha um tamanho antes de adicionar ao carrinho.");
    return;
  }

  carrinho.push({ nome, preco, tamanho });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert(`Produto adicionado 🛒 | Tamanho: ${tamanho}`);
}
<script>
function aplicarCupom() {
  const cupom = document.getElementById("cupom").value.toLowerCase();
  const cuponsValidos = ["montanh", "juh", "igor", "minipekka", "eric"];
  const precoOriginal = 79.99; // MUDE se for outro produto
  let precoFinal = precoOriginal;

  if (cuponsValidos.includes(cupom)) {
    precoFinal = precoOriginal * 0.95; // 5% OFF
    alert("Cupom aplicado! 5% de desconto 🔥");
  } else if (cupom !== "") {
    alert("Cupom inválido ❌");
  }

  document.getElementById("preco").innerText =
    "R$ " + precoFinal.toFixed(2).replace(".", ",");
}
</script>
