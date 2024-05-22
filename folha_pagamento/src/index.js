// index.js

const readline = require("readline");

const input = readline.createInterface(process.stdin, process.stdout);

const calculaSalarioLiquido = require("./calculo_salario_liquido");
const calculaIR = require("./calculo_imposto_renda");
const calculaINSS = require("./calculo_inss");

input.question("Nome do funcionário: ", (name) => {
  const nome = name;
  input.question("CPF: ", (cpf) => {
    const CPF = cpf;
    input.question("Mês do pagamento (numérico): ", (month) => {
      const mes = month;
      input.question("Salário Bruto: R$ ", (value) => {
        const salarioBruto = parseFloat(value);

        const IR = calculaIR(salarioBruto);
        const INSS = calculaINSS(salarioBruto);
        const salarioLiquido = calculaSalarioLiquido(salarioBruto);

        input.close();
        console.log(
          "--- Folha de Pagamento ---\n" +
            `Nome: ${nome}\n` +
            `CPF: ${CPF}\n` +
            `Mês do Pagamento: ${mes}\n` +
            `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
            `INSS: R$ ${INSS}\n` +
            `Imposto de Renda: R$ ${IR}\n` +
            `Salário Líquido: R$ ${salarioLiquido}`
        );
      });
    });
  });
});
