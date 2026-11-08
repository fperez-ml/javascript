// Fichero donde se almacena el código JavaScript usado por la web principal 

function mostrarHora() {

    let ahora = new Date();

    let hora =
        ahora.getHours() + ":" +
        ahora.getMinutes() + ":" +
        ahora.getSeconds();

    document.getElementById("reloj").innerHTML = hora;

    setTimeout(mostrarHora, 1000);
}