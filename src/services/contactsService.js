import { get } from './apiService';

const getContacts = async () => {
  return get('http://localhost:3000/contacts');
};

export { getContacts };
