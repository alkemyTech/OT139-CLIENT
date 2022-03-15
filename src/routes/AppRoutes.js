import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import CategoriesForm from '../components/CategoriesForm/CategoriesForm.jsx';
import Contact from '../views/Contact/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/backoffice/categories' element={<CategoriesForm />} />
      <Route path='/backoffice/categories/:id' element={<CategoriesForm />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
