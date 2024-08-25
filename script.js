const textArea = document.querySelector(".text-area");
const mensajes = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".copiar")
const textoEncriptadoDiv = document.querySelector(".texto-encriptado")
const dibujo = document.querySelector(".dibujo")
const resultadosMensajesDiv = document.querySelector(".resultado-mensajes")
let textoEncriptadoResultado = ''

function btnEncriptar() {
    if (textArea.value.trim() === '') {
        alert('No se encontró un texto')
        return
    }
    const textoEncriptado = encriptar(textArea.value)
    textoEncriptadoDiv.innerHTML = textoEncriptado
    textoEncriptadoResultado = textoEncriptado
    dibujo.style.visibility = 'hidden'
    resultadosMensajesDiv.style.visibility = 'hidden'
    btnCopiar.style.visibility = 'visible'
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    if (textArea.value.trim() === '') {
        alert('No se encontró un texto')
        return
    }
    const textoDesencriptado = desencriptar(textArea.value)
    textoEncriptadoDiv.innerHTML = textoDesencriptado
    textoEncriptadoResultado = textoDesencriptado
    dibujo.style.visibility = 'hidden'
    resultadosMensajesDiv.style.visibility = 'hidden'
    btnCopiar.style.visibility = 'visible'
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringDesencriptada;
}

async function copiarTexto()  {
    try {
        await navigator.clipboard.writeText(textoEncriptadoResultado);
      } catch (err) {
        console.error('Error al copiar: ', err);
      }
}


//function copiarTexto(stringEncriptada){
//     var content = document.getElementById('areaEncrypt');
//content.select();
// document.getElementById("txtEncryptDecrypt").value = "";
// document.querySelector(".copiar").addEventListener("click", copiarTexto)



