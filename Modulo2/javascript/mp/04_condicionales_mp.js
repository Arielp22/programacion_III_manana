let temperatura = 35;

if (temperatura > 30) {
    console.log('Hace calor en el salon de catequesis');
}

//////////////////////////////////////////////

let password = "curso123";

if (password == "curso123") {
    console.log("Acceso concedido al sistema de cursos sacramentales");
} else {
    console.log("Acceso denegado");
}

///////////////////////////////////////////////

let nota = 7;

if (nota >= 7) {
    console.log("Aprobado con Sobresaliente en Confirmacion");
} else if (nota >= 6) {
    console.log("Aprobado con Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Reprobado en el curso sacramental");
}

///////////////////////////////////////////////

let edad = 14;
let tiene_bautizo = true;

if (edad >= 15) {
    if (tiene_bautizo) {
        console.log("Puede inscribirse al curso de Confirmacion");
    } else {
        console.log("Debe presentar certificado de Bautizo");
    }
} else {
    console.log("Edad insuficiente para Confirmacion");
}


//////////////////////////////////////////////

let dia = 'Lunes';

switch (dia) {
    case 'Lunes':
        console.log("Reunion de Catequistas");
        break;
    case 'Viernes':
        console.log("Ensayo de Confirmacion");
        break;
    default:
        console.log("Actividades normales en la parroquia");
}


///////////////////////////////////////////////

let curso1 = 30; // Comunion
let curso2 = 45; // Confirmacion
let curso3 = 38; // Bautizo

if (curso1 >= curso2 && curso1 >= curso3) {
    console.log("El curso con mayor asistencia es: Primera Comunion");
} else if (curso2 >= curso1 && curso2 >= curso3) {
    console.log("El curso con mayor asistencia es: Confirmacion");
} else {
    console.log("El curso con mayor asistencia es: Bautizo");
}


////////////////////////////////////////////////

let edadParticipante = 10;

if (edadParticipante >= 18) {
    console.log("Grupo Adultos - Catequesis para Adultos");
} else if (edadParticipante >= 13) {
    console.log("Grupo Adolescentes - Confirmacion");
} else if (edadParticipante >= 7) {
    console.log("Grupo Niños - Primera Comunion");
} else {
    console.log("Grupo Infantil - Iniciacion Cristiana");
}


////////////////////////////////////////////////

