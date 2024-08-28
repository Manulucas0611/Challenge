const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const button = document.querySelector('button.boton-copiar');

button.addEventListener('click',function(){
    mensaje.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

})


function botonencriptar(){
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}


//FUNCION DE ENCRIPTAR
function encriptar(stringencriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringencriptado = stringencriptado.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringencriptado.includes(matriz[i][0])){
            stringencriptado = stringencriptado.replaceAll(matriz[i][0], matriz[i][1])

        }

    }
    return stringencriptado
}

    function botondesencriptar(){
        const textoencriptado = desencriptar(textarea.value)
        mensaje.value = textoencriptado
        textarea.value = "";
        mensaje.style.backgroundImage = "none"
    }

    //FUNCION DE DESENCRIPTAR
    function desencriptar(stringdesencriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringdesencriptado = stringdesencriptado.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringdesencriptado.includes(matriz[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matriz[i][1], matriz[i][0])

        }

    }
    return stringdesencriptado
}






/*
    function copiar(stringcopiar){
        let texto = document.getElementById('stringencriptado').innerHTML;
        const copiarContenido = async ()
    }
    /* function copiar(texto){
    let texto = document.getElementById('stringencriptado').innerHTML;
    const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } 
    
    catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
} */
//