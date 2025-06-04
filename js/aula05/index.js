// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

const nome = "Vitor"; // Não tem como declarar uma const sem inicialiar ela (valor)
console.log(nome);

const num1 = 30;
const num2 = 3;
const resultado = num1 * num2;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof num1); // Retorna qual é o tipo de dado
console.log(typeof (nome + num1)); // Transformará o number em string