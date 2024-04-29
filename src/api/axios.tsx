import axios from "axios";
import { useAuthStore } from "../stores/index";

const api = axios.create({
  baseURL: "https://backend-ecomer.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  // console.log({token});

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export { api };
