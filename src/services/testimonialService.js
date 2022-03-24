import { put, post } from './apiService';

const putTestimonial = async (id, data) => {
  return put(`/testimonials/${id}`, data);
};

const createTestimonial = async (data) => {
  return post(`/testimonials`, data);
};

export { putTestimonial, createTestimonial };
