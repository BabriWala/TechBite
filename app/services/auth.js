import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; //localhost:5000

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registerUser = async (data) => {
  const response = await API.post(`/auth/register`, data, {
    withCredentials: true,
  });
  return response.data;
};

// registerUser() => registerUser({email, password, fristName, lastName}) =>

export const loginUser = async (data) => {
  const response = await API.post(`/auth/login`, data, {
    withCredentials: true, // Important for Setting Cookies
  });
  return response.data;
};

// call er age /api/auth/users -> axios
API.interceptors.request.use((config) => {
  // console.log(config, "this is interceptors");
  const token = localStorage.getItem("accessToken");
  // console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
//````````````````````````````success, errro
API.interceptors.response.use(
  (response) => {
    return response; // getUser
  },
  async (error) => {
    // 401
    const originalRequest = error.config; // getUser
    console.log(originalRequest, "original request");

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // firsttime
      try {
        const res = await API.post(
          "/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.data.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return API(originalRequest); // getUser
      } catch (error) {
        console.error("Refresh Failed: ", error);

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
