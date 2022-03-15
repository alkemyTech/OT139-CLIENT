import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Contact from '../views/Contact/Contact.jsx';
import BackofficeNews from '../views/Backoffice/News.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/backoffice/news" element={<BackofficeNews />} />
    </Routes>
  )
};
