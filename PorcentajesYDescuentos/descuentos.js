// const precioOriginal = 120;
// const descuento = 18;


const cupones = ["xqc","ibai","punk"];

function calcularPrecioConDescuento(precio,descuento){
    const porcPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcPrecioConDescuento) / 100;

    return precioConDescuento;
}

function BotonPrecioDesc(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const CouponValue = inputCoupon.value;

    let descuento;

    switch (CouponValue) {
        case cupones[0]:
            descuento = 15;
            break;
        case cupones[1]:
            descuento = 30;
        break;
        case cupones[2]:
            descuento = 20;
        break;
    }

    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrecio = document.getElementById("ResultPrice");
    resultPrecio.innerText = "El precio con descuento es de: $" + precioConDescuento;

}




// console.log({
//     precioOriginal,
//     descuento,
//     porcPrecioConDescuento,
//     precioConDescuento,
// });
