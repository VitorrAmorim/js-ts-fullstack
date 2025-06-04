// EXERCÍCIO

/*
Vitor Gabriel de Amorim tem 18 anos, pesa 62 kg
tem 1.72 de altura e seu IMC é de ???
Vitor Amorim nasceu em 2006
*/

const nome = "Vitor Gabriel";
const sobrenome = "Amorim";
const idade = 18;
const peso = 62;
const altura = 1.72;
let imc; // Peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

// Template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
