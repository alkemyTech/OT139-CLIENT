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
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes.jsx';

export default function AppRoutes() {
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo, logged } = userDetails;
  const [isAdmin, setIsAdmin] = useState(false);
  const privatesRoutes = ['/backoffice', '/backoffice/*'];

  useEffect(() => {
    console.log(logged)
    if (userInfo) {
      const { isAdmin } = userInfo;
      setIsAdmin(isAdmin);
    }
  }, [userInfo, logged]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/activity/:id' element={<Activity />} />
      <Route path='/edituser' element={logged ? <UserEdit /> : <Navigate to='/login' />} />
      <Route path='/myprofile' element={logged ? <MyProfile /> : <Navigate to='/login' />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route
        path='/backoffice/*'
        element={isAdmin ? <PrivateRoutes /> : <Navigate to='/' />}
      />
    </Routes>
  );
}
