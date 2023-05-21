const productos = [
    { nombre: "Remera Modern Data", precio: 500, id: "1", img: "../img/ModernDataTShirt.jpg", idCat: "1"},
    { nombre: "Buzo Modern Data", precio: 180, id: "2", img: "../img/ModernData.jpg", idCat: "2"},
    { nombre: "Remera Multifruit", precio: 200, id: "3", img: "../img/Multifruit.jpg", idCat: "1"},
    { nombre: "Buzo Jap Death", precio: 900, id: "4", img: "../img/JapDeath.jpg", idCat: "2"},
    { nombre: "Remera Monster Kong", precio: 200, id: "5", img: "../img/MonsterKong.jpg", idCat: "1"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}