let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

// function generarNumeroSecreto() {
//     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     //Si ya sorteamos todos los números
//     if (listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento('p','Ya se sortearon todos los números posibles');
//     } else {
//         //Si el numero generado está incluido en la lista 
//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generarNumeroSecreto();
//         } else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// }

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


/**
 * let numerosSorteados = [];
 * numerosSorteados.push(5)
 * numerosSorteados.push(8)
 * -> numerosSorteados = [5,8]
 * console.log(numerosSorteados.length);
 * console.log(numerosSorteados[numerosSorteados.length-1]);
 *  */

/**
 * 
 * console.log(frutas[0]); // Salida: "Manzana"
 * console.log(frutas[2]); // Salida: "Naranja"
 * 
 * Añadiendo nuevos elementos
 * frutas.push("Fresa");
 * console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
 * 
 * Eliminando el ultimo elemento
 * frutas.pop();
 * console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
 */