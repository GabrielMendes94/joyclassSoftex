const readline = require("readline-sync");
nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");
nota3 = readline.questionFloat("Digite a terceira nota: ");

let media = (nota1 + nota2 + nota3) / 3;
console.log(`Média = ${media}`);