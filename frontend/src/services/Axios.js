import axios from "axios";

const instance = axios.create({
  baseURL: "https://benutrition.vercel.app/api",
});
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || "";
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const Axios = instance;
