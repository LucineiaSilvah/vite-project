import axios from 'axios' ;
export const api = axios.create({
  baseUrl: import.meta.env.VITE_APP_API_BACKEND ?? "http://localhost:3333/",
});