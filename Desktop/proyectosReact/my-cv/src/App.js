import React from 'react';
import { useState } from 'react';
import './App.css';
//importo los componentes que voy a utilizar
import  About  from "./Components/About";
import  Hero  from "./Components/Hero";
import  Education  from "./Components/Education";
import  Experience  from "./Components/Experience";
import  More  from "./Components/More"; 
import { CV } from './CV/CV'; //importo el CV que es donde tengo todos los datos en objetos y arrays


const { hero, education, experience, languages, habilities } = CV; //hago el destructuring de mi const CV para poder pasar por prop los elementos



function App() {
  return (
    <div className="App">
      {/* pasamos por props la información a cada componente: Ej. los componentes Hero y About tendrán la info que hay en hero */}
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
      />
      
    </div>
  );
}

export default App;
