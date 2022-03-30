import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OrganizationEdit from '../../views/OrganizationEdit/OrganizationEdit';
import Categories from '../../views/backOffice/Categories/Categories.jsx';
import BackofficeNews from '../../views/backOffice/News.jsx';
import Activities from '../../views/Activities/Activities';
import UsersList from '../../views/backOffice/UsersList.jsx';
import Testimonials from '../../views/Testimonials/Testimonials';
import ContactList from '../../views/ContactList/ContactList.jsx';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='users' element={<UsersList />} />
      <Route path='edit-organization' element={<OrganizationEdit />} />
      <Route path='categories' element={<Categories />} />
      <Route path='news' element={<BackofficeNews />} />
      <Route path='activities' element={<Activities />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path="contacts" element={<ContactList/>}/>
    </Routes>
  );
};
