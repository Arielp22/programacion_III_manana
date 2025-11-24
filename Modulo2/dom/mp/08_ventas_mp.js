const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCursos');
let cursos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombreCurso').value.trim();
  const descripcion = document.getElementById('descripcionCurso').value.trim();
  const aporte = parseFloat(document.getElementById('aporte').value.trim());

  if (nombre && descripcion && !isNaN(aporte)) {
    const nuevoCurso = { id: Date.now(), nombre, descripcion, aporte };
    cursos.push(nuevoCurso);
    renderizarCurso(nuevoCurso);
    formulario.reset();
  }
});

function renderizarCurso({ id, nombre, descripcion, aporte }) {
  const div = document.createElement('div');
  div.className = 'curso';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Aporte voluntario: $${aporte.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.curso');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    cursos = cursos.filter(c => c.id !== id);
    tarjeta.remove();
  }
});
