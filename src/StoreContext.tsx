import React from "react";
import {RootStoreType} from "./redux/redux-store";

const StoreContext = React.createContext({} as RootStoreType)

type ProviderType = {
    store: RootStoreType
    children: React.ReactNode
}

export const Provider: React.FC<ProviderType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext