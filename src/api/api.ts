import axios from "axios";


// axiosInstance - сконфигурированный axios, withCredentials: true - автоматически отправляет куки в запросах
export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // baseURL:'https://social-network.samuraijs.com/api/2.0.1',
    withCredentials: true,
    headers: {
        "API-KEY": "a657ef2e-9a7d-4c7c-abf7-6d73ab758a53"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(id: number) {
        return axiosInstance
            .delete(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id: number) {
        return axiosInstance
            .post(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    setUserProfile(userId: string){
        return axiosInstance
            .get(`/profile/${userId}`)
            .then(response=>{
                return response.data
            })
    }
}

export const authAPI = {
    authMe() {
        return axiosInstance
            .get('/auth/me')
            .then(response => {
                return response.data
            })
    }
}