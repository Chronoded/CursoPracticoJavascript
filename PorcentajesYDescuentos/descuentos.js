// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio,descuento){
    const porcPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcPrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcPrecioConDescuento,
//     precioConDescuento,
// });
