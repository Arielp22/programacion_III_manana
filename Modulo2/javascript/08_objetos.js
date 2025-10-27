console.log("Objetos");

let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Quito"
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);

console.log("Modificacion de una clave del objeto");
persona.nombre = "Luis";
console.log(persona);

console.log("Incluir Objeto");
persona.direccion = "Av. Siempre Viva 123";
console.log(persona);

console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));

console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));

let estudiante = {
    nombre: "Carlos",
    apellido: "Perez",
    contacto: {
        email: "carlos.perez@example.com",
        telefono: "555-1234",
        celular: "0998765432"
    },
    materias: [
        {
            nombre: "Programacion",
            calificacion: 8
        },
        {
        nombre:"Bases de datos",
        calificacion: 9
        },
    ]
};
console.log("Estudiante: ",estudiante);


        