import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../View/Home/Home';
import About from '../View/About/About.jsx';
import Activity from '../View/Activities/Activity';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/actividades/:id" element={<Activity />}/>
    </Routes>
  )
}
