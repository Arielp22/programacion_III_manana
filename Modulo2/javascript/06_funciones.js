///
console.log("Funciones");

console.log("Forma clasica");

function saludar(){
    console.log("Hola desde una funcion clasica");
}

saludar();




console.log("Forma con parametros y retorno");

function sumar(a,b){
    return a+b;
}

let resultado = sumar(5, 10);
console.log("La suma es:", resultado);

//////////////////////////////////////////////////////////////////////////////////

console.log("Funcion flecha");

const resta = (a,b) => {
    return a - b;
}
let resultadoResta = resta(10, 5);
console.log("La resta es:", resultadoResta);


////////////////////////////////////////////////////////////////////////////////

console.log("Funcion retorno directo");

const cuadrado = x => x * x;

console.log("El cuadrado de 5 es:", cuadrado(5));

////////////////////////////////////////////////////////////////////////////////

console.log("Funcion con parametros por defecto");

function saludar (nombre, saludo = "hola"){
    return saludo + " " + nombre;
}


let saludo1 = saludar("Ana");
let saludo2 = saludar("Luis", "buenos dias");
console.log(saludo1);
console.log(saludo2);


function par (numero){
    return numero % 2 === 0;
}

console.log('El numero es par', par(4));


function area (b, a){
    return b * a / 2;
}
console.log("El area es:", area(10,5));




