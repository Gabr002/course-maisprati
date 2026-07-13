// const notas = [9, 8.5, 5, 6];

// notas.forEach((nota, indice, array) => {
//   console.log(nota, indice, array);
// });

/* 
  Criem um objecto carro - Usem for in para imprimir cada propriedade no formato: "chave: valor" 
*/

/* let possante = {
  marca: "Volkswagen",
  modelo: "Fusca",
  ano: 1969,
  cor: "Azul",
  ligado: false,
};

for (let key in possante) {
  console.log(`${key}: ${possante[key]}`);
} */

/* 
  Criem um array de cidades, imprimam apenas as cidades que começam com a letra 's'. Usando for of
*/

/* let cidades = [
  "Fortaleza",
  "São Paulo",
  "Rio de Janeiro",
  "Salvador",
  "Recife",
  "Manaus",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Florianópolis",
];

for(let cidade of cidades){
  if(cidade[0] == "S"){ console.log(cidade)}
} */

/* 
  Criem um array de números e usem ForEach para somar todos os números 
*/

let arrNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let somarAll = 0;

arrNumbers.forEach((element) => {
  somarAll += element;
});

console.log(somarAll);
