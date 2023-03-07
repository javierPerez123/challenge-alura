/* nombramos las variables a usar */
let boleanoParaCopy;
const arrayVocales = ["a", "e", "i", "o", "u"];
const arrayVocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
const arrayNumberCaracteres = [1, 4, 3, 3, 3];
const btnEncriptar = document.querySelector("[data-btn-encriptar]");
const btnDesencriptar = document.querySelector("[data-btn-desencriptar]");
var minuscula;

function limitacion(entradaDeTexto) {
    minuscula = 0;

    // ***testeo de minusculas en el texto***
    for (ii = 0; ii < entradaDeTexto.length; ii++) {
        if (/[a-z]/.test(entradaDeTexto[ii]) || entradaDeTexto[ii] == " ") {
            minuscula++;
        }
    }
}

function llamandoBloques() {

    // ***llamado de blockes***
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("noImprime").style.display = "none";
    document.getElementById("botonOculto").style.display = "block";
}

// ***boton para encriptar***
btnEncriptar.addEventListener("click", function () {

    // ***nombramos las variables para la encriptacion***
    const input = document.querySelector("[data-text-entrada]");
    let entradaDeTexto = input.value
    let entradaDeTextoEncriptado;

    // ***formacion para minusculas***
    limitacion(entradaDeTexto)

    // ***condicional para minusculas***
    if (minuscula == entradaDeTexto.length) {
        // ***formacion encriptada***
        entradaDeTextoEncriptado = entradaDeTexto.split("")
        for (i = 0; i < arrayVocales.length; i++) {
            for (ii = 0; ii < entradaDeTextoEncriptado.length; ii++) {
                if (entradaDeTextoEncriptado[ii] == arrayVocales[i]) {
                    entradaDeTextoEncriptado.splice(entradaDeTextoEncriptado.indexOf(arrayVocales[i]), 1, arrayVocalesEncriptadas[i])
                }
            }
        }

        // ***llamado de blockes***
        boleanoParaCopy = true;
        llamandoBloques()
        document.getElementById("imprimirEncriptado").innerHTML = entradaDeTextoEncriptado.join("");
        document.getElementById("textoDesencriptado").style.display = "none"
        document.getElementById("textoEncriptado").style.display = "block"

    }
    else {
        alert("El texto introducido contiene Mayusculas o caracteres especiales, VUELVA A INTENTAR.");
    }

})

// ***boton para desencriptar***
btnDesencriptar.addEventListener("click", function () {

    // ***nombramos las variables para la desencriptacion***
    const input = document.querySelector("[data-text-entrada]");
    let entradaDeTexto = input.value
    let entradaDeTextoDesencriptado;

    // ***funcion para minusculas***
    limitacion(entradaDeTexto)

    // ***condicional para minusculas***
    if (minuscula == entradaDeTexto.length) {

        // ***formacion desencriptada***
        entradaDeTextoDesencriptado = entradaDeTexto.split("")
        for (i = 0; i < entradaDeTextoDesencriptado.length; i++) {
            let caracter = entradaDeTextoDesencriptado.slice(i, i + 1);
            for (ii = 0; ii < arrayVocales.length; ii++) {
                if (caracter == arrayVocales[ii]) {
                    entradaDeTextoDesencriptado.splice(i + 1, arrayNumberCaracteres[ii])
                    break;
                }

            }
        }

        // ***llamado de blockes***
        boleanoParaCopy = true;
        llamandoBloques()
        document.getElementById("imprimirEncriptado").innerHTML = entradaDeTextoDesencriptado.join("");
        document.getElementById("textoDesencriptado").style.display = "none"
        document.getElementById("textoEncriptado").style.display = "block"

    }
    else {
        alert("El texto introducido contiene Mayusculas o caracteres especiales, VUELVA A INTENTAR.");
    }

})

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