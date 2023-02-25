//FUNCIONES, ARRAY DE PRODUCTOS, CONDICIONALES, ORDENES DE FUNCION SUPERIOR, MODIFICACION DEL DOM, LS, SWAL

const productos = [
    {
        id: 1,
        nombre: "Dumbells - Par 10kg", 
        tipo: "Mancuernas", 
        desc: "Producto premium",
        marca: "G-fitness", 
        peso: "10kg", 
        precio: 12000,
        img: "/Images/dumbells.jfif",
        categoria:{
            titulo: "Mancuernas",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 2,
        nombre: "Barra olímpica 20kg", 
        tipo: "Barra", 
        desc: "Levantamiento olímpico",
        marca: "G-fitness", 
        peso: "20kg", 
        precio: 40000,
        img: "/Images/barraOlimpica.jfif",
        categoria:{
            titulo: "Barra olímpica",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 3,
        nombre: "Set discos bumper 100kg", 
        tipo: "Discos", 
        desc: "100kg",
        marca: "G-fitness", 
        peso: "5kg, 10kg, 15kg, 20kg", 
        precio: 100000,
        img: "/Images/discosBumper.jfif",
        categoria:{
            titulo: "Discos bumper",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 4,
        nombre: "Barra W", 
        tipo: "Barra", 
        desc: "Barra de fundición",
        marca: "G-fitness", 
        peso: "12kg", 
        precio: 20000,
        img: "/Images/barraW.jfif",
        categoria:{
            titulo: "Barra W",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 5,
        nombre: "Medball 20kg", 
        tipo: "Pelota", 
        desc: "Cuerina premium",
        marca: "Sonnos", 
        peso: "20kg", 
        precio: 7500,
        img: "/Images/medBall.jfif",
        categoria:{
            titulo: "Medball",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 6,
        nombre: "Soga de salto", 
        tipo: "Soga", 
        desc: "Cable de acero",
        marca: "G-fitness", 
        peso: "400gr", 
        precio: 3500,
        img: "/Images/sogaSalto.jfif",
        categoria:{
            titulo: "Soga de salto",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 7,
        nombre: "Bandas de resistencia", 
        tipo: "Bandas circulares", 
        desc: "Goma resistente",
        marca: "G-fitness", 
        peso: "200gr", 
        precio: 5000,
        img: "/Images/bandasResistencia.jfif",
        categoria:{
            titulo: "Bandas de resistencia",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 8,
        nombre: "TRX", 
        tipo: "Banda de suspención", 
        desc: "Hasta 140kg",
        marca: "G-fitness", 
        peso: "2kg", 
        precio: 6000,
        img: "/Images/trx.jfif",
        categoria:{
            titulo: "TRX",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 9,
        nombre: "Kit body pump 19kg", 
        tipo: "Kit barra y mancuernas", 
        desc: "Barra y mancuernas de caño",
        marca: "G-fitness", 
        peso: "", 
        precio: 17000,
        img: "/Images/kitBodyPump.jfif",
        categoria:{
            titulo: "Kit body pump",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 10,
        nombre: "Set de conos", 
        tipo: "Conos tortuga", 
        desc: "40 conos tortuga",
        marca: "Sonnos", 
        peso: "", 
        precio: 2500,
        img: "/Images/conosTortuga.jfif",
        categoria:{
            titulo: "Set de conos",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 11,
        nombre: "'Fuerza'", 
        tipo: "Rutina mensual", 
        desc: "Entrenamiento de pesas",
        precio: 4000,
        img: "/Images/ronnieColeman.jfif",
        categoria:{
            titulo: "Plan de fuerza",
            id: "servicios"
        },
        cantidad: 1
    },

    {
        id: 12,
        nombre: "'Resistencia'", 
        tipo: "Rutina mensual",
        desc: "Cardio",
        precio: 4000,
        img: "/Images/resistenciaAerobica.jfif",
        categoria:{
            titulo: "Plan de resistencia",
            id: "servicios"
        },
        cantidad: 1
    },

    {
        id: 13,
        nombre: "'Plan general'", 
        tipo: "Rutina mensual", 
        desc: "Preparación física general",
        precio: 4000,
        img: "/Images/preparacionFisicaGral.jfif",
        categoria:{
            titulo: "Preparación general",
            id: "servicios"
        },
        cantidad: 1
    }

]

let carrito = []

const contenedor = document.querySelector("#contenedor")
const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciarCarrito = document.querySelector ("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal")
const procesarCompra = document.querySelector("#procesarCompra")
const activarFuncion = document.querySelector("#activarFuncion")
const totalProceso = document.querySelector("#totalProceso")
const formulario = document.querySelector("#procesar-pago")

if(activarFuncion){
activarFuncion.addEventListener("click", procesarCompra)
}

document.addEventListener("DOMContentLoaded", () =>{
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    carritoDeProductos()

    document.querySelector("#activarFuncion").click(procesarCompra)
})

productos.forEach((element) => {
    const {id, nombre, tipo, desc, precio, img, categoria, cantidad} = element
    
    if(contenedor){
    contenedor.innerHTML += `
    <div class="card" style="width: 15rem;">
    <img src="${img}" class="card-img-top mt 2" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">$${precio}</p>
      <p class="card-text">${desc}</p>
      <p class="card-text">Cantidad ${cantidad}</p>
      <button onclick="agregarProductos(${id})" class="btn btn-primary">Añadir al carrito</button>
    </div>
  </div>
    `
}
});

if(procesarCompra){
procesarCompra.addEventListener("click", () =>{
    if(carrito.length === 0){
        Swal.fire({
            title: "¡El carrito esta vacío!",
            text: "Para continuar, selecciona un producto",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    } else {
        location.href ="compra.html"
    }
})
}

if(vaciarCarrito){
vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    carritoDeProductos()
})
}
function agregarProductos (id){
    const exist = carrito.some(element => element.id === id)
    if(exist){
        const element = carrito.map(element => {
            if(element.id === id){
                element.cantidad++
            }
        })
    }else{
        const item = productos.find((element) => element.id === id)
        carrito.push(item)
    }

    carritoDeProductos()
}

const carritoDeProductos = () =>{
    const modalBody = document.querySelector(".modal .modal-body")
    if(modalBody){
    modalBody.innerHTML = "";
    carrito.forEach((element) =>{
        const {id, nombre, tipo, desc, precio, img, categoria, cantidad} = element
        modalBody.innerHTML += `
        <div class="modalContenedor">
        <div>
        <img class="img-fluid imgCarrito" src="${img}"/>
        </div>
        <div>
        <p> ${nombre} </p>
        <p> $${precio} </p>
        <p> Cantidad ${cantidad} </p>

        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Quitar producto</button>
        </div>
        <div></div>
        <div></div>
        `
    })
 }
    if(carrito.length === 0){
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo>¡Llevate algo al carrito!</p>
        `
    }else{

    }

    if(precioTotal){
    // carritoContenedor.textContent = carrito.length
    precioTotal.innerText = carrito.reduce((acc, element) => acc + element.cantidad * element.precio, 0)
    }
    guardarEnStorage()
}

function eliminarProducto(id){
    const productoId = id
    carrito = carrito.filter((producto) => producto.id !== productoId)
    carritoDeProductos()
}

function guardarEnStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function procesarCompra(){
    carrito.forEach((element) =>{
        const listaCompra = document.querySelector("#lista-compra tbody")
        const {id, nombre, precio, cantidad, img} = element

        const row = document.createElement("tr")
        row.innerHTML +=`
        <td>
        <img class="img-fluid img-carrito" src="${img}"/>
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${precio * cantidad}</td>
        `
        listaCompra.appendChild(row)
    })

    totalProceso.innerText = carrito.reduce((acc, element) => acc + element.cantidad * element.precio, 0)
}