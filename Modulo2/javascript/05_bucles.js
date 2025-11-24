for (let i=1; i <=10; i++){
         console.log("numero:", i);
 }

 
 suma=0;
    for (let i=1; i <=10; i++){
        suma += i;
    }
    console.log("La suma es:", suma);



nombre = "Carlos";
for (let i=0; i < nombre.length; i++){
    console.log(nombre[i]);
}


console.log("Bucle for")
for (let i=1; i <= 10; i++){
    console.log("Número:", i);
}
suma = 0;
for (let i=1; i <= 10; i++){
    suma += i;
}
console.log("La suma es:", suma);

cuadrado = 0;
for (let i=1; i <= 10; i++){
    cuadrado = i * i;
    console.log("El cuadrado de", i, "es:", cuadrado);
}

/////////////////////////////////////////////////////////////


console.log("Bucle while")

let i=1
while (i <= 6){
    console.log("indice:", i);
    i++;
}


let miArreglo = [-2, 3, 1, 2, 3];
let indice = 1;
while (indice < miArreglo.length){
    console.log("valor", indice, "es:", miArreglo[indice]);
    indice++;
}


let numero = 1;
while(numero <= 10){
    if (numero % 2 === 0)
        console.log("Numero:", numero, "es par");
    numero++;
}


let x = 5
do {
    console.log("x es:", x);
    x--;
} while (x!=0);


let mult=1
while (mult <=10){
    console.log(mult, '*5=', mult * 5);
    mult++;
}


let arreglo = [10, 20, 30, 40, 50];
let indice1 = 0;
let mayor = 0
while (indice1 < arreglo.length){
    if (arreglo[indice1] > mayor){
        mayor = arreglo[indice1];
    }
    indice++;
}
console.log("mayor:", mayor);




