function multiply(n1, n2){
    return n1*n2;
}

function calculate(operation, n1, n2){
    return operation(n1, n2);
}

console.log(calculate(multiply, 2, 2));

console.log(calculate((n1, n2)=>{
    return n1+n2
}, 
2, 4));