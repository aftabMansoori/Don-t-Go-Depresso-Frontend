import axios from "axios";
import { base_url } from "./api";

export const axiosConfig = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  function (config) {
    const Token = JSON.parse(localStorage.getItem("token"));
    if (Token) config.headers["Authorization"] = "Bearer " + Token;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
