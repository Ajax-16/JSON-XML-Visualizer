function calcule(){
    let fechaInput = document.getElementById("numDias").value;
    
    let fechaHoy = new Date();

    let numDiasMas = 0;

    for(let i=0; i<fechaInput; i++){
        if(fechaHoy.getDay()==5){
            numDiasMas+=2;
            fechaHoy.setDate(fechaHoy.getDate()+2);
        }
        fechaHoy.setDate(fechaHoy.getDate()+1);
        numDiasMas++;
    }

    let fechaFinal = new Date();

    fechaFinal.setDate(fechaFinal.getDate()+numDiasMas);

    let fechaP = document.getElementById("fechaResult");
    fechaP.innerHTML = fechaFinal.toLocaleDateString("es-ES", {year:"numeric", month:"long", day:"numeric", weekday:"long"});

}
