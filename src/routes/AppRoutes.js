import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import ActivityView from '../components/Activities/ActivityView';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/actividades/:id" element={<ActivityView />}/>
    </Routes>
  )
}
