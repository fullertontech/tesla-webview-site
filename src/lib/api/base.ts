// base.ts
import axios from "axios";

export type TeslaAPIResultData<T> = {
  code: string;
  message: string;
  result: T;
};

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token)
    config.headers["x-ftc-authorization"] =
      localStorage.getItem("access_token");
  return config;
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error("API Error:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);
