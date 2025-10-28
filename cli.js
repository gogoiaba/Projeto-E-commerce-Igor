const prompt = require("prompt-sync")();
const {
  produtos,
  clientes,
  incluirProduto,
  listarProdutos,
  cadastrarCliente,
  listarClientes,
  adicionarAoCarrinho,
  finalizarCompra,
  historicoCompras,
} = require("./app");

let opcao = "";

while (opcao !== "0") {
  console.log(`
===== SISTEMA PDV =====

1 - Cadastrar Produto
2 - Exibir Produtos
3 - Cadastrar Cliente
4 - Adicionar ao Carrinho
5 - Finalizar Compra
6 - Histórico de Compras
7 - Catálogo de Clientes
0 - Sair

========================
  `);

  opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    const nome = prompt("Nome do produto: ");
    const preco = Number(prompt("Preço: "));
    const quantidade = Number(prompt("Quantidade: "));
    incluirProduto(nome, preco, quantidade);
  }

  if (opcao === "2") {
    listarProdutos();
  }

  if (opcao === "3") {
    const nome = prompt("Nome do cliente: ");
    const cpf = prompt("CPF: ");
    const telefone = prompt("Telefone: ");
    cadastrarCliente(nome, cpf, telefone);
  }

  if (opcao === "4") {
    const nome = prompt("Produto para adicionar: ");
    const quantidade = Number(prompt("Quantidade: "));
    adicionarAoCarrinho(nome, quantidade);
  }

  if (opcao === "5") {
    const desc = Number(prompt("Desconto (%): "));
    finalizarCompra(desc);
  }

  if (opcao === "6") {
    console.table(historicoCompras);
  }

  if (opcao === "7") {
    listarClientes();
  }
}

console.log("Programa encerrado!");
