import {AppThunkType} from "./redux-store";
import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

//types
type  initialStateType = {
    initialized: boolean
}

export type AppReducerACsType = ReturnType<typeof initializedSuccess>

//actionCreators
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

//initialState
const initialState: initialStateType = {
    initialized: false
}

//reducer
export const appReducer = (state: initialStateType = initialState, action: AppReducerACsType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise]).then(
        () => {
            dispatch(initializedSuccess())
        }
    )
}
