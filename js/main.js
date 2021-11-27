//Federico Sabato - Desafio 3
//Comienzo de Scripts

let ok = 1;

while(ok){

let number= prompt("Introduzca un numero por favor...\n ¡Tendrá tantas alertas como el número ingresado!");

    if(parseInt(number)){
        for (let i = 1; i <= number; i++) { //Ciclo for de i iteraciones dependiendo de number
            alert("Alerta n°" + i + "!");   //Mostramos la alerta i veces
        }
        ok = 0; //Cerramos el programa cuando terminan las alertas
    }
    else{
        alert("No ha ingresado un número!");
        ok = 1; //Si no ingreso un número volvemos a pedir un número
    }
}


