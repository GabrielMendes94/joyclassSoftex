let Banco = {
    conta: "10401",
    saldo: 5800,
    tipoDeConta: "corrente",
    agencia: "4000",

    buscarSaldo: function () {
        return this.saldo;
    },

    deposito: function (valor) {
        this.saldo += valor;
    },

    saque: function (valor) {
        this.saldo -= valor;
    },

    numeroDaConta: function () {
        return this.conta;
    }
}

console.log(`Saldo: ${Banco.buscarSaldo()}`);
Banco.deposito(100);
console.log(`Saldo: ${Banco.buscarSaldo()}`);
Banco.saque(50);
console.log(`Saldo: ${Banco.buscarSaldo()}`);
console.log(Banco.numeroDaConta());