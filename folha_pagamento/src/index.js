// index.js

const readline = require("readline");
const PdfDocument = require("pdfkit");
const fs = require("fs");

const input = readline.createInterface(process.stdin, process.stdout);

const calculaSalarioLiquido = require("./calculo_salario_liquido");
const calculaIR = require("./calculo_imposto_renda");
const calculaINSS = require("./calculo_inss");

input.question("Primeiro nome do funcionário: ", (name) => {
  const doc = new PdfDocument();
  const nome = name;
  input.question("Nome Completo:", (fullName) => {
    const nomeCompleto = fullName;
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

          doc.pipe(fs.createWriteStream(`Pagamento_${nome}.pdf`));
          doc.fontSize(20).text("Folha de pagamento", { align: "center" });

          doc.text(" ");
          doc.text(
            `Essa folha de pagamento se deve ao mes de ${mes} do funcionário ${nomeCompleto}, que possui o CPF de Nº ${CPF}`
          );
          doc.text(" ");
          doc.text(
            "------------------------------------------------------------------"
          );
          doc.text(" ");
          doc.text(`Salário Bruto: R$ ${salarioBruto}`);
          doc.text(`Desconto de Imposto de renda: R$ ${IR}`);
          doc.text(`Dsconto de INSS: R$ ${INSS}`);
          doc.text(`Salário Líquido: R$ ${salarioLiquido}`);

          doc.end();
          // console.log(
          //     "--- Folha de Pagamento ---\n" +
          //     `Nome: ${nome}\n` +
          //     `CPF: ${CPF}\n` +
          //     `Mês do Pagamento: ${mes}\n` +
          //     `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
          //     `INSS: R$ ${INSS}\n` +
          //     `Imposto de Renda: R$ ${IR}\n` +
          //     `Salário Líquido: R$ ${salarioLiquido}`
          //     );
        });
      });
    });
  });
});
