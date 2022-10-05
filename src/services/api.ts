import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 1000,
  headers: { "Cache-Control": "no-cache" },
});

export default api;
