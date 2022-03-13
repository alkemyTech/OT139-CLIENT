import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Contact from '../views/Contact/Contact.jsx';
import EditOrganization from '../views/EditOrganization/EditOrganization.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/backoffice">
        <Route path="edit-organization" element={<EditOrganization />} />
      </Route>
    </Routes>
  )
};
