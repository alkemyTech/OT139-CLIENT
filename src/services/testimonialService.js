import { put } from './apiService';

const putTestimonial = async (id, data) => {
  return put(`/testimonials/${id}`, data);
};

const createTestimonial = async (data) => {
  // TODO: put(`/testimonials/`, data);
  return;
};

export { putTestimonial, createTestimonial };
