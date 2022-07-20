//const banco = await requier('banco')


const body = document.getElementById("container");
body.classList.add("container")

let divContitulo = document.createElement("div");
    let titulo = document.createElement("h1");
    titulo.textContent = "JUEGO DE PREGUNTAS";
    titulo.classList.add("titulo");
    divContitulo.append(titulo);

let divContenedor = document.createElement("div");
        let divEncabezado = document.createElement("div");
        divEncabezado.classList.add("encabezado");
        let divPregunta = document.createElement("div");
        divPregunta.classList.add("pregunta");
        divPregunta.id = "pregunta";
        divEncabezado.append(divPregunta);

        let divBoton1 = document.createElement("div");
        divBoton1.classList.add("btn");
        divBoton1.id = "boton1";

        let divBoton2 = document.createElement("div");
        divBoton2.classList.add("btn");
        divBoton2.id = "boton2";

        let divBoton3 = document.createElement("div");
        divBoton3.classList.add("btn");
        divBoton3.id = "boton3";

        let divBoton4 = document.createElement("div");
        divBoton4.classList.add("btn");
        divBoton4.id = "boton4";
        divContenedor.append(divEncabezado, divBoton1, divBoton2, divBoton3, divBoton4);

    body.append(divContitulo, divContenedor);

const preguntas = document.querySelector("#pregunta");
const respuesta1 = document.querySelector("#boton1");
const respuesta2 = document.querySelector("#boton2");
const respuesta3 = document.querySelector("#boton3");
const respuesta4 = document.querySelector("#boton4");
const banco = [
    {
        "nivel": "1",
        "pregunta": "¿Quien descubrio America?",
        "respuesta": "Cristobal Colon",
        "incorrecta": "maluma baby",
        "incorrecta1": "reina Isabel",
        "incorrecta2": "el loco del barrio"
    },

    {
        "nivel": "1",
        "pregunta": "¿Qué palabra se usa para referirse a los abdominales bien marcados?",
        "respuesta": "Lavadero",
        "incorrecta": "Lavanda",
        "incorrecta1": "Lavaloza",
        "incorrecta2": "Lava Plato"
    },

    {
        "nivel": "1",
        "pregunta": "¿Cuales son los colores primarios?",
        "respuesta": "Amarillo, azul y rojo",
        "incorrecta": "Amarillo, azul y verde",
        "incorrecta1": "Amarillo, azul y morado",
        "incorrecta2": "blanco, negro y transparente"
    },

    {
        "nivel": "1",
        "pregunta": "Cual de estos es un animal carnivoro",
        "respuesta": "Leon",
        "incorrecta": "Elefante",
        "incorrecta1": "Canario",
        "incorrecta2": "Mariposo"
    },

    {
        "nivel": "1",
        "pregunta": "Cual de estos es un animal vegetariano",
        "respuesta": "Jirafa",
        "incorrecta": "Tiburon",
        "incorrecta1": "Lobo",
        "incorrecta2": "Tigre"
    },

    {
        "nivel": "2",
        "pregunta": "Al inicio de La Sirenita, ¿qué evento se pierde Ariel?",
        "respuesta": "Un concierto.",
        "incorrecta": "Un cumpleaños.",
        "incorrecta1": "Una coronación.",
        "incorrecta2": "Un babyShower"
    },

    {
        "nivel": "2",
        "pregunta": "En “Robin Hood”, ¿qué hace el Príncipe John cuando se enoja?",
        "respuesta": "Se lame el dedo.",
        "incorrecta": "Se come las uñas.",
        "incorrecta1": "Hurguetea su nariz.",
        "incorrecta2": "Se pone a llorar"
    },

    {
        "nivel": "2",
        "pregunta": "¿Cuál es el primer animal que aparece en escena en “El Rey León”?",
        "respuesta": "Un rinoceronte",
        "incorrecta": "Una jirafa",
        "incorrecta1": "Un antilope",
        "incorrecta2": "Un Tigre"
    },

    {
        "nivel": "2",
        "pregunta": "¿Cuál es el apellido de la madrastra y hermanastras de Cenicienta?",
        "respuesta": "Tremaine",
        "incorrecta": "Trump",
        "incorrecta1": "Truman",
        "incorrecta2": "Trumanis"
    },

    {
        "nivel": "2",
        "pregunta": "¿Cómo se llama el cazador al que mandan a matar a Blanca Nieves?",
        "respuesta": "Humbert",
        "incorrecta": "Edward",
        "incorrecta1": "Robert",
        "incorrecta2": "Albert"
    },

    {
        "nivel": "3",
        "pregunta": "¿Cuál es la representación gráfica del número nueve mil treinta y seis.?",
        "respuesta": "9036",
        "incorrecta": " 90036",
        "incorrecta1": " 936",
        "incorrecta2": " 900036"
    },

    {
        "nivel": "3",
        "pregunta": "Escribe el número ordinal trigésimo quinto en cifras",
        "respuesta": "35",
        "incorrecta": "135",
        "incorrecta1": "25",
        "incorrecta2": "353"
    },

    {
        "nivel": "3",
        "pregunta": "¿Qué cantidad expresa el número romano V?",
        "respuesta": "cinco",
        "incorrecta": "diez",
        "incorrecta1": "uno",
        "incorrecta2": "cincuenta"
    },

    {
        "nivel": "3",
        "pregunta": "Para calcular cuánto es un tercio de 3996, ¿qué tienes que hacer?",
        "respuesta": "Dividir entre tres",
        "incorrecta": "Multiplicar por tres",
        "incorrecta1": "Restar tres",
        "incorrecta2": "Sumas tres veces el mismo numero"
    },

    {
        "nivel": "3",
        "pregunta": "¿Cómo se llama el polígono de siete lados?",
        "respuesta": "Heptágono",
        "incorrecta": "Hexágono",
        "incorrecta1": "Septágono",
        "incorrecta2": "Triangulo"
    },

    {
        "nivel": "4",
        "pregunta": "¿Cuantos oceanos hay en la tierra?",
        "respuesta": "5",
        "incorrecta": "6",
        "incorrecta1": "4",
        "incorrecta2": "3"
    },

    {
        "nivel": "4",
        "pregunta": "¿Qué país tiene más habitantes?",
        "respuesta": "China",
        "incorrecta": "Rusia",
        "incorrecta1": "India",
        "incorrecta2": "Egipto"
    },

    {
        "nivel": "4",
        "pregunta": "¿Cuál es el río más largo del mundo?",
        "respuesta": "Nilo",
        "incorrecta": "Amazonas",
        "incorrecta1": "Magdalena",
        "incorrecta2": "Patia"
    },

    {
        "nivel": "4",
        "pregunta": "¿Cuántos estados forman parte de Estados Unidos?",
        "respuesta": "50",
        "incorrecta": "54",
        "incorrecta1": "49",
        "incorrecta2": "51"
    },

    {
        "nivel": "4",
        "pregunta": "¿Cuántos países forman parte de la Unión Europea?",
        "respuesta": "27",
        "incorrecta": "28",
        "incorrecta1": "29",
        "incorrecta2": "31"
    },

    {
        "nivel": "5",
        "pregunta": "¿En qué unidad se mide la presión?",
        "respuesta": "Pascales",
        "incorrecta": "Newton",
        "incorrecta1": "m/s",
        "incorrecta2": "Kg"
    },

    {
        "nivel": "5",
        "pregunta": "Una masa de kilogramo, ¿a qué peso equivale en newton?",
        "respuesta": "9.8N",
        "incorrecta": "6.3N",
        "incorrecta1": "7.2N",
        "incorrecta2": "5.8N"
    },

    {
        "nivel": "5",
        "pregunta": "¿Cuál de estas velocidades corresponde a los movimientos circulares?",
        "respuesta": "Velocidad angular",
        "incorrecta": "Velocidad de trayectoria",
        "incorrecta1": "Velocidad media",
        "incorrecta2": "Velocidad lineal"
    },

    {
        "nivel": "5",
        "pregunta": "¿Qué es el módulo de un vector?",
        "respuesta": "El valor de la magnitud que representa.",
        "incorrecta": "Su punto de inicio",
        "incorrecta1": "El punto medio del vector",
        "incorrecta2": "La dirección en la que está orientado"
    },

    {
        "nivel": "5",
        "pregunta": "¿Cuál es el valor de la gravedad de la Tierra?",
        "respuesta": "9.8 m/s2",
        "incorrecta": "10 m/s",
        "incorrecta1": "9.8 m/s",
        "incorrecta2": "9.8 m/s2"
    }
];

let puntaje = 0;
let respuestaCorrecta;

 function obtenerDatos(){
    const json = banco;
    let all =[];
    for (let i = 0; i<=4;i++){
        const nPreguntas = Math.round(Math.random()*24);
        const listRespuestas = [json[nPreguntas]["respuesta"], json[nPreguntas]["incorrecta"], json[nPreguntas]["incorrecta1"], json[nPreguntas]["incorrecta2"]]

        const listdesordenada = listRespuestas.sort(() => Math.random() - 0.5);
        respuestaCorrecta = json[nPreguntas]["respuesta"]
        const pregunta = json[nPreguntas]["pregunta"]
        all.push([pregunta, respuestaCorrecta, listdesordenada])

    }
     return [...all];
}

let rondas = 0;

function siguienteRonda(boton) {
    if (rondas == 5 ){
        window.alert("Felicidades ganaste eres un genio!!! sigue jugando y aprendiendo, tu puntaje es " + puntaje);
        window.location.reload();
    }
    console.log(boton[rondas][1])
    preguntas.innerHTML = boton[rondas][0]
    respuesta1.innerHTML = boton[rondas][2][0]
    respuesta2.innerHTML = boton[rondas][2][1]
    respuesta4.innerHTML = boton[rondas][2][2]
    respuesta3.innerHTML = boton[rondas][2][3]
    rondas++;
 }


 
 let datos = obtenerDatos()

siguienteRonda(datos)

respuesta1.onclick = () =>{
    console.log(respuesta1.innerText);
    console.log(rondas)
    if (respuesta1.innerText == datos[rondas-1][1]){
        console.log(puntaje);
        puntaje = puntaje + 100;
        return siguienteRonda(datos);
    }
    else{
        
        window.alert("Perdiste, sigue intentandolo! tu puntaje es: " + puntaje);
        return window.location.reload();
    }
    
}
respuesta2.onclick = () =>{
    console.log(respuesta2.innerText);
    console.log(rondas)
    if (respuesta2.innerText == datos[rondas-1][1]){
        console.log(puntaje);
        puntaje = puntaje + 100;
        return siguienteRonda(datos);
    }
    else{
        window.location.reload();
        return window.alert("Perdiste, sigue intentandolo! tu puntaje es: " + puntaje);
    }
    
}
respuesta3.onclick = () =>{
    console.log(respuesta3.innerText);
    console.log(rondas)
    if (respuesta3.innerText == datos[rondas-1][1]){
        console.log(puntaje);
        puntaje = puntaje + 100;
        return siguienteRonda(datos);
    }
    else{
        window.location.reload();
        return window.alert("Perdiste, sigue intentandolo! tu puntaje es: " + puntaje);
    }
    
}
respuesta4.onclick = () =>{
    console.log(respuesta4.innerText);
    console.log(rondas-1)
    if (respuesta4.innerText == datos[rondas-1][1]){
        console.log(puntaje);
        puntaje = puntaje + 100;
        return siguienteRonda(datos);
    }
    else{
        window.location.reload();
        return window.alert("Perdiste, sigue intentandolo! tu puntaje es: " + puntaje);
    }
    
}

