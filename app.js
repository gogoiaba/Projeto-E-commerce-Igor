let produtos = [
  { nome: "lapiseira", preco: 14.9, quantidade: 52 },
  { nome: "caneta", preco: 4.5, quantidade: 100 },
  { nome: "borracha", preco: 2.75, quantidade: 30 },
];
let clientes = [
  {
    nome: "Ana Beatriz",
    cpf: "123.456.789-00",
    telefone: "(14) 99999-1111",
  },
  {
    nome: "Carlos Eduardo",
    cpf: "987.654.321-00",
    telefone: "(14) 98888-2222",
  },
  {
    nome: "Fernanda Lima",
    cpf: "456.789.123-00",
    telefone: "(14) 97777-3333",
  },
];
let carrinho = [];
let historicoCompras = [];

// cadastrar produtos
function incluirProduto(nome, preco, quantidade) {
  produtos.push({
    nome: nome,
    preco: Number(preco.toFixed(2)),
    quantidade: quantidade,
  });
}

// cadastrar clientes
function cadastrarCliente(nome, cpf, telefone) {
  clientes.push({
    nome: nome,
    cpf: cpf,
    telefone: telefone,
  });
}

//busca o produto que o usuario pediu no array produtos e coloca no array carrinho
function adicionarAoCarrinho(nome, quantidade) {
  const produto = produtos.find((p) => p.nome === nome);
  if (!produto) {
    console.log("Produto não encontrado!");
    return;
  }
  carrinho.push({
    nome: nome,
    preco: produto.preco,
    quantidade: quantidade,
  });
}

function finalizarCompra(desconto = 0) {
  if (carrinho.length === 0) {
    console.log("Carrinho vazio!");
    return;
  }

  //pega cada item do carrinho e calcula pra colocar no subtotal
  let subtotal = 0;
  carrinho.forEach((item) => {
    subtotal += item.preco * item.quantidade;
  });

  //aplica o desconto concedido ao subtotal e mostra o total final
  let valorDesconto = subtotal * (desconto / 100);
  let totalFinal = subtotal - valorDesconto;

  console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
  console.log(`Desconto: ${desconto}% (-R$ ${valorDesconto.toFixed(2)})`);
  console.log(`Total final: R$ ${totalFinal.toFixed(2)}`);

  //tirar itens que estão sendo comprados do estoque
  carrinho.forEach((item) => {
    const produto = produtos.find((p) => p.nome === item.nome);
    produto.quantidade -= item.quantidade;
  });

  //mandar o que foi comprado que estava no carrinho e o total para o historico
  historicoCompras.push({
    itens: carrinho.map((item) => item.nome),
    total: Number(totalFinal.toFixed(2)),
  });

  //esvaziar o array carrinho e dar a mensagem de sucesso
  carrinho = [];
  console.log("Compra finalizada!");
}

module.exports = {
  produtos,
  clientes,
  carrinho,
  historicoCompras,
  incluirProduto,
  cadastrarCliente,
  adicionarAoCarrinho,
  finalizarCompra,
};
