import axios from 'axios';
export const httpRequest = axios.create({
  timeout: 30000,
});
