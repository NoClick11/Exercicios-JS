const produtos = [
  { nome: "Notebook", categoria: "Eletronico" },
  { nome: "Maçã", categoria: "Alimento" },
  { nome: "Geladeira", categoria: "Eletronico" },
  { nome: "Pão", categoria: "Alimento" },
  { nome: "Mouse", categoria: "Eletronico" },
];

const eletronicos = produtos.filter((eletronico) => {
  return eletronico.categoria === "Eletronico";
});

console.log(produtos);  

console.log(eletronicos);
