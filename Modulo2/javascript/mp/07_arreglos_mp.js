console.log("Arreglos - Lista de participantes");

let participantes = ["Juan", "Maria", "Carlos", "Sofia", "Pedro"];
let listaVacia = new Array();
let listaVacia2 = [];

console.log("Lista original:", participantes);
console.log(listaVacia);
console.log(listaVacia2);
console.log("Acceso a elementos del array");
console.log(participantes[0]);
console.log(participantes[3]);

////////////////////////////////////////////////////////////////////////////////

console.log("Modificar nombre de participante");
participantes[0] = "Juan Perez";
console.log(participantes);

console.log("Agregar participante al final");
participantes.push("Lucia");
console.log(participantes);

console.log("Agregar participante al inicio");
participantes.unshift("Andrea");
console.log(participantes);

console.log("Eliminar primer participante");
participantes.shift();
console.log(participantes);

console.log("Eliminar ultimo participante");
participantes.pop();
console.log(participantes);

////////////////////////////////////////////////////////////////////////////////

console.log("Recorrer lista con while");

let indice = 0;
while (indice < participantes.length){
    console.log("Participante:", participantes[indice]);
    indice++;
}

////////////////////////////////////////////////////////////////////////////////

console.log("Recorrer lista con for");

for (let i=0; i < participantes.length; i++){
    console.log(participantes[i]);
}

////////////////////////////////////////////////////////////////////////////////

console.log("Recorrer lista con for of");

for (let persona of participantes){
    console.log(persona);
}

////////////////////////////////////////////////////////////////////////////////

console.log("Recorrer lista con forEach");

participantes.forEach(function(valor, indice){
    console.log(indice, valor);
});
