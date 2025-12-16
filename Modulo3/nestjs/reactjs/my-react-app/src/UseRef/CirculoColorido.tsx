
import { useRef } from 'react';

export default function CirculoColorido() {
  const circuloRef = useRef(null);
  const cuadradoRef = useRef(null);


  const cambiarColor = (tipo) => {
    const colores = ['crimson', 'royalblue', 'mediumseagreen', 'orange', 'violet'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    

    if (tipo === 'circulo') {
      circuloRef.current.style.backgroundColor = color;
    } else if (tipo === 'cuadrado') {
      cuadradoRef.current.style.backgroundColor = color;
    }
  };

  return (
    <>
      <div
        ref={circuloRef}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'gray',
          marginBottom: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={() => cambiarColor('circulo')}>Cambiar color del círculo</button>
      
      <div
        ref={cuadradoRef}
        style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'gray',
          marginTop: '1rem',
          transition: 'background-color 0.5s'
        }}
      />
      <button onClick={() => cambiarColor('cuadrado')}>Cambiar color del cuadrado</button>
    </>
  );
}


 

