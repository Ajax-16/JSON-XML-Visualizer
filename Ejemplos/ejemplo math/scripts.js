let num1 = prompt('Indica el primer numero');

let num2 = prompt('Indica el segundo numero');

let p = document.getElementById('parrafo');

let listaNum = [];

let numMax = Math.max(num1, num2);

let numMin = Math.min(num1, num2);

for(let i = 0; i< 50; i++){
    listaNum.push(Math.random() * (numMax - numMin+1)+numMin);
}

listaNum.forEach(num=>{
    console.log(Math.floor(num))
})