let termperatura= 35;

if(termperatura > 30){
    console.log('Hace calor');
} 


password = "curso123";
if(password == "curso123"){
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

let nota = 7;
if(nota >= 7){
    console.log("Sobresaliente");
} else if(nota >= 6){''
    console.log("Notable");
} else if(nota >= 5){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}


let edad = 7;
let tiene_licencia = true;

if(edad >= 18) {
    if(tiene_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}


//if edad >= 18 && tiene_licencia {
    console.log("Puede conducir");
//} else if(edaad >= 18){
    console.log("Necesita licencia para conducir");
//} else {
//    console.log("No puede conducir");
//}



// Estructura switch

let dia = 'Lunes';

switch(dia){
    case 'Lunes':
        console.log("Inicio de semana");
        break;
    case 'Viernes':
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Día Normal");
}


let numero1= 3;
let numero2= 5;
let numero3= 7;

if (numero1 >= numero2 && numero1 >= numero3){
    console.log("El numero mayor es:", numero1);
} else if (numero2 >= numero1 && numero2 >= numero3){
    console.log("El numero mayor es:", numero2);
} else {
    console.log("El numero mayor es:", numero3);
}



