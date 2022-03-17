import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Contact from '../views/Contact/Contact.jsx';
import NovedadesForm from '../views/Novedades/NovedadesForm.js';
import BackOffice from '../layout/backOffice/BackOffice.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/create/novedades" element={<NovedadesForm/>}/>
    </Routes>
  )
};
