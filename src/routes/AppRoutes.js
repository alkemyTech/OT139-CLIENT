import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<About />} />
    </Routes>
  )
}
