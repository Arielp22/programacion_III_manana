let edad: number = 30;
let nombre: string = "Juan";
let activo: boolean = true;
let valor: any = 6;


if (edad > 18 && activo) {
    console.log("Trabajador activo");
} else {
    console.log("No trabaja");
}

//////////////////////////////////////////////////////////////

let frutas: string[] = ["Manzana", "Banana", "Naranja"];
for ( let i=0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//////////////////////////////////////////////////////////////

enum Estado {
    Pendiente,
    Enviado,
    Entregado
}
console.log(Estado);
console.log(Estado.Entregado);
