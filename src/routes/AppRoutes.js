import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home.jsx';
import About from '../views/About/About.jsx';
import { News } from '../views/News/News.jsx';
import UsersList from '../views/backOffice/UsersList.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import Activities from '../views/Activities/Activities.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';
import Activity from '../views/Activities/Activity'
import UserEdit from '../components/UserEdit/FormEditUser';
import MyProfile from '../views/MyProfile/MyProfile';
import OrganizationEdit from '../views/OrganizationEdit/OrganizationEdit.jsx';
import Categories from '../views/backOffice/Categories/Categories.jsx';
import BackofficeNews from '../views/backOffice/News.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/backoffice/users' element={<UsersList />} />
      <Route path="/activity/:id" element={<Activity />}/>
      <Route path='/edituser' element={<UserEdit />} />
      <Route path='/myprofile' element={<MyProfile />} />
      <Route path='/backoffice'>
        <Route path='users' element={<UsersList />} />
        <Route path='edit-organization' element={<OrganizationEdit />} />
        <Route path='categories' element={<Categories />} />
        <Route path='news' element={<BackofficeNews />} />
        <Route path='activities' element={<Activities />} />
      </Route>
    </Routes>
  );
}
