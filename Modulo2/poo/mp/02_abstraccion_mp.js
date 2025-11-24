class Participante {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    cumpleEdadMinima(){
        if (this.edad >= 15){
            console.log(`${this.nombre} cumple la edad minima para el curso de Confirmacion`);
        } else {
            console.log(`${this.nombre} NO cumple la edad minima para el curso de Confirmacion`);
        }
    }
    mostrar(){
        console.log(`Participante: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const jose = new Participante("Jose Andrade", 17);
jose.cumpleEdadMinima();
jose.mostrar();
