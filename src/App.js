import React from 'react';
import logo from './logo.svg';
import './App.css';
//para utlizar componentes que no se exportan por default 
//se mete entre llaves
import HolaMundo, {AdiosMundo} from "./components/HolaMundo";
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo />
        <AdiosMundo /> */}
        <Saludar name="Daniel sanchez" edad="26"/>
        <Saludar name="Nanci Liz" edad="22"/>
      </header>
    </div>
  );
}

export default App;
