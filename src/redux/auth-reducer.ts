import {AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

//types
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthReducerACsType = ReturnType<typeof setAuthUserData>

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
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

//thunks
export const authMe = (): AppThunkType => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0){
                dispatch(setAuthUserData(data.data))
            }
        })
}