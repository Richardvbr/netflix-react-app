import axios from 'axios';

// Adds base URL to every request unless manually overridden
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default instance;