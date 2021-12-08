// INDEX

let insertar = document.getElementById('contenedor');
// por cada producto que hay en mi archivo "productos.js", genero una tarjeta y lo inserto en el html
productos.forEach((prod)=>{
    const contenedor = document.createElement("div")
    contenedor.className ="card"
    // contenedor.className = "col-xs-12 col-lg-3 col-md-3"
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

// los productos los voy a ir agregando a un arreglo 
let carrito = []
// lo que hace es buscar el id del boton agregar al carrito con el id de los productos.js
function agregarAlCarrito(prodId){
    let producto = productos.find((prod)=> prod.id === prodId); 
    carrito.push(producto);
    calcularTotal();
    mostrarCompra();
    Swal.fire(
        'Nuevo producto agregado',
        prodId.nombre,
        'success'
    );
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// en estas variables se van a ir modificando a medida que voy agregando productos al carrito
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

// aca genero la tabla con los productos agregados
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

// en caso de hacer click en "vaciar el carrito" esto permite vaciar el arreglo, limpiar el local storage, eliminar el cuerpo de la tabla generada y pone a 0 las variables total a pagar y cantidad.
let botonVaciar = document.getElementById('vaciar');
botonVaciar.setAttribute("id", "vaciar");
botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    carrito = [];
    cantidadComprada.innerText = 0;
    totalAPagar.innerText = 0;
    tableBody.innerHTML= "";
    localStorage.removeItem("carrito");
    
}





// FIN INDEX

