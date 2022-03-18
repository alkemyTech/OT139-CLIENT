import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
<<<<<<< HEAD
import { News } from '../views/News/News.jsx';
=======
import UsersList from '../views/backOffice/UsersList.jsx';
>>>>>>> ee127f049118825e4747d9cbbf63c6ec9976a4d9
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';

export default function AppRoutes() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewDetail/>} />
      <Route path="/contact" element={<Contact/>}/>
=======
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/backoffice/users' element={<UsersList />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/contact' element={<Contact />} />
>>>>>>> ee127f049118825e4747d9cbbf63c6ec9976a4d9
    </Routes>
  );
}
