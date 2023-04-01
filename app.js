window.addEventListener('load', function() {

   /* Capturo lo que voy a usar  */

   const boton = document.querySelector('.agregarTarea');

   const seccionToDo = document.querySelector('.seccionToDo');

   const tarjeta = document.querySelector('.tarjeta');

   const input = document.getElementById('input');

   /* FUNCION 1 - GUARDAR VALORES INGRESADOS */

   input.addEventListener("keypress",guardarComentario);

   function guardarComentario(event){

    let textoTarjeta = "";

    if(event.key === "Enter"){
        
        textoTarjeta = input.value;
        console.log(textoTarjeta);

    }

   }

})
