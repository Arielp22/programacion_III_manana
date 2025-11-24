let parrafo = null;
document.getElementById("crear").addEventListener("click", () => {
    parrafo = document.createElement("p");
    parrafo.textContent = "Informacion creada para el curso sacramental";
    document.getElementById("contenedor").appendChild(parrafo);
});

document.getElementById("eliminar").addEventListener("click", () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("Hola, saludo desde un evento del curso");
}

document.getElementById("parrafo")
    .addEventListener("dblclick", () => {
        alert("Hiciste doble click en el parrafo del curso");
});

document.getElementById("nombre")
    .addEventListener("input", (a) => {
        console.log("Escribiendo", a.target.value);
});
