import { get } from './apiService';

const getEntries = async () => {
  return await get('http://localhost:3000/news');
};

const getEntry = async (id) => {
  return await get(`http://localhost:3000/news/${id}`);
};

export { getEntries, getEntry };
