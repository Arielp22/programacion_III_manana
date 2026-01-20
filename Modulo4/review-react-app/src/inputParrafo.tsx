import { useState } from "react";

export function InputParrafo(){

    const [texto, setTexto] = useState("");
    const [texto2, setTexto2] = useState("");
    const suma = Number(texto) + Number(texto2);
    
    return (
        <div>
            <input
            value={texto}
            placeholder='Ingrese Texto'
            onchange={(e)=>setTexto(e.target.value)} 
            />
            <input
            value={texto2}
            placeholder='Ingrese Texto'
            onchange={(e)=>setTexto2(e.target.value)} 
            />
            <p>{suma || '.......'}</p>
        </div>
    )
}