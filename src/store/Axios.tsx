import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL:
    'https://newsapi.org/v2/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '312736e8679e47c18aa8a05c780213df'
  },
});

export default instance;
