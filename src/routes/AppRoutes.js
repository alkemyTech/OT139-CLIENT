import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import NewDetail from '../components/NewDetail/NewDetail.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/novedad/:id" element={<NewDetail/>} />
    </Routes>
  )
}
