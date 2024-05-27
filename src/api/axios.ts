import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:" + process.env.PORT,
  timeout: 5000, // 请求超时时间
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

// 导出实例
export default instance;
