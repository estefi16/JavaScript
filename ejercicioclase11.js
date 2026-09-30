let numero = -5;

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0 ) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// ------------------------------------

let edad = 22;
let tieneEntrada = true;

// debe ser de 18 o mas y tener entrada para ingresars

if (edad >= 18 && tieneEntrada === true) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}

// ---------------------------------

let precio = 10000;
let tieneDescuento = true;

if (tieneDescuento === true) {
  precio = precio * 0.8;
  console.log(precio);
}

let temperatura = 32;

if(temperatura < 15 ) {
    console.log("hace frio")}
else if ( temperatura >= 15 && temperatura <= 25) {
    console.log("temperatura agradable")
}
else {
    console.log("hace calor")
}
// Mostrar:

/* "Hace frío" si es menor a 15.
"Temperatura agradable" si está entre 15 y 25.
"Hace calor" si es mayor a 25. */