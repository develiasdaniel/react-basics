import React from 'react';
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

  const saludarFn = (name) => {
    console.log("Hola " + name)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo />
        <AdiosMundo /> */}
        <Saludar userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
