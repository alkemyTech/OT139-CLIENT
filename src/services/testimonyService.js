import { put, post } from './apiService';

const updateTestimony = async (id, data) => {
  return put(`/testimonials/${id}`, data);
};

const createTestimony = async (data) => {
  return post(`/testimonials`, data);
};

export { updateTestimony, createTestimony };
