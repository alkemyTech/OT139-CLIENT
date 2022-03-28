import { get, put, post, httpDelete } from './apiService';

const getTestimonials = async () => {
  return get('/testimonials');
};

const updateTestimony = async (id, data) => {
  return put(`/testimonials/${id}`, data);
};

const createTestimony = async (data) => {
  return post(`/testimonials`, data);
};

const deleteTestimony = async (id) => {
  return httpDelete(`/testimonials/${id}`);
};

export { getTestimonials, updateTestimony, createTestimony, deleteTestimony };
