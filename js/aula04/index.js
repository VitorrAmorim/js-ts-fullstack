// Váriaveis é algo que pode ser modificado/mudado

// Sempre se utiliza let para criar váriaveis
// Não se pode declarar duas váriaveis com o mesmo nome
let nome = "Vitor"; // String

console.log(nome, "nasceu em 2006");
console.log("O", nome, "tirou 10 na máteria de Banco de Dados");
console.log("Eu", nome, "sou um programador");

let name;  // A váriavel foi declarada mas não tem valor (undefine)
name = "Amorim"; // Inicializando a váriavel
console.log(name);
name = "Gabriel"; // Váriavel pode ir mudando de valor ao longo do código
console.log(name);

// Não podemos criar váriaveis com palavras reservadas
// Váriaveis precisam ter nomes significativos
let modeloCarro = "Astra";
console.log(modeloCarro);

// Não pode começar o nome de uma váriavel com um número
let nom3;
// Não podem conter espaços ou traços

// camelCase
let nomeCompletoCliente;

// Case-sensitive
let nomePokemon = "Blastoise";
let nomepokemon = "Mew";
console.log(nomePokemon, nomepokemon);

// Não podemos redeclarar váriaveis com let
let faculdade = "ADS";
faculdade = "DSM"; // O valor da váriavel foi alterado
console.log(faculdade);