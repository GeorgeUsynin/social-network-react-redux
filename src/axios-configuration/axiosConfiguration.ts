import axios from "axios";


// axiosInstance - сконфигурированный axios, withCredentials: true - автоматически отправляет куки в запросах
export const  axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // baseURL:'https://social-network.samuraijs.com/api/2.0.1',
    withCredentials: true,
    headers: {
        "API-KEY": "a657ef2e-9a7d-4c7c-abf7-6d73ab758a53"
    }
})