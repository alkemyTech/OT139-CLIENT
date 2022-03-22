import { post } from './apiService';
export const postContact = async (body) => {
  body.phone = '11543254';

  return post('http://localhost:3000/contacts', body);
};
