import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost/WebMovie/include/request/"
});

// Api.interceptors.request.use(async config => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default Api;