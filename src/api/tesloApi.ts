import axios from "axios";

const TESLO_API_BASE_URL = import.meta.env["VITE_API_URL"];

const tesloApi = axios.create({
  baseURL: TESLO_API_BASE_URL,
});

tesloApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { TESLO_API_BASE_URL, tesloApi };
