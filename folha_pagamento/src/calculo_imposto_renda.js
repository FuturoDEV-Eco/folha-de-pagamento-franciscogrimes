// Inserir o salário bruto

// Base de cálculo	Alíquota	Parcela a deduzir do IR
// De R$ 2.259,21 até R$ 2.826,65	7,5%	R$ 169,44
// De R$ 2.826,66 até R$ 3.751,05	15%	R$ 381,44
// De R$ 3.751,06 até R$ 4.664,68	22,5%	R$ 662,77
// Acima de R$ 4.664,69	27,5%	R$ 896,00

function calculaIR(salarioBruto) {
  let parcelaIR = 0;
  if (salarioBruto >= 2259.21 && salarioBruto <= 2826.55) {
    parcelaIR = salarioBruto * 0.075;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    parcelaIR = salarioBruto * 0.15;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    parcelaIR = salarioBruto * 0.225;
  } else if (salarioBruto >= 4664.69) {
    parcelaIR = salarioBruto * 0.275;
  }
  return parcelaIR.toFixed(2);
}

module.exports = calculaIR;
