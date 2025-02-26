// apiClient.ts
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';


const apiURL = import.meta.env.VITE_API_URL; // Replace with your API base URL
// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: apiURL, // Replace with your API base URL
    timeout: 10000, // 10 seconds timeout
});

// Request interceptor: Attach token or any custom header before request is sent
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Example: Add authentication token if available
        const token = localStorage.getItem('token');
        if (token) {
            // Ensure headers object exists
            config.headers = config.headers || {};
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response interceptor: Process responses or handle errors globally
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Optionally transform the response data here
        console.log('Response:', response);
        return response;
    },
    (error: AxiosError) => {
        // Global error handling (e.g., unauthorized access)
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - maybe redirect to login?');
            // You can add logic to log out the user or refresh the token
        }
        return Promise.reject(error);
    }
);

export default apiClient;
