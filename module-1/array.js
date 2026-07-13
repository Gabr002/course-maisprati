// Primeiro tópico sobre array

// var arr = ["Este é o primeiro elemento", "Este é o segundo elemento", "Este é o terceiro elemento"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);

// Segundo tópico sobre array

// console.log(arr.0); // Um erro de sintaxe

// Outros pontos

// var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]
// console.log(anos.0); // Um erro de sintaxe
// console.log(anos[0]); // funciona corretamente

// renderer.3d.setTexture(model, 'personagem.png'); // Um erro de sintaxe
// renderer['3d'].setTexture(model, 'personagem.png');

// console.log(anos["2"] != anos["02"]);

// var promessa = {
//     var: "texto",
//     array: [1, 2, 3, 4]
// };

// console.log(promessa["var"]);

// var frutas = [];

// frutas.push("banana", "maca", "pêssego");

// console.log(frutas.length);

// frutas[5] = "manga";

// console.log(frutas[5]);
// console.log(Object.keys.apply(frutas));
// console.log(frutas.length);

// frutas.length = 10;

// console.log(frutas.length);

// Criando um array usando o resultado de uma comparação
// Aprendendo sobre Regex
// Encontra um d seguido por um ou mais b's seguido por um d
// Salva os b's encontrados e o d seguinte
// Ignora caixa (maiúscula/minúscula)

// var minhaRegex = /d(b+)(d)/i;

// var meuArray = minhaRegex.exec("cdbBdbsbz");
// console.log(meuArray);

// Métodos genéricos de Array

function isLetter(character) {
  return character >= "a" && character <= "z";
}

if (Array.every(str, isLetter))
  alert("A string '" + str + "' contém apenas letras");
