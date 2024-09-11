"use strict";
 const poema=[
    "tu voz es el faro que guia mis dias",
    "el brillo de tus ojos son estrellas en el cielo",
    "cada risa tuya un rayo de sol que acaricia mi mejilla",
    "y cada sueño compartido un sincero anhelo",
    "te amo papayita",
    "eres muy importante para mi",
    "y espero que tengamos",
    "un final feliz :)",
    "cosas que amo de ti:",
    "tu pelo rizado o liso <33",
    "tus labios",
    "tus expresiones",
    "tu mirada",
    "tu sonrisa",
    "TU PIEL MORENA <333",
    "Toda tu personalidad es la definición de las cosas que amo",
    "tu voz",
    "tu resiliencia",
    "tu valentia",
    "tu empatia",
    "tus curvas <33",
    "en resumen y sin aburrimiento",
    " me encanta todo de ti mi morena hermosaaa <3",

 ];
 let indice= 0;

 document.getElementById ("boton").addEventListener("click",() =>{
    document.getElementById("poema").innerHTML =poema[indice];
    indice++;
    if (indice>= poema.length){
        indice= 0;
    }
 });