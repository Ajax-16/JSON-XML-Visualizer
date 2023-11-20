var readline = require('readline-sync');

var string = readline.question('Escribe algo para pasarlo a numero: ');

var number = parseInt(string);

console.log(number);