import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import { News } from '../views/News/News.jsx';
import UsersList from '../views/backOffice/UsersList.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import Testimonials from '../views/Testimonials/Testimonials.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/backoffice">
        <Route path='users' element={<UsersList />} />
        <Route path='testimonials' element={<Testimonials />} />
      </Route>
    </Routes>
  );
}
