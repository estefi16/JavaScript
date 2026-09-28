const precioProducto1 = 15000;
const cantidadProducto1 = 2;

const precioProducto2 = 8500;
const cantidadProducto2 = 3;

const precioProducto3 = 12000;
const cantidadProducto3 = 1;

const descuento = 5000;
const costoEnvio = 3500;

//subtotales productos
const subtotalProducto1 = precioProducto1 * cantidadProducto1
console.log("subtotal producto 1:", subtotalProducto1)

const subtotalProducto2 = precioProducto2 * cantidadProducto2
console.log("subtotal producto 2:", subtotalProducto2)
 
const subtotalProducto3 = precioProducto3 * cantidadProducto3
console.log("subtotal producto 3:", subtotalProducto3)

//subtotal compra
const subtotalCompra = subtotalProducto1 + subtotalProducto2 + subtotalProducto3
console.log("subtotal compra:", subtotalCompra)

//subtotal descuento
const totalConDescuento = subtotalCompra - descuento
console.log("total con descuento:", totalConDescuento)

//total final
const totalFinal = totalConDescuento + costoEnvio
console.log("total final:", totalFinal)

//Cutas
let cuotas = totalFinal / 3
console.log("3 cuotas:",cuotas)

const resto = totalFinal % cuotas
console.log("resto:", resto)






