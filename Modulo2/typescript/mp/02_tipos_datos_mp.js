var edad = 30;
var nombre = "Juan";
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log("Estudiante de sacramento activo");
}
else {
    console.log("No esta participando");
}
//////////////////////////////////////////////////////////////
var materiales = ["Biblia", "Cuaderno", "Guia de estudio"];
for (var i = 0; i < materiales.length; i++) {
    console.log(materiales[i]);
}
//////////////////////////////////////////////////////////////
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Revisado"] = 1] = "Revisado";
    Estado[Estado["Aprobado"] = 2] = "Aprobado";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado.Aprobado);
