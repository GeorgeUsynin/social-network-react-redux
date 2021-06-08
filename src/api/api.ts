import axios from "axios";
import {UserProfileType} from "../redux/profile-reducer";
import {UserType} from "../redux/users-reducer";


// axiosInstance - сконфигурированный axios, withCredentials: true - автоматически отправляет куки в запросах
export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // baseURL:'https://social-network.samuraijs.com/api/2.0.1',
    withCredentials: true,
    headers: {
        "API-KEY": "941c5469-5622-4ccf-b6fe-38f424109ae0"
    }
})

// response types

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type DefaultResponseType<D> = {
    data: D
    fieldsErrors?: Array<string>
    messages: Array<string>
    resultCode: ResultCodes
}

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

type MeResponseDataType = {
    email: string
    id: number
    login: string
}

type LoginResponseType = {
    data: { userId: number }
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: ResultCodes | ResultCodeForCaptcha
}


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance
            .get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
                debugger
                return response.data
            })
    },
    unFollowUser(id: number) {
        return axiosInstance
            .delete<DefaultResponseType<{}>>(`/follow/${id}`).then(response => response.data)
    },
    followUser(id: number) {
        return axiosInstance
            .post<DefaultResponseType<{}>>(`/follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return axiosInstance
            .get<UserProfileType>(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: string) {
        return axiosInstance
            .get<string>(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return axiosInstance
            .put<DefaultResponseType<{}>>(`/profile/status`, {
                status
            }).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return axiosInstance
            .get<DefaultResponseType<MeResponseDataType>>('/auth/me').then(response => response.data)
    },

    loginMe(email: string, password: string, rememberMe: boolean) {
        return axiosInstance
            .post<LoginResponseType>('/auth/login', {
                email,
                password,
                rememberMe
            })
            .then(response => response.data)
    },

    logout() {
        return axiosInstance
            .delete<DefaultResponseType<{}>>('/auth/login').then(response => response.data)
    }

}