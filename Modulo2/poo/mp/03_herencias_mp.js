class Sacramento {
    constructor(nombre) {
        this.nombre = nombre;
    }

    info() {
        console.log(`Este es el sacramento: ${this.nombre}`);
    }
}


class CursoConfirmacion extends Sacramento {
    iniciarCurso() {
        console.log(`El curso de ${this.nombre} ha iniciado. Bienvenidos todos.`);
    }
}

class CursoBautizo extends Sacramento {
    iniciarCurso() {
        console.log(`El curso de ${this.nombre} esta comenzando. Favor tomar asiento.`);
    }
}

const cursoConfirmacion = new CursoConfirmacion("Confirmacion");
const cursoBautizo = new CursoBautizo("Bautizo");

cursoConfirmacion.info();
cursoConfirmacion.iniciarCurso();

cursoBautizo.info();
cursoBautizo.iniciarCurso();
