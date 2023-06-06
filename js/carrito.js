export function finalizarCompra(){
    carrito.forEach((element) =>{
        const contenedorCompra = document.querySelector("#contenedorCompra")
        const {id, nombre, precio, img, cantidad} = element;
        const div = document.createElement ("div");
        div.innerHTML += `
            <div class="modal-contenedor">
                <div>
                    <img class="img-fluid img-carrito" src="${img}"
                </div>
                <div>
                    <p>Producto: ${nombre}</p>
                    <p>Precio: ${precio}</p>
                    <p>Cantidad: ${cantidad}</p>
                    <button class="btn btn-danger" onclick="quitarProducto(${id})"> Quitar producto </button>
                </div>
            </div>
        `;
        contenedorCompra.appendChild(div);
    })
}