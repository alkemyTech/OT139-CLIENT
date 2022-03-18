import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import Activities from '../views/Activities/Activities.jsx';


export default function AppRoutes() {

  const actividades = [
    {name: "avios es la pelicula que me gusta", description: "avios", image: "https://www.eluniversal.com.mx/sites/default/files/styles/focal_crop_16x9/public/2018/07/12/avios.jpg?itok=QZ-_Z-_i"},
    {name: "avios", description: "avios", image: "https://www.eluniversal.com.mx/sites/default/files/styles/focal_crop_16x9/public/2018/07/12/avios.jpg?itok=QZ-_Z-_i"},
  ]

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news/:id" element={<NewDetail/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/activities" element={<Activities activities={actividades}/>}/>
    </Routes>
  )
};
