import { useState } from "react";

export function AreaTriangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");

  const area = (Number(base) * Number(altura)) / 2;

  return (
    <div>
      <p>Area Triangulo:</p>
      
      <input
        placeholder="Base"
        onChange={(e) => setBase(e.target.value)}
      />

      <input
        placeholder="Altura"
        onChange={(e) => setAltura(e.target.value)}
      />

      <p>Resultado:</p>
      <p>{area || "......."}</p>

    </div>
  );
}
