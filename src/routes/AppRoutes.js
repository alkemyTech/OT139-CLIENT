import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import About from '../views/About/About';
import Activity from '../views/Activities/Activity';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/actividades/:id" element={<Activity />}/>
    </Routes>
  )
}
