interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Juan Perez Catequista"
};

const usuario2: Usuario = {
    id: 2,
    nombre: "Maria Lopez Estudiante de Sacramento",
    correo: "maria@sacramentos.com"
};

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);

console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);
