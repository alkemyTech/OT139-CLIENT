import { get } from './apiService';

const getContacts = async () => {
  return get('/contacts');
};

export { getContacts };
