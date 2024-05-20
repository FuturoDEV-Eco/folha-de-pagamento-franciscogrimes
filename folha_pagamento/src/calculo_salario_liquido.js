const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout);

const calculaIR = require("./calculo_imposto_renda");
const calculaINSS = require("./calculo_inss");

input.question("Qual o valor do salário bruto?", (value) => {
  const salarioBruto = parseFloat(value);

  function salarioLiquido(salarioBruto) {
    const IR = calculaIR(salarioBruto);
    const INSS = calculaINSS(salarioBruto);
    const resultado = salarioBruto - IR - INSS;

    console.log(`O valor do salário líquido é R$ ${resultado.toFixed(2)}`);
  }

  salarioLiquido(salarioBruto);

  input.close();
});
