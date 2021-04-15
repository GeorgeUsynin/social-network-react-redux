import React from "react";
import StoreContext from "../../../StoreContext";
import FriendsBar from "./FriendsBar";

type FriendsBarType = {

}

const FriendsBarContainer: React.FC<FriendsBarType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <FriendsBar friends={store.getState().sidebar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default FriendsBarContainer;