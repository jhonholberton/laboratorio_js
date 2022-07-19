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

let puntaje = 0;
let respuestaCorrecta;

async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/banco.json");
    const json = await response.json();
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


 let datos = await obtenerDatos()

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

