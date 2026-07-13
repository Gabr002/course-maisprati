// Exercício 1
let prompt = require("prompt-sync")();

/* let number = Number(prompt("Digite um número: "));

console.log("==== Tabuada ====");

for (i = 1; i <= 10; i++) {
    console.log(`${i} + ${number} = ${Number(i) + Number(number)}`);
}

for (i = number; i <= 10 + (number - 1); i++) {
    console.log(`${i} - ${number} = ${Number(i) - Number(number)}`);
}

for (i = 0; i <= 10; i++) {
    console.log(`${i} X ${number} = ${Number(number) * Number(i)}`);
}

for (i = number; i <= 100; i += number) {
    console.log(`${i} / ${number} = ${Number(i) / Number(number)}`);
} */

// Exercício 2

/*let number = Number(prompt("Digite um número: "));
 let totalDeDigitos = 0;

while (number > 0) {
    number = parseInt(number / 10)
    console.log(number);
    totalDeDigitos++; // total de digitos
}

console.log(totalDeDigitos); */

// Exercício 3

/* let number = Number(prompt("Digite um número: "));
let arrFibonacci = [];

arrFibonacci[0] = 1;
arrFibonacci[1] = 1;

for(i = 2; i <= number; i++){
    arrFibonacci[i] = arrFibonacci[i-1] + arrFibonacci[i-2];
    console.log(" ", arrFibonacci[i]);
} */

// Exercício 4

/* let senha = prompt("Digite a senha: ");
let tentativas = 3;

while(tentativas--){
    if(senha === "12345"){ 
        console.log("Acertou!");
        break;
    }
    else console.log("Senha Incorreta");
} */

// Exercício 5

/* let number = Number(prompt("Numeros primos até qual valor?: "));
let totalPrimos = 0;

function ehPrimo(value){
    for(let divisor = 2; divisor * divisor <= value; divisor++){
        if(value % divisor === 0) return false
    }
    return true;
}



for(i = 2; i <= number; i++){
    if(ehPrimo(i)) totalPrimos++;
}   
console.log(totalPrimos) */

// Exercício 6

/* let arrayNotas = [];
let media = 0;
let maiorNota = 0;
let menorNota = 10;

for(i = 0; i < 5; i++){
    arrayNotas[i] = Number(prompt(`Digite a nota ${i + 1}:`));
    media += arrayNotas[i];
    if(arrayNotas[i] > maiorNota){
        maiorNota = arrayNotas[i];
    }
    if(arrayNotas[i] < menorNota){
        menorNota = arrayNotas[i];
    }
}

// média das notas
console.log(`Média das notas: ${media / arrayNotas.length}`);

// maior nota
console.log(`Maior nota: ${maiorNota}`);

// menor nota
console.log(`Menor nota: ${menorNota}`); */

// Exercício 7

/* let arrayProdutos = {nome: [], preco: []}

let sair = 1;

while(sair){
    arrayProdutos.nome.push(prompt("Digite o nome do seu produto:"));
    arrayProdutos.preco.push(Number(prompt("Digite o preço do seu produto:")));
    sair = Number(prompt("Deseja continuar? (1 - sim, 0 - não): "));
} */

// Exercício 8

/* let word = prompt("Digite uma palavra: ");
let arrayWord = [];

for( i in word){
    arrayWord.push(i);
}

let arrayOrd =  arrayWord.sort((a, b) => b - a);

for(let i = 0; i < arrayOrd.length; i++){
    if(arrayWord[i] === i) 
        continue;
    else{ 
        console.log("Não é um palíndromo");
        break;
    }
} */

// Exercício 9

/* let number = Number(prompt("Digite um número: "))
let numberRandom = Math.random();

while(number !== numberRandom){
    if(number > numberRandom){
        console.log("Menor");
    }
    else{
        console.log("Maior");
    }
    number = Number(prompt("Digite um número: "))
    numberRandom = Math.random();
}

console.log("Acertou!"); */

// Exercício 10

/* matriz 3x4 de alunos */
let aluno = [3][4];
let media = 0;
let maiorNota = 0;
let menorNota = 10;
let nomeAluno = "";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        aluno[i][j] = Number(prompt(`Digite a nota ${i + 1} do ${j + 1}º aluno:`));
        media += aluno[i][j];
        if (aluno[i][j] > maiorNota) {
            maiorNota = aluno[i][j];
        }
        if (aluno[i][j] < menorNota) {
            menorNota = aluno[i][j];
        }
    }
}

// imprimir informações
console.log(`Média das notas: ${media / aluno.length}`); // media das notas
console.log(`Maior nota: ${maiorNota}`); // maior nota
console.log(`Menor nota: ${menorNota}`); // menor nota



