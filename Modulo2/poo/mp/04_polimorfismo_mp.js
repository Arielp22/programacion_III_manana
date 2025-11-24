class PersonalParroquia {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} esta realizando actividades parroquiales.`);
    }

    calcularAporteParroquial() {
        return this.salario * 0.15; 
    }

    pagoHorasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}


// Catequista hereda de PersonalParroquia
class Catequista extends PersonalParroquia {
    calcularAporteParroquial() {
        return this.salario * 0.10; 
    }
}

// Coordinador de Sacramentos hereda de PersonalParroquia
class CoordinadorSacramentos extends PersonalParroquia {
    calcularAporteParroquial() {
        return this.salario * 0.20; 
    }
}


const catequistaJuan = new Catequista("Juan", 800);
const coordinadoraMaria = new CoordinadorSacramentos("María", 1500);

catequistaJuan.trabajar();
coordinadoraMaria.trabajar();

console.log("Aporte parroquial Juan:", catequistaJuan.calcularAporteParroquial());
console.log("Aporte parroquial María:", coordinadoraMaria.calcularAporteParroquial());

console.log("Horas extra Juan (5h):", catequistaJuan.pagoHorasExtra(5));
console.log("Horas extra Maria (5h):", coordinadoraMaria.pagoHorasExtra(5));
