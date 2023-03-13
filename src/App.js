import React from 'react';
import Main from './componentes/Main/Main';
// import Saludar from './componentes/Saludar/Saludar';
import Navbar from './componentes/Navbar/Navbar';
import Section from './componentes/Section/Section';
import Subtitulo from './componentes/Subtitulo/Subtitulo';
import Titulo from './componentes/Titulo/Titulo';
import Footer from './componentes/Footer/Footer';
import Subtitulo2 from './componentes/Subtitulo2/Subtitulo2';
import ComponentCard from './componentes/ComponentCard/ComponentCard';


function App() {
  return (
    <>
    <Navbar/>
    <Titulo/>

    <Main/>

    <Subtitulo/>

    <Section/>

    <Subtitulo2/>

    <ComponentCard/>

    <Footer/>
    </>
  );
}

export default App;
