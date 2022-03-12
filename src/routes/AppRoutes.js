import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import About from '../views/About/About';
import Activity from '../views/Activities/Activity';
import Contact from '../views/Contact/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activity/:id" element={<Activity />}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
};
