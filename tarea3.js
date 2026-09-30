//ejercicio 1

let numero1 = 35;
let numero2 = 42;

if(numero2 > numero1){
    console.log("El numero 42 es mayor");
}
else if(numero2 < numero1){
    console.log("El numero 42 es menor")
}
else{
    console.log("Los numeros son iguales");
}

//ejercicio 2

let numero11 = 15;
let numero22= 8;
let numero33 = 23;

if(numero11 < numero22 && numero11 < numero33){
    console.log("el numero menos es")
    console.log(numero11)
}
else if( numero22 < numero11 && numero22 < numero33){
    console.log("el numero menor es")
    console.log(numero22)
}
else{
    console.log("el numero menor es")
    console.log(numero33)
}

//ejercicio 3

let numero = 45;
if(numero >= 10 && numero <= 50){
    console.log("el numero esta dentro del rango")
}
else{
    console.log("el numero esta fuera del rango")
}

//ejercico 5

let numero4 = 20;
let numero5 = 5;
let operacion = "*"

if(operacion === "+"){
    console.log("resultado")
    console.log(numero4 + numero5)
}
else if (operacion === "-"){
    console.log("resultado")
    console.log(numero4 - numero5)
}
else if (operacion === "*"){
    console.log("resultado")
    console.log(numero4 * numero5)
}
else if (operacion === "/"){
    console.log("resultado")
    console.log(numero4 / numero5)
}
else{
    console.log("operacion no valida")
}

