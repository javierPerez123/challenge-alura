// ***nombramos las variables***

let boleanoParaCopy;
const textoAcopiarDes = document.querySelector("imprimirDesencriptado");
const arrayVocales = ["a", "e", "i", "o", "u"];
const arrayVocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
const arrayNcaracteres = [1, 4, 3, 3, 3];

// ***funcion para la encriptacion***
function encriptacion() {

    // ***nombramos las variables para la encriptacion***
    let entradaDeTexto = document.getElementById("entrada").value;
    let palabraEncriptada;
    let caracterer;
    let minuscula = 0;
    let start = 0;
    let end = 1;
    let arrayPalabraEncriptada = [];

    // ***testeo de minusculas en el texto***
    for (ii = 0; ii < entradaDeTexto.length; ii++) {
        if (/[a-z]/.test(entradaDeTexto[ii]) || entradaDeTexto[ii] == " ") {
            minuscula++;
        }
    }

    // ***condicional para minusculas***
    if (minuscula == entradaDeTexto.length) {

        // ***formacion de encriptacion***
        for (iii = 1; iii <= entradaDeTexto.length; iii++) {
            caracterer = entradaDeTexto.slice(start, end);

            // ***conversion de caracteres***
            for (i = 0; i <= arrayVocales.length; i++) {
                if (caracterer == arrayVocales[i]) {
                    caracterer = arrayVocalesEncriptadas[i];
                    break;
                }
            }
            start++;
            end++;
            arrayPalabraEncriptada.push(caracterer);
        }

        // ***concatenador de la palabra encriptada***
        palabraEncriptada = arrayPalabraEncriptada.join("")
        boleanoParaCopy = true;
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("noImprime").style.display = "none";
        document.getElementById("textoDesencriptado").style.display = "none"
        document.getElementById("textoEncriptado").style.display = "block"
        document.getElementById("imprimirEncriptado").innerHTML = palabraEncriptada;
        document.getElementById("botonOculto").style.display = "block";
    }
    else {
        alert("El texto introducido contiene Mayusculas o caracteres especiales, VUELVA A INTENTAR.");
    }


}


// ***funcion para la desencriptacion***
function desencriptacion() {

    // ***nombramos las variables para la desencriptacion***
    let entradaDeTextoEncriptado = document.getElementById("entrada").value;
    let palabraDesencriptada = "";
    let caracter;
    let minuscula = 0;
    let start = 0;
    let end = 1;
    let arrayPalabraDesencriptada = [];

    // ***testeo de minusculas en el texto***
    for (ii = 0; ii < entradaDeTextoEncriptado.length; ii++) {
        if (/[a-z]/.test(entradaDeTextoEncriptado[ii]) || entradaDeTextoEncriptado[ii] == " ") {
            minuscula++;
        }
    }

    // ***condicional para minusculas***
    if (minuscula == entradaDeTextoEncriptado.length) {

        // ***formacion desencriptada***
        for (iii = 1; iii < entradaDeTextoEncriptado.length; iii++) {
            caracter = entradaDeTextoEncriptado.slice(start, end);

            // ***evasor de caracteres***
            for (i = 0; i < arrayVocales.length; i++) {
                if (caracter == arrayVocales[i]) {
                    start = start + arrayNcaracteres[i];
                    end = start + 1;
                    break;
                }
            }

            // ***contador de caracteres incluyendo loos evadidos***
            if (entradaDeTextoEncriptado.length == end) {
                iii = entradaDeTextoEncriptado.length;
            }

            start++;
            end++;
            arrayPalabraDesencriptada.push(caracter);

        }

        // ***concatenador de la palabra desencriptada***
        boleanoParaCopy = false;
        palabraDesencriptada = arrayPalabraDesencriptada.join("");
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("noImprime").style.display = "none";
        document.getElementById("textoEncriptado").style.display = "none";
        document.getElementById("textoDesencriptado").style.display = "block";
        document.getElementById('imprimirDesencriptado').innerHTML = palabraDesencriptada;
        document.getElementById("botonOculto").style.display = "block";
    }

    else {
        alert("El texto introducido contiene Mayusculas o caracteres especiales, VUELVA A INTENTAR.");
    }

}

// ***funcion para copiar texto de salida***
function copiar() {

    // ***creacion de input para texto encriptado***
    let extraeTextoE = document.getElementById("imprimirEncriptado").innerText;
    const inputOculto1 = document.createElement("input");
    inputOculto1.setAttribute("value", extraeTextoE);
    document.body.appendChild(inputOculto1);

    // ***creacion de input para texto desencriptado***
    let extraeTextoDes = document.getElementById("imprimirDesencriptado").innerText;
    const inputOculto2 = document.createElement("input");
    inputOculto2.setAttribute("value", extraeTextoDes);
    document.body.appendChild(inputOculto2);

    // ***condicional para selecionar input***
    if (boleanoParaCopy == true) {
        inputOculto1.focus();
    }
    else {
        inputOculto2.focus();
    }

    // ***seleccion y copiado del texto***
    document.execCommand('selectAll');
    document.execCommand('copy');

    // ***eliminacion de los inputs creados***
    document.body.removeChild(inputOculto1);
    document.body.removeChild(inputOculto2);

    // ***seleccion de la entrada de texto***
    document.getElementById("entrada").focus();
    document.execCommand('selectAll');

} 