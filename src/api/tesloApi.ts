import axios from "axios";

const tesloApiBaseUrl = import.meta.env["VITE_API_URL"];

const tesloApi = axios.create({
  baseURL: tesloApiBaseUrl,
});

// TODO: Interceptores

export { tesloApiBaseUrl, tesloApi };
