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
            .get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUser(id: number) {
        return axiosInstance
            .delete(`/follow/${id}`).then(response => response.data)
    },
    followUser(id: number) {
        return axiosInstance
            .post(`/follow/${id}`).then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return axiosInstance
            .get(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: string) {
        return axiosInstance
            .get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return axiosInstance
            .put(`/profile/status`,{
                status
            }).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return axiosInstance
            .get('/auth/me').then(response => response.data)
    }
}