console.log("Funciones - Sistema de Cursos Sacramentales");

console.log("Funcion clasica");

function mensajeBienvenida(){
    console.log("Bienvenido al sistema parroquial de cursos sacramentales");
}
mensajeBienvenida();

///////////////////////////////////////////////////////////////////////////

console.log("Funcion con parametros y retorno");

function calcularAsistencia(asistieron, total){
    return (asistieron / total) * 100;
}

let porcentaje = calcularAsistencia(18, 20);
console.log("Asistencia del curso:", porcentaje, "%");

///////////////////////////////////////////////////////////////////////////

console.log("Función flecha");

const calcularEdadConfirmacion = (edadActual) => {
    return 15 - edadActual;
}

let faltan = calcularEdadConfirmacion(13);
console.log("Años que faltan para Confirmacion:", faltan);

///////////////////////////////////////////////////////////////////////////

console.log("Retorno directo");

const cupoRestante = cupos => 30 - cupos;

console.log("Cupos disponibles:", cupoRestante(18));

///////////////////////////////////////////////////////////////////////////

console.log("Funcion con parametros por defecto");

function saludarParticipante(nombre, saludo = "Bienvenido al curso"){
    return saludo + " " + nombre;
}

let s1 = saludarParticipante("Ana");
let s2 = saludarParticipante("Luis", "Dios te bendiga");
console.log(s1);
console.log(s2);

///////////////////////////////////////////////////////////////////////////

function esAprobado(nota){
    return nota >= 7;
}

console.log("¿Aprobado en Confirmacion?", esAprobado(8));

///////////////////////////////////////////////////////////////////////////

function calcularMateriales(estudiantes, librosPorEstudiante){
    return estudiantes * librosPorEstudiante;
}

console.log("Materiales necesarios:", calcularMateriales(12, 1));
