/*
OPERADORES ARITMÉTICOS
+ Adição / Concatenação (- / *)
** Potenciação
% Resto da Divisão
*/

const num1 = 5;
const num2 = 10;
const num3 = 15;

console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtração
console.log(num1 * num2); // Multiplicação
console.log(num1 ** num2); // Potenciação
console.log(num1 % num2); // Resto da divisão
console.log(num1 + num2 * num3);
console.log((num2 - num3) * num1);

/*
ORDERM DE PRECENDÊNCIA
1° - ()
2° - **
3° - * / %
4° - + / -
*/

/*
INCREMENTO = ++
DECREMENTO = --
*/

let incrementar = 1;
// Executa o comando e depois incrementar
incrementar++; // 2
incrementar++; // 3
// Incrementa e depois executa o comando
++incrementar; // 4
++incrementar; // 5
console.log(incrementar);

let decrementar = 10;
// Executa o comando e depois decrementa
decrementar--; // 9
decrementar--; // 8
// Decrementa e depois executa o comando
--decrementar; // 7
--decrementar; // 6
console.log(decrementar);

/*
OPERADORES DE ATRIBUIÇÃO
*/
let contador = 2;
contador += 2;
contador -= 2;
contador *= 2;
contador **= 2;
console.log(contador);

const num4 = 30;
const num5 = "Charizard";
console.log(num4 * num5); // Retornará um NaN (Not a Number)

const numero = 2;
const letra = "5";
console.log(numero + letra); // Fará a concatenação / conta

const numInt = parseInt("5"); // Transformará a String para Int (inteiro)
const numFloat = parseFloat("5.5"); // Transformará a String para Float (decimais)
console.log(numInt + numFloat);
console.log(typeof numInt);
console.log(typeof numFloat);
