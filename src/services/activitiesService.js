import { get } from './apiService';

const getActivities = async () => {
  return await get('/activities');
};

export { getActivities };
