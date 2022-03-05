import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/View/Home/Home';
import About from '../components/View/About/About.jsx';
import Activity from '../components/View/Activities/Activity';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/actividades/:id" element={<Activity />}/>
    </Routes>
  )
}
