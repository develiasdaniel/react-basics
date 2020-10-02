//importaciones (otro componente, css, img, etc)
import React from "react";

//Funcion que renderiza el componente, y solo puede
//regresar un objeto
export default function HolaMundo() {
    const mifuncion = () => {
        console.log("mi función");
    }
    return (
        <div>
            <h1>Hola Mundo</h1>
            <h2>Daniel sanchez</h2>
        </div>
    )
}


//por ultimo se debe exportar
//export default HolaMundo


//podemos exportar muchos componentes pero solo uno por default
//podemos usar fragment para retornar en vez de un div
export function AdiosMundo() {
    return(
        <>
            <h3>Adios....</h3>
        </>
    );
}