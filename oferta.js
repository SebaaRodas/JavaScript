$.get("./oferta.json", function(ofer) {
    console.log(ofer)
    ofer.forEach((of)=>{
        $('#ofertas').append(`
                <h2>${of.nombre}</h2>
                <img src="${of.imagen}" class="img-fluid"></img>
        `)
        
    })
})