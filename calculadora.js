// versão simplificada para o aprendido no módulo online até então 
// e de acordo com o que é pedido na questão (divisão mostrando sobra, se houver)
const readline = require("readline-sync");

let num1 = readline.questionInt("Digite o valor do primeiro número: ");
let num2 = readline.questionInt("Digite o valor do segundo número: ")
let operacao = readline.question("Digite o símbolo aritmético da operação a ser realizada(+-/*): ");

switch (operacao) {
    case "+":
        console.log(num1, " + ", num2, " = ", (num1 + num2));
        break;

    case "-":
        console.log(num1, " - ", num2, " = ", (num1 - num2));
        break;

    case "*":
        console.log(num1, " * ", num2, " = ", (num1 * num2));
        break;

    case "/":
        if (num1 % num2 == 0) {
            console.log(num1, " / ", num2, " = ", (num1 / num2));
        } else {
            console.log(num1, " / ", num2, " = ", parseInt(num1 / num2), ", resto: ", num1 % num2);
        }

        break;

    default:
        break;
}