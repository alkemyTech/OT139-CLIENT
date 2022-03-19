import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import { News } from '../views/News/News';
import UsersList from '../views/backOffice/UsersList';
import NewDetail from '../views/NewDetail/NewDetail';
import Contact from '../views/Contact/Contact';
import Activity from '../views/Activities/Activity'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activity/:id" element={<Activity />}/>
      <Route path="/news/:id" element={<NewDetail/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/backoffice/users' element={<UsersList />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}
