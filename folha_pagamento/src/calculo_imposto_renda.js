// Inserir o salário bruto

// Base de cálculo	Alíquota	Parcela a deduzir do IR
// De R$ 2.259,21 até R$ 2.826,65	7,5%	R$ 169,44
// De R$ 2.826,66 até R$ 3.751,05	15%	R$ 381,44
// De R$ 3.751,06 até R$ 4.664,68	22,5%	R$ 662,77
// Acima de R$ 4.664,69	27,5%	R$ 896,00

const readline = require("readline");

const input = readline.createInterface(process.stdin, process.stdout);

input.question("Insira o valor do seu salario bruto:", (value) => {
  const salarioBruto = Number(value);

  if (salarioBruto >= 2259.21 && salarioBruto <= 2826.55) {
    parcelaIR = salarioBruto * 0.075;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    parcelaIR = salarioBruto * 0.15;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    parcelaIR = salarioBruto * 0.225;
  } else if (salarioBruto >= 4664.69) {
    const parcelaIR = salarioBruto * 0.275;
    console.log(
      "O desconto do seu IR caiu no cálculo da alíquota de 27,5%\n" +
        `O valor da parcela a ser descontada pelo seu IR é R$ ${parcelaIR.toFixed(
          2
        )}`
    );
  } else {
    console.log("Salário bruto fora da faixa de cálculo de IR.");
  }

  input.close();
});
