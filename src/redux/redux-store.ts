import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer, UsersReducerACsType} from "./users-reducer";
import {profileReducer, ProfileReducerACsType} from "./profile-reducer";
import {DialogPageACsType, dialogsReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer, AuthReducerACsType} from "./auth-reducer";
import thunk, {ThunkAction} from 'redux-thunk'

//types
export type AppStateType = ReturnType<typeof rootReducer>

//type of all actions
export type AppActionsType = UsersReducerACsType | ProfileReducerACsType | DialogPageACsType | AuthReducerACsType

//if we want to use thunk inside thunk we need to use this type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

//main reducer
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

//create store
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

