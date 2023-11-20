var readline = require('readline-sync');
var input = readline.question('Indtroduce una operación aritmética: ');

var resultado = eval(input);

console.log(resultado);