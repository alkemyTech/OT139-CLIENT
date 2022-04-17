import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OrganizationEdit from '../../views/OrganizationEdit/OrganizationEdit';
import Categories from '../../views/backOffice/Categories/Categories.jsx';
import BackofficeNews from '../../views/backOffice/News.jsx';
import NewsForm from '../../views/News/NewsForm/NewsForm';
import Activities from '../../views/Activities/Activities';
import UsersList from '../../views/backOffice/UsersList.jsx';
import ContactList from '../../views/ContactList/ContactList.jsx';
import BackOffice from '../../layout/backOffice/BackOffice';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='users' element={<UsersList />} />
      <Route path='edit-organization' element={<OrganizationEdit />} />
      <Route path='categories' element={<Categories />} />
      <Route path='news' element={<BackofficeNews />} />
      <Route path='news/create' element={ <BackOffice children={<NewsForm news={{}}/>} />} />
      <Route path='news/update/:id' element={ <BackOffice children={<NewsForm news={{}}/>} />} />
      <Route path='activities' element={<Activities />} />
      <Route path="contacts" element={<ContactList/>}/>
    </Routes>
  );
};
