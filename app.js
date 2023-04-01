window.addEventListener('load', function() {

   // Capturo lo que voy a usar 
   const boton = document.querySelector('.agregarTarea');

   const seccionToDo = document.querySelector('.seccionToDo');

   const tarjeta = document.querySelector('.tarjeta');
   
   // FUNCION 1 - AGREGAR TAREAS
   boton.addEventListener('click',function(){
    let nuevaTarjeta = tarjeta.cloneNode(true);
    seccionToDo.appendChild(nuevaTarjeta);
    
    })

    //   FUNCION 2 - GUARDAR INFORMACION DE LA TARJETA
    function guardarTexto(){
        const input = document.getElementById("miInput");
        let texto= "";
        
        input.addEventListener("keydown",function(event){
            if(event.code===13){
                texto = input.value;
                console.log(texto);
            }
        })
    }
});
