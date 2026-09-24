const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const desc = produtos.map((desconto) => {
    return {
        id: desconto.id,
        nome: desconto.nome,
        preco: desconto.preco*0.9,
        estoque: desconto.estoque,
        ativo: desconto.ativo
    }
})

console.log("Produtos com 10% de desconto: ", desc)