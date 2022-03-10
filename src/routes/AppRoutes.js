import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import { News } from '../views/public/News.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}
