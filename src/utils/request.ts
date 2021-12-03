import axios from 'axios';
export const httpRequest = axios.create({
  // baseURL:'http://124.71.57.28:8090/api',
  timeout: 30000,
});
