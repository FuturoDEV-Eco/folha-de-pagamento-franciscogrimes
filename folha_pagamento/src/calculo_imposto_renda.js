// Inserir o salário bruto

// Base de cálculo	Alíquota	Parcela a deduzir do IR
// De R$ 2.259,21 até R$ 2.826,65	7,5%	R$ 169,44
// De R$ 2.826,66 até R$ 3.751,05	15%	R$ 381,44
// De R$ 3.751,06 até R$ 4.664,68	22,5%	R$ 662,77
// Acima de R$ 4.664,69	27,5%	R$ 896,00

let valor = 2500.65;

if (Number(valor) >= 2259.21 && Number(valor) <= 2826.55) {
  parcelaIR = valor * 0.075;

  console.log(
    "O desconto do seu IR caiu no cálulo da alíquota de 7,5%\n" +
      `O valor da parcela a ser descontada pelo seu IR é R$ ${parcelaIR.toFixed(
        2
      )}`
  );
} else if (Number(valor) >= 2826.66 && Number(valor) <= 3751.05) {
  parcelaIR = valor * 0.15;
  console.log(
    "O desconto do seu IR caiu no cálulo da alíquota de 15%\n" +
      `O valor da parcela a ser descontada pelo seu IR é R$ ${parcelaIR.toFixed(
        2
      )}`
  );
} else if (Number(valor) >= 3751.06 && Number(valor) <= 4664.68) {
  parcelaIR = valor * 0.225;
  console.log(
    "O desconto do seu IR caiu no cálulo da alíquota de 22,5%\n" +
      `O valor da parcela a ser descontada pelo seu IR é R$ ${parcelaIR.toFixed(
        2
      )}`
  );
} else if (Number(valor) >= 4664.69) {
  parcelaIR = valor * 0.275;
  console.log(
    `O desconto do seu IR caiu no cálulo da alíquota de 27,5%` /
      n`O valor da parcela a ser descontada pelo seu IR é R$ ${parcelaIR.toFixed(
        2
      )}`
  );
}
