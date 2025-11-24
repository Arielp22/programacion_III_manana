console.log("Objetos - Sistema de Cursos Sacramentales");

let catequista = {
    nombre: "Ana",
    edad: 32,
    parroquia: "San Jose"
};
console.log(catequista);
console.log(catequista.nombre);
console.log(catequista.parroquia);
console.log(catequista["edad"]);

console.log("Modificar datos del catequista");
catequista.nombre = "Luis";
console.log(catequista);

console.log("Agregar campo al objeto");
catequista.telefono = "0991234567";
console.log(catequista);

console.log("Eliminar campo del objeto");
delete catequista.telefono;
console.log(catequista);

console.log("Recorrer objeto catequista");
for (let clave in catequista){
    console.log(clave);
}

console.log("Claves del objeto");
console.log(Object.keys(catequista));

console.log("Valores del objeto");
console.log(Object.values(catequista));

let estudianteSacramento = {
    nombre: "Carlos",
    apellido: "Perez",
    sacramentos: {
        bautizo: true,
        primeraComunion: true,
        confirmacion: false
    },
    cursosInscritos: [
        {
            nombre: "Confirmacion",
            asistencia: 8
        },
        {
            nombre: "Catequesis Familiar",
            asistencia: 6
        },
    ]
};
console.log("Estudiante Sacramental:", estudianteSacramento);
