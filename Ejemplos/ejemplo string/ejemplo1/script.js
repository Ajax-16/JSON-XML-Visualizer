function calculate(){
    let num = document.getElementById('number').value;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKET";

    let result = document.getElementById('result');

    let calculo = parseInt(num%23);

    let letra = letras.substring(calculo, calculo+1);

    result.innerHTML = "Su DNI completo es: " + num.concat(letra);

}