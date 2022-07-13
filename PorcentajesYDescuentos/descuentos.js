// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio,descuento){
    const porcPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcPrecioConDescuento) / 100;

    return precioConDescuento;
}

function BotonPrecioDesc(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrecio = document.getElementById("ResultPrice");
    resultPrecio.innerText = "El precio con descuento es de: $" + precioConDescuento;

}

// console.log({
//     precioOriginal,
//     descuento,
//     porcPrecioConDescuento,
//     precioConDescuento,
// });
