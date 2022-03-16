import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import UsersListScreen from '../views/backOffice/UsersListScreen.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/backoffice/users' element={<UsersListScreen />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
