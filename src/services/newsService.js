import { get } from './apiService';

const getNews = async () => {
  return await get('http://localhost:3000/news');
};

const getNewsById = async (id) => {
  return await get(`http://localhost:3000/news/${id}`);
};

export { getNews, getNewsById };
