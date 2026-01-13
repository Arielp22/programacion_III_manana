import { useState } from "react";

const CopyBox = () => {
  const [text, setText] = useState<string>("");
  const [copy, setCopy] = useState<string>("");

  const handleCopy = () => {
    if (text === "") {
      setCopy("No hay texto para copiar");
    } else {
      setCopy(text);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleCopy}>Copiar</button>

      <p>Original: {text}</p>
      <p>Copiado: {copy}</p>
    </div>
  );
};

export default CopyBox;
