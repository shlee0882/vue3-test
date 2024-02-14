import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://your-api-url.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getItems() {
    return apiClient.get('/items');
  },
  getItem(id) {
    return apiClient.get('/items/' + id);
  },
  createItem(item) {
    return apiClient.post('/items', item);
  },
  updateItem(id, item) {
    return apiClient.put('/items/' + id, item);
  },
  deleteItem(id) {
    return apiClient.delete('/items/' + id);
  }
};
