


function encriptar() {
    let input = document.querySelector("#textarea-encriptacion").value;

    let resultado = input.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("resultado-encriptacion").value = resultado;
}

function desencriptar() {
    let input = document.querySelector("#textarea-encriptacion").value;

    let resultado = input.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById("resultado-encriptacion").value = resultado;
}

function copiar() {
   let texto = document.getElementById("resultado-encriptacion").value;

   /* texto.select(); */

   navigator.clipboard.writeText(texto);

   alert("Copiado al portapapeles: " + texto);
}
