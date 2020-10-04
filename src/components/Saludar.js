import React from 'react';

//el {} ejecuta código, entonces hacer función anonima ()=> para
// que espere el click
export default function Saludar(props){
    //destructuring
    const {userInfo, saludarFn} = props
    const {nombre = "Anonimo", edad} = userInfo
    console.log(props)
    console.log(userInfo)
    return(
        <div>
            <h2>Hola {userInfo.nombre}, tiene {userInfo.edad} años</h2>
            <p>Su color favorito es {userInfo.color}</p>
            <button onClick={() => saludarFn(nombre, edad )}>Saludar</button>
        </div>
    );
}
