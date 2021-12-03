// INDEX
let insertar = document.getElementById('contenedor');
productos.forEach((prod)=>{
    const contenedor = document.createElement("div")
    contenedor.className ="card"
    contenedor.style = "width: 18rem"
    contenedor.innerHTML = `
                <img src="${prod.imagen}" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">Tamaño: ${prod.tamaño}</p>
                    <p class="card-text">Precio:$ ${prod.precio}</p>
                    <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-primary moverI">Agregar al carrito</button>
                </div>
    `
    insertar.appendChild(contenedor);
})

let carrito = []
function agregarAlCarrito(prodId){
    let producto = productos.find((prod)=> prod.id === prodId);
    carrito.push(producto);
    calcularTotal();
    mostrarCompra();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
let cantidadComprada = document.getElementById('cantidad')
let totalAPagar = document.getElementById('total');

function calcularTotal(){
    let total = 0;
    for(const producto of carrito){
        total += producto.precio;
        console.log(total);
    }
    totalAPagar.innerText = total;
    cantidadComprada.innerText = carrito.length;
}

let tabla = document.getElementById('table')
let tableBody = document.getElementById('tabla-contenedor')
const mostrarCompra = () => {
    tableBody.innerHTML = ""
    carrito.forEach((producto)=> {
        const tr = document.createElement('tr')
        tr.className = "table-primary"
        tr.innerHTML = `
                    <th scope="row">${producto.id}</th>
                    <td>${producto.nombre}</td>
                    <td>${producto.tamaño}</td>
                    <td>${producto.precio}</td>
                    `
        tableBody.appendChild(tr)
    })
}

let botonVaciar = document.getElementById('vaciar');
botonVaciar.setAttribute("id", "vaciar");
botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    carrito = [];
    cantidadComprada.innerText = 0;
    totalAPagar.innerText = 0;
    
    localStorage.removeItem("carrito");
}

// DESAFIO JQUERY
$("#vaciar").click(()=>{
    $("#tabla-contenedor").remove();
})

// DESAFIO ANIMACIONES
$('h4').fadeOut(2000, ()=>{
    $('h4').fadeIn(2000)
})



// FIN INDEX

// PEDIDO
$('#formulario').submit(function (e) {
    e.preventDefault();
    const nombre = $('#input-nombre').val().trim();
    if (nombre = ""){
        alert("Debe completar el campo nombre")
    } else {
        alert("Tu pedido está en camino. Muchas gracias" + nombre);
    }
})


// FIN PEDIDO
