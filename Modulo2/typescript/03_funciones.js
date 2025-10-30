// Funcion basica en TypeScript
function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar("Francisco"));
// Funcion flecha
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 10));
function saludarDeNuevo() {
    console.log("Hola de nuevo");
    console.log("Bienvenido a typescript");
}
saludarDeNuevo();
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(7);
