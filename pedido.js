// validacion del formulario
$("#formulario").submit((e)=>{
    e.preventDefault();

   const nombre = $("input-nombre").val()

    if (isNaN(nombre)){
        alert("Error. Ingrese correctamente su nombre por favor");
    }else{
        alert("Tu pedido está en camino. Muchas gracias");
    }
})