import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'content-type': 'application/json',
    }
})

AxiosClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            (config as any).headers.Authorization = 'Bearer ' + token;
        }
        (config as any).headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
});

export default AxiosClient