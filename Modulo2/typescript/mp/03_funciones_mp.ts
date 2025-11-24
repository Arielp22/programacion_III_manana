// Funcion basica en TypeScript

function saludar(nombre: string): string {
    return `Paz y bien, ${nombre}. Bienvenido al curso sacramental.`;
}

console.log(saludar("Francisco"));



// Funcion flecha numero total de sesiones curso sacramental
const calcularSesionesCurso = (sesionesTeoria: number, sesionesPractica: number): number => {
    return sesionesTeoria + sesionesPractica;
}

console.log(calcularSesionesCurso(5, 10));


// Mensaje bienvenida sacramentos

function mensajeBienvenida(): void {
    console.log("Bienvenido al sistema de gestion de cursos sacramentales.");
    console.log("Aqui podras administrar catequistas, parroquianos y sacramentos.");
}

mensajeBienvenida();

