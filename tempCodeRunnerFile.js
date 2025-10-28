let carrinho = [];

// funcao para adicionar os itens no carrinho
function adicionarAoCarrinho(nome, quantidade) {
  const produto = produtos.find((p) => p.nome === nome);
  carrinho.push({
    nome: nome,
    preco: produto.preco,
    quantidade: quantidade,
  });
}

adicionarAoCarrinho("caneta", 2);
adicionarAoCarrinho("compasso", 1);
console.log(carrinho);

//fechar compra, calcular valores com desconto, tirar produto do estoque, registrar compra no historico

let historicoCompras = [];