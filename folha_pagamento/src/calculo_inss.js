// Função para pegar o salário, substituir para o prompt no terminal

const salario = 1234.45

//até R$ 1.412,00	7,5 %	–
//de R$ 1.412,01 até R$ 2.666,68	9,0 %	21,18
//de R$ 2.666,69 até R$ 4.000,03	12,0 %	101,18
//de R$ 4.000,04 até R$ 7.786,02	14,0 %	181,18


// Calculo para saber o INSS: R$ 1.500 x (valor da alíquota em porcentagem) – 21,18 = R$ 113,82.

if(salario <= 1412){
    let salarioAtualizado = 1500 * 0.075
    console.log(salarioAtualizado)
} else if (salario >= 1412.01 && salario <= 2666.68){
    let salarioAtualizado =  1500 * 0.09 - 21.18
    console.log(salarioAtualizado)
} else if (salario >= 2666.69 && salario <= 4000.03){
    let salarioAtualizado =  1500 * 0.12  - 101.18
    console.log(salarioAtualizado)
} else if (salario >= 4000.04 && salario <= 7786.02){
    let salarioAtualizado = salario * 1500 - 181.18
    console.log(salarioAtualizado)
} 