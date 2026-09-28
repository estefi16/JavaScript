const nombre = "Martin"; 
let edad = 24; 
const ciudad = "Buenos Aires"; 
//Buenos Aires no estaba entre ""

console.log("Nombre:", nombre); 
console.log("Edad:", edad); 
console.log("Ciudad:", ciudad); 

edad = 25; 
const profesion = "programador"; 
console.log("Profesión:", profesion); 
// a programdor le faltan las comillas es un string

let salario = 850000; 
// 850000 no debe ir entre comillas porque es un number

console.log("Salario:", salario); 
console.log("Tipo de nombre:", typeof nombre); 
console.log("Tipo de edad:", typeof edad); 
console.log("Tipo de salario:", typeof salario); 

const numero1 = 100; 
const numero2 = 25; 

console.log("Suma:", numero1 + numero2); 
console.log("Resta:", numero1 - numero2); 
console.log("Multiplicación:", numero1 * numero2); 
console.log("División:", numero1 / numero2); 


let apellido = "Gomez"; apellido = "Pérez"; 
console.log("Apellido:", apellido); 
//hay que cambiar const por let ya que debe ser variable

let cantidadProductos; 
console.log("Cantidad:", cantidadProductos); 
console.log("Resultado:", numero1 + numero2 * 2);
//faltaba el ultimo ) antes del ;