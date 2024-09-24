import React, { useEffect, useState } from "react";
import './Contador.css';

const Contador = () => {
    const [contador, setContador] = useState(0);//1er valor, es el que cambia, 2do el que nos sirve para hacer cambiar el 1er

    const increm = () => {
        setContador((valorPrevio) => valorPrevio + 1);
    };
    const decrem = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    const reset = () => {
        setContador(0);
    }

    useEffect(()=>{
        document.title="Contador:" + contador;
    },[contador]);

    return (
        <div className="contenedorContador">
            <h1 id="titulo">Contador</h1>
            <h2 id="numeros">{contador}</h2>
            <div className="botones">
                <button id="incrementar-btn" onClick={increm}>Incrementar</button>
                <button id="decrementar-btn" onClick={decrem}>Decrementar</button>
                <button id="reset-btn" onClick={reset}>Reiniciar</button>
            </div>
        </div>
    );
}

export default Contador;