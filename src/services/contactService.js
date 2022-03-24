import { post } from './apiService';
export const postContact = async (body) => {
  body.phone = '11543254';

  return await post('http://localhost:3000/contacts', body);
};
