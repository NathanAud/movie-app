import axios from "axios";

let bearerToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU4NDViNDM4NWNhMTJjNmIwODY1YzJjYzE4ZjIyNSIsIm5iZiI6MTc1ODI2NDk1MC4zNTYsInN1YiI6IjY4Y2NmZTc2MzMyNzUwYThlMGJkMTAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jf2o4A-wybBLnZLDdgFBEWUTN8CpypsqXYQUNtpMmTc"

const API = axios.create();

export const setAxiosConfig = (token: string) => {
  // bearerToken = token;
};

API.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default API;
