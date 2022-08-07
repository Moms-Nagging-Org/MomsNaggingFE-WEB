import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_URL;

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { instance };