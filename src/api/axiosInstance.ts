import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/', // change to your API
  timeout: 10000, // 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: add auth token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // or from context
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor: global error handling or logging
api.interceptors.response.use(
  response => response,
  error => {
    // You can centralize error handling here (e.g., refresh token)
    return Promise.reject(error);
  }
);

export default api;