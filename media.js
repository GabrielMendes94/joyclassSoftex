const readline = require("readline-sync");
nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");
let media = (nota1+nota2)/2;
if (media>=7){
    console.log(`Média: ${media}. Aluno aprovado!`);
}else{
    console.log(`Média: ${media}. Aluno reprovado!`);
}
