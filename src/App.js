import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
//para utlizar componentes que no se exportan por default 
//se mete entre llaves
import HolaMundo, {AdiosMundo} from "./components/HolaMundo";
import Saludar from './components/Saludar';

function App() {
  const user = {
    nombre: "Daniel sanchez",
    edad: 26,
    color: "Azul"
  };

  const saludarFn = (name, edad) => {
    //template string
    console.log(`Hola ${name}, tiene ${edad} años`)
  };

  const [stateCar, setStateCar] = useState(false)
  //contar las veces que el usuario da click al boton de encender/apagar
  const [contar, setContar] = useState(0)
  
  // useEffect( () => {
  //   console.log("Total:" +contar)
  // }, [contar])

  const encenderApagar = () => {
    //mandar lo contrario de stateCar
    //setStateCar(!stateCar)
    //si mandamos el setStateCar en otro componente
    setStateCar(prevValue => !prevValue)
    setContar(contar + 1)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo />
        <AdiosMundo /> */}
        <Saludar userInfo={user} saludarFn={saludarFn}/>
        <h3>El coche está: {stateCar ? 'Encendido' : 'Apagado'}</h3>
        <h4>clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
