class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad(){
        if (edad >= 18){
            console.log(`${this.nombre} es mayor de edad`)
        } else {
            console.log(`${this.nombre} es menor de edad`)
        }
    }
    mostrar(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const pedro = new Persona("Pedro", 17);
pedro.mayorEdad();
pedro.mostrar();