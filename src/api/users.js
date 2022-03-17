import { get } from '../services/apiService';

const getUsers = async () => {
  const users = get('/users');
  return users.data ? users.data : users.error;
};

export { getUsers };
