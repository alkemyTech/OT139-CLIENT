import { get } from './apiService';

const getUsers = async () => {
  return get('/users');
};

export { getUsers };
