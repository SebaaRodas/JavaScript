// validacion del formulario

$("#formulario").submit((e)=>{
    e.preventDefault();

   const nombre = $("#nombre").val()
   console.log( nombre)
    // si el campo nombre es un numero tira error, caso contrario confirma el pedido
    if (typeof nombre === 'number'){
        alert("Error. Ingrese correctamente su nombre por favor");
    }else{
        alert("Tu pedido está en camino. Muchas gracias");
    }
})



