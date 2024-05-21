const calculaIR = require("./calculo_imposto_renda");
const calculaINSS = require("./calculo_inss");

function calculaSalarioLiquido(salarioBruto) {
  const IR = parseFloat(calculaIR(salarioBruto));
  const INSS = parseFloat(calculaINSS(salarioBruto));
  return (salarioBruto - IR - INSS).toFixed(2);
}

module.exports = calculaSalarioLiquido;
