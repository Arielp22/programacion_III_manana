const participantes = [
  { nombre: "Ana Lopez", catequesis: "Primera comunion", edad: 10, asistencia: 8, grupo: "A1" },
  { nombre: "Carlos Ruiz", catequesis: "Confirmacion", edad: 15, asistencia: 10, grupo: "B2" },
  { nombre: "Maria Torres", catequesis: "Bautizo", edad: 1, asistencia: 3, grupo: "C1" },
  { nombre: "Jose Sanchez", catequesis: "Primera comunion", edad: 9, asistencia: 7, grupo: "A2" },
  { nombre: "Lucia Gomez", catequesis: "Confirmacion", edad: 14, asistencia: 9, grupo: "B1" },
  { nombre: "Pedro Calderon", catequesis: "Confirmacion", edad: 16, asistencia: 6, grupo: "B3" },
  { nombre: "Sandra Flores", catequesis: "Primera comunion", edad: 11, asistencia: 8, grupo: "A3" },
  { nombre: "Luis Villa", catequesis: "Bautizo", edad: 2, asistencia: 4, grupo: "C2" },
  { nombre: "Elena Salazar", catequesis: "Confirmacion", edad: 13, asistencia: 10, grupo: "B4" },
  { nombre: "Daniel Perez", catequesis: "Primera comunion", edad: 12, asistencia: 9, grupo: "A4" }
];

const tabla = document.getElementById('cuerpoTabla');

participantes.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.catequesis}</td>
    <td>${p.edad}</td>
    <td>${p.asistencia}</td>
    <td>${p.grupo}</td>
  `;
  tabla.appendChild(fila);
});
