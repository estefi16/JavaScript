//Parte 1 – Funciones y return
//Ejercicio 1 – Minutos a segundos

function convertirASegunados(minutos){
    return minutos * 60;
}
console.log(convertirASegunados(120));



//Ejercicio 3 – Número par

function esPar(numero){
    return numero % 2 === 0
}
console.log(esPar(6))

//Ejercicio 4 – Convertir minutos a horas
function convertirAHoras(minutos){
    return minutos / 60;
}
console.log(convertirAHoras(180));



//Parte 2 – Scope


//Crear una variable global:

//const impuesto = 0.21;

//Crear una función:

//calcularImpuesto(precio)

//que utilice la variable global para calcular el impuesto.

//Después crear dentro de otra función una variable llamada impuesto con un valor diferente.

//Responder:
//¿Qué valor utiliza cada función? utiliza la variable global impuesto 0.21
//¿Por qué? utiliza la variable local impuesto 0.10
//¿Qué diferencia existe entre una variable global y una local? La variable global se declara fuera de las funciones y puede utilizarce en distintos lugares, la variable local se declara dentro de una funcion y solo esta disponible en ese ambito. (padres/hijos)

const impuesto = 0.21
function calcularImpuesto(precio) {
    return precio * impuesto;
}

function otroFuncion(){
    const impuesto = 0.10;
    return impuesto;
}

console.log(calcularImpuesto(10));
console.log(otroFuncion());

//Ejercicio 6

//Analizar este código:

const mensaje = "Mensaje global";

function primeraFuncion() {
    const mensaje = "Mensaje local";

    function segundaFuncion() {
        console.log(mensaje);
    }

    segundaFuncion();
}

primeraFuncion();

console.log(mensaje);

//--------------------------------------------------

function convertirTiempo(horas, minutos){
    function convertirHoras(){
        return horas * 60;
    }
    function convertirMinutos(){
        return minutos;
    }
    return convertirHoras() + convertirMinutos();
}
console.log(convertirTiempo(10, 60));


//Parte 4 – Funciones llamadoras

function aKilometros(millas){
    return millas * 1.60934;
}
function aMillas(kilometros){
    return kilometros / 1.60934;
}
function aMetros(kilometros){
    return kilometros * 1000;
}
function convertir(valor, funcionConversion){
    return funcionConversion(valor);
}
console.log(convertir(10, aKilometros));
console.log(convertir(10, aMillas));
console.log(convertir(10, aMetros));
