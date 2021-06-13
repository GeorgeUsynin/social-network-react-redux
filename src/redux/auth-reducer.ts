import {AppThunkType} from "./redux-store";
import {authAPI, ResultCodeForCaptcha, ResultCodes} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

//types
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type LoginType = {}

export type AuthReducerACsType = ReturnType<typeof setAuthUserData>

export type StopSubmitACType = ReturnType<typeof stopSubmit>

//actionCreators
export const setAuthUserData = (data: AuthType) => {
    return {
        type: SET_AUTH_USER_DATA,
        data
    } as const
}

//initialState
const initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

//reducer
export const authReducer = (state: AuthType = initialState, action: AuthReducerACsType): AuthType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data}
        default:
            return state
    }
}

//thunks
export const authMe = (): AppThunkType => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === ResultCodes.Success) {
                const {id, email, login} = data.data
                dispatch(setAuthUserData({
                    userId: id,
                    email,
                    login,
                    isAuth: true
                }))
            }
        })
}

export const loginMe = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    authAPI.loginMe(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(authMe())
            } else if (data.messages.length > 0) {
                let message = data.messages[0]
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === ResultCodes.Success) {
                dispatch(setAuthUserData({
                    userId: null,
                    email: null,
                    login: null,
                    isAuth: false
                }))
            }
        })
}