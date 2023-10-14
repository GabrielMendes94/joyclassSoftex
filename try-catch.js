const readline = require("readline-sync");

try {
    let num1 = readline.questionInt("Digite o valor do numerador da divisão: ");
    let num2 = readline.questionInt("Digite o valor do denominador da divisão: ");
    if (num2 == 0) {
        throw new Error("Não é possível dividir por zero");
    }
    let resultado = num1/num2;
    console.log(`${num1}/${num2}=${resultado}`);
} catch (error) {
    console.log(`Erro: ${error.message}`);
} finally {
    console.log(`Código executado!`);  
}
