const readline = require("readline-sync");
const nota1 = readline.questionFloat("Digite a primeira nota: ");
const nota2 = readline.questionFloat("Digite a segunda nota: ");

//função sem parâmetro
function media1() {
    console.log(`Média = ${(nota1 + nota2) / 2}`);
}

//função com parâmetro
function media2(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

//arrow function com parâmetros
const media3=(nota1,nota2)=>`Média = ${(nota1 + nota2) / 2}`

media1();
console.log(`Média = ${media2(nota1,nota2)}`);
console.log(media3(nota1,nota2));