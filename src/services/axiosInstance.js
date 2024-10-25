import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
