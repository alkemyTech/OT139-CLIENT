import { get, put, post, remove } from './apiService';

const getTestimonials = async () => {
  return get('http://localhost:3000/testimonials');
};

const updateTestimony = async (id, data) => {
  return put(`http://localhost:3000/testimonials/${id}`, data);
};

const createTestimony = async (data) => {
  return post(`http://localhost:3000/testimonials`, data);
};

const deleteTestimony = async (id) => {
  return remove(`http://localhost:3000/testimonials/${id}`);
};

export { getTestimonials, updateTestimony, createTestimony, deleteTestimony };
