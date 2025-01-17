import axios, { type AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4001/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
