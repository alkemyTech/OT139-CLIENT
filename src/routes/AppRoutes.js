import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home/Home.jsx';
import About from '../views/About/About.jsx';
import { News } from '../views/News/News.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';
import Activity from '../views/Activities/Activity';
import UserEdit from '../components/UserEdit/FormEditUser';
import MyProfile from '../views/MyProfile/MyProfile';
import OrganizationEdit from '../views/OrganizationEdit/OrganizationEdit.jsx';
import Testimonials from '../views/Testimonials/Testimonials.jsx';
import Categories from '../views/backOffice/Categories/Categories.jsx';
import BackofficeNews from '../views/backOffice/News.jsx';
import NovedadesForm from '../views/Novedades/NovedadesForm.js';

export default function AppRoutes() {
  const userDetails = useSelector((state) => state.userDetails);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {    
    if (userDetails.userInfo) {
      const { isAdmin } = userDetails.userInfo;
      setIsAdmin(isAdmin);
    }
  }, [userDetails]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/edituser' element={<UserEdit />} />
      <Route path='/myprofile' element={<MyProfile />} />
      <Route path='/backoffice'>
        <Route path='edituser' element={<UserEdit />} />
        <Route path='myprofile' element={<MyProfile />} />
        <Route path='users' element={<UsersList />} />
        <Route path="edit-organization" element={<OrganizationEdit />} />
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='categories' element={<Categories />} />
        <Route path='news' element={<BackofficeNews />} />
        <Route path='news/create' element={<NovedadesForm news={{}}/>} />
        <Route path='activities' element={<Activities />} />
      </Route>
    </Routes>
  );
}
