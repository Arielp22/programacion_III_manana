export class EstudianteSacramento {
    nombre: string;
    edad: number;

    constructor(
        nombre: string,
        edad: number
    ) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anos. Estoy inscrito en un curso sacramental.`);
    }
}
