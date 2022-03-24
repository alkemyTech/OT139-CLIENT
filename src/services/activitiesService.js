import { get } from './apiService';

const getActivities = async () => {
  return get('/activities');
};

export { getActivities };
