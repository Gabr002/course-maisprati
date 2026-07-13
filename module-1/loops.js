/* let animais = ["Gato", "Cachorro", "Papagaio"];
console.log("Array inicial: ", animais);

animais.push("Macaco");
animais.unshift("Abelha");
animais.pop();
animais.shift();
animais.splice(2, 1);

for (let animal of animais) {
  console.log(animal);
}

animais.forEach(function (animal, indice) {
  console.log(indice, animal);
});

console.log("indice do 'Cachorro': ", animais.indexOf("Cachorro"));
console.log("Inclui 'Pardal'? ", animais.includes("Pardal"));

let animaisObjetos = [
  { id: 1, nome: "Gato", salario: 2000 },
  { id: 2, nome: "Cachorro", salario: 3000 },
  { id: 3, nome: "Papagaio", salario: 1000 },
  { id: 4, nome: "Macaco", salario: 4000 },
  { id: 5, nome: "Abelha", salario: 5000 },
];

let totalSalario = animaisObjetos.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual.salario,
  0,
);

let novoAnimal = animaisObjetos.find((func) => func.salario > 5000);

console.log(novoAnimal);

let novoAnimal = animaisObjetos.filter((func) => func.salario > 2000);

console.log(novoAnimal);

let salarioComDesconto = animaisObjetos.map(animaisObjetos.salario * 0.9);

let animaisOrndenados = [...animais].sort((a, b) => a - b);

console.log(animaisOrndenados);

animaisOrndenados = [...animais].sort((a, b) => b - a);

console.log(animaisOrndenados);

animaisOrdenados.reverse();

console.log(animaisOrdenados);

// Outros métodos uteis

let grupo1 = ["Alice", "Bruno"];
let grupo2 = ["Carla", "Daniel"];
let grupo3 = ["Eva"];

let turmaCompleta = grupo1.concat(grupo2, grupo3);

console.log(turmaCompleta);

let matrizNotas = [
  [8, 7, 9],
  [6, 10, 8],
  [7, 7, 8],
];
console.log("\nArray de arrays:", matrizNotas);
let todasAsNotas = matrizNotas.flat();
console.log("Após flat():", todasAsNotas); // [8, 7, 9, 6, 10, 8, 7, 7, 8]
*/

let turma = [
  { nome: "Felipe", notas: [7.0, 8.5, 6.0] },
  { nome: "Gabriela", notas: [5.0, 4.5, 6.0] },
  { nome: "Hugo", notas: [9.0, 9.5, 10.0] },
  { nome: "Isabela", notas: [6.0, 7.0, 5.5] },
  { nome: "João", notas: [3.0, 4.0, 5.0] },
  { nome: "Karine", notas: [8.0, 7.5, 9.0] },
];

let mediaTurma = turma.map((aluno) => {
  let somaAluno = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  let mediAluno = somaAluno / aluno.notas.length;
  return { nome: aluno.nome, media: mediAluno };
});

let alunosAprovados = mediaTurma.filter((aluno) => {
  return aluno.media >= 6;
});

let ordemAlunosAprovados = alunosAprovados.sort((a, b) => {
  return b.media - a.media;
});

// Exibindo o relatório geral dos resultados

console.log(`\n--- Relatório de Notas da Turma ---`);
console.log(`Média de cada aluno:`);
mediaTurma.forEach((aluno) =>
  console.log(`- ${aluno.nome}: ${aluno.media.toFixed(2)}`),
);
console.log(
  `\nAlunos Aprovados (Média >= 6.0), em ordem decrescente de média:`,
);
ordemAlunosAprovados.forEach((aluno) =>
  console.log(`- ${aluno.nome}: ${aluno.media.toFixed(2)}`),
);
console.log(`\nTotal de alunos aprovados: ${alunosAprovados.length}`);
console.log(
  `Total de alunos reprovados: ${turma.length - alunosAprovados.length}`,
);
