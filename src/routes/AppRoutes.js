import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import OrganizationEdit from '../views/OrganizationEdit/OrganizationEdit.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news/:id" element={<NewDetail/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/backoffice">
        <Route path="edit-organization" element={<OrganizationEdit />} />
      </Route>
    </Routes>
  )
};
