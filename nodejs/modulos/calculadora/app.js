const funcoesMatematicas = require('./funcoes_matematicas');
const calculadora_idade = require('./calculadora_idade');

console.log("Soma: " + funcoes_matematicas.somar(5, 5, 5));
console.log("Subtração: " + funcoes_matematicas.subtrair(5, 3));
console.log("Multiplicação: " + funcoes_matematicas.multiplicar(5, 3));
console.log("Divisão: " + funcoes_matematicas.dividir(5, 0));

console.log(calculadora_idade.idade("João", 2000, 2050));