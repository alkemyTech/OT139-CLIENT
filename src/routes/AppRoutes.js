import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import { News } from '../screens/public/News.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/novedades" element={<News />} />
    </Routes>
  )
}
