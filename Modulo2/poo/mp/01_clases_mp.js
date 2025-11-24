class CursoSacramental {
    constructor(nombre, nivel){
        this.nombre = nombre;
        this.nivel = nivel;
    }
    start(){
        console.log(`${this.nombre} (${this.nivel}) ha iniciado`);
    }
    run(){
        console.log(`${this.nombre} (${this.nivel}) esta en progreso`);
    }
    stop(){
        console.log(`${this.nombre} (${this.nivel}) ha finalizado`);
    }  
}

const cursoConfirmacion = new CursoSacramental("Curso de Confirmacion", "Nivel 1");
cursoConfirmacion.start();
cursoConfirmacion.run();
cursoConfirmacion.stop();
console.log(cursoConfirmacion.nombre);
console.log(cursoConfirmacion.nivel);
