import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer} from "./auth-reducer";

//types
export type AppStateType = ReturnType<typeof rootReducer>

//main reducer
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

//create store
const store = createStore(rootReducer)

export default store;

