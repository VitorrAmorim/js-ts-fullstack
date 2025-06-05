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

let contador = 1;
contador++; // 2
contador++; // 3
++contador; // 4
++contador; // 5
console.log(contador);