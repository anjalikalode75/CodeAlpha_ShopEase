import api from './api';

/**
 * Fetch server health and database status
 * @returns {Promise<object>}
 */
export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};
