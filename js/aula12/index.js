//               012345678
let umaString = "São Paulo"

console.log(umaString.charAt(1)); // Retorna o elemento da determinada posição

console.log(umaString.concat(" ", "tricampeão", " ", "mundial")); // Fará a junção dos elementos. Opcão 1
console.log(umaString + "é o maior do Brasil"); // Opção 2
console.log(`${umaString} campeão de tudo`); // Opção 3

console.log(umaString.indexOf("u")); // Mostra o index de um determinado elemento
console.log(umaString.indexOf("l", 4)); // Mostra a partir de um determinado ponto de inicio

console.log(umaString.lastIndexOf("a", 8)); // Mostra o index de um determinado elemento de trás pra frente

console.log(umaString.match(/[a-z]/g)); // Expressão Regular - essa em específico mostra letras minusculas no elemento

console.log(umaString.replace("São", "S")); // Fará a substituição dos elementos