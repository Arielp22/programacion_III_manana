// Funcion basica en TypeScript

function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}

console.log(saludar("Francisco"));

// Funcion flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log(sumar(5, 10));


function saludarDeNuevo(): void {
    console.log("Hola de nuevo");
    console.log("Bienvenido a typescript");
}
saludarDeNuevo();


function calcularAreaCirculo(radio: number): number {
    return Math.PI * radio * radio;
}

function calcularAreaCirculoVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(7);