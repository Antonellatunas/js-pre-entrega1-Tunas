//Juego
//presentación
alert("¡Bienvenido al juego de adivina el número! tienes 3 oportunidades para lograr adivinar el número");
//nombre del usuario
let nombreUsuario = prompt("¿Cuál es tu nombre?");
//Variables
//Genera un número aleatorio
let numeroAleatorio = Math.round(Math.random()*10+1);
//el número del usuario para la función
let numeroUsuario;
//oportunidades en el juego
let oportunidad = 0;
//Funciones
//función elegir número
const pedirNumero =() =>{
    numeroUsuario= parseInt(prompt("Elige un número del 1 al 10"));
    oportunidad++;
    if(3 - oportunidad > 0 && numeroUsuario!== numeroAleatorio){
        alert (NombreUsuario + ", Te quedan"+ (3 - oportunidad) + "oportunidad");
    }
};
//función para comprobar el número elegido
const comprobarNumero = (numeroElegido) =>{
    if (numeroElegido > numeroAleatorio) {
        console.log ("El número es menor");
    } else if (numeroElegido < numeroAleatorio){
        console.log ("El número es mayor");
    } else{
        console.log("Felicidades " + nombreUsuario +" ganaste en " + oportunidad + " oportunidades");
    }
};
//función perdedor
const comprobarOportunidad =() =>{
    if( oportunidad > 3){
        console.log ("Lo siento " + nombreUsuario +"ya no te quedan oportunidades, el número era " + numeroAleatorio);
    }
};
//bucle
while (numeroUsuario !== numeroAleatorio && oportunidad <3){
    pedirNumero();
    comprobarNumero(numeroUsuario);
    comprobarOportunidad();
};