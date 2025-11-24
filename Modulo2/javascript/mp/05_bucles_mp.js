let asistentes = ["Ana", "Pedro", "Carlos", "Maria"];

for (let i = 0; i < asistentes.length; i++) {
    console.log("Asistente:", asistentes[i]);
}


let donaciones = [5, 10, 2, 7, 8];
let total = 0;

for (let i = 0; i < donaciones.length; i++) {
    total += donaciones[i];
}

console.log("Total donado hoy:", total);


let edades = [15, 22, 17, 19, 14, 12];
let indice = 0;
let menores = 0;

while (indice < edades.length) {
    if (edades[indice] < 18) {
        menores++;
    }
    indice++;
}

console.log("Menores de edad:", menores);


let lista = ["Luis", "Andrea", "Mario", "Carla"];
let buscar = "Mario";
let i = 0;
let encontrado = false;

while (i < lista.length) {
    if (lista[i] === buscar) {
        encontrado = true;
        break;
    }
    i++;
}

console.log("¿Mario esta registrado?", encontrado);


let boletines = 5;
let enviados = 0;

do {
    enviados++;
    console.log("Boletin enviado numero:", enviados);
} while (enviados < boletines);


