import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MiNavBar from "./components/NavBar"
import Pagination from "./components/Pagination"
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import CategoriaRopa from './components/CategoriaRopa';
import CategoriaZapatos from './components/CategoriaZapatos';
import CategoriaAccesorios from './components/CategoriaAccesorios';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

const App = () => {

  return (
    <>
      <MiNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ropa" element={<CategoriaRopa />} />
        <Route path="/zapatos" element={<CategoriaZapatos />} />
        <Route path="/accesorios" element={<CategoriaAccesorios />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Pagination />
    </>
  );
}

export default App;
