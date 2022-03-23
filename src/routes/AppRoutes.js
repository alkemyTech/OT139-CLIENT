import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import { News } from '../views/News/News.jsx';
import UsersList from '../views/backOffice/UsersList.jsx';
import NewDetail from '../views/NewDetail/NewDetail.jsx';
import Contact from '../views/Contact/Contact.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';
<<<<<<< HEAD
import { Categories } from '../components/Backoffice/Categories/Categories.jsx';
=======
import OrganizationEdit from '../views/OrganizationEdit/OrganizationEdit.jsx';
>>>>>>> 7cec569bcc03caaba619d5ede18bf73096ee4e57

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/news" element={<News />} />
      <Route path='/news/:id' element={<NewDetail />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path="/backoffice">
        <Route path='users' element={<UsersList />} />
        <Route path="edit-organization" element={<OrganizationEdit />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}
