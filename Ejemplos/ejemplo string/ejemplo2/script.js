function calculateLength(){
    let cadena = document.getElementById('cadena').value;
    let result = document.getElementById('result')

    let cantidad = 0;

    for (let i = 0; i<cadena.length; i++){
        if(cadena.codePointAt(i) > 65535){
            i++;
        }
        cantidad++;
    }

    result.innerHTML = `La longitud de la cadena es ${cantidad}`;

}