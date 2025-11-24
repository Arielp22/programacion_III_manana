// Funcion basica en TypeScript
function saludar(nombre) {
    return "Paz y bien, ".concat(nombre, ". Bienvenido al curso sacramental.");
}
console.log(saludar("Francisco"));
// Funcion flecha numero total de sesiones curso sacramental
var calcularSesionesCurso = function (sesionesTeoria, sesionesPractica) {
    return sesionesTeoria + sesionesPractica;
};
console.log(calcularSesionesCurso(5, 10));
// Mensaje bienvenida sacramentos
function mensajeBienvenida() {
    console.log("Bienvenido al sistema de gestion de cursos sacramentales.");
    console.log("Aqui podras administrar catequistas, parroquianos y sacramentos.");
}
mensajeBienvenida();
