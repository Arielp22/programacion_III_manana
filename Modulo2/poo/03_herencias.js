class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} realiza algun ruido`);
    }
}

class Perro extends Animal {}
const miPerro = new Perro("Firulais");
const miAnimal = new Animal("Lucero");
miPerro.hacerSonido();
miAnimal.hacerSonido();











