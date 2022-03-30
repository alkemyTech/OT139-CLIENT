import { get } from './apiService';

const getActivities = async () => {
  return await get('http://localhost:3000/activities');
};

export { getActivities };
