import axios from "axios";

const TESLO_API_BASE_URL = import.meta.env["VITE_API_URL"];

const tesloApi = axios.create({
  baseURL: TESLO_API_BASE_URL,
});

// TODO: Interceptores

export { TESLO_API_BASE_URL, tesloApi };
