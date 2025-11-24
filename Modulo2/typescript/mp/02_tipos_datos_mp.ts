let edad: number = 30;
let nombre: string = "Juan";
let activo: boolean = true;
let valor: any = 6;

if (edad > 18 && activo) {
    console.log("Estudiante de sacramento activo");
} else {
    console.log("No esta participando");
}

//////////////////////////////////////////////////////////////

let materiales: string[] = ["Biblia", "Cuaderno", "Guia de estudio"];
for (let i = 0; i < materiales.length; i++) {
    console.log(materiales[i]);
}

//////////////////////////////////////////////////////////////

enum Estado {
    Pendiente,
    Revisado,
    Aprobado
}

console.log(Estado);
console.log(Estado.Aprobado);
