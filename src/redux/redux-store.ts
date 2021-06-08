import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer, UsersReducerACsType} from "./users-reducer";
import {profileReducer, ProfileReducerACsType} from "./profile-reducer";
import {DialogPageACsType, dialogsReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer, AuthReducerACsType, StopSubmitACType} from "./auth-reducer";
import thunk, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

//types
export type AppStateType = ReturnType<typeof rootReducer>

//type of all actions
export type AppActionsType = UsersReducerACsType | ProfileReducerACsType | DialogPageACsType | AuthReducerACsType | StopSubmitACType

//if we want to use thunk inside thunk we need to use this type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

//main reducer
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})



//create store
const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store

export default store;

