import axios from "axios";
import { useAuthStore } from "../stores/index";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  // console.log({token});

  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  return response;
});

export { api };
