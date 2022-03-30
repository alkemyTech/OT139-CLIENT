import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OrganizationEdit from '../../views/OrganizationEdit/OrganizationEdit';
import Categories from '../../views/backOffice/Categories/Categories.jsx';
import BackofficeNews from '../../views/backOffice/News.jsx';
import Activities from '../../views/Activities/Activities';
import UsersList from '../../views/backOffice/UsersList.jsx';
import ContactList from '../../views/ContactList/ContactList.jsx';
import BackOffice from '../../layout/backOffice/BackOffice';
import ActivitiesForm from '../../views/Activities/ActivitiesForm/ActvitiesForm';
export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='users' element={<UsersList />} />
      <Route path='edit-organization' element={<OrganizationEdit />} />
      <Route path='categories' element={<Categories />} />
      <Route path='news' element={<BackofficeNews />} />
      <Route path='activities' element={<Activities />} />
      <Route path='activities/create' element={<BackOffice children={<ActivitiesForm activities={{}} />} />} />
      <Route path='activities/update/:id' element={<BackOffice children={<ActivitiesForm activities={{}} />} />} />
      <Route path="contacts" element={<ContactList />} />
    </Routes>
  );
};
