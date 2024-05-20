// Função para pegar o salário, substituir para o prompt no terminal

const salario = 1234.45;

//até R$ 1.412,00	7,5 %	–
//de R$ 1.412,01 até R$ 2.666,68	9,0 %	21,18
//de R$ 2.666,69 até R$ 4.000,03	12,0 %	101,18
//de R$ 4.000,04 até R$ 7.786,02	14,0 %	181,18

// Calculo para saber o INSS: R$ 1.500 x (valor da alíquota em porcentagem) – 21,18 = R$ 113,82.

function calculaINSS(salarioBruto) {
  let descontoInss = 0;
  if (salarioBruto <= 1412) {
    descontoInss = salarioBruto * 0.075;
  } else if (salarioBruto >= 1412.01 && salarioBruto <= 2666.68) {
    descontoInss = salarioBruto * 0.09 - 21.18;
  } else if (salarioBruto >= 2666.69 && salarioBruto <= 4000.03) {
    descontoInss = salarioBruto * 0.12 - 101.18;
  } else if (salarioBruto >= 4000.04 && salarioBruto <= 7786.02) {
    descontoInss = salarioBruto * 0.14 - 181.18;
  }
  return descontoInss.toFixed(2);
}

module.exports = calculaINSS;
