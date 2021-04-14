import React from "react";
import cls from "./Sidebar.module.css"
import Navbar from "./Navbar/Navbar";
import FriendsBar from "./FriendsBar/FriendsBar";
import {SidebarType} from "../../redux/store";

type SidebarPropsType = {
    sideBarState: SidebarType
}


const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return(
        <div className={cls.sidebar}>
            <Navbar/>
            <FriendsBar friends={props.sideBarState.friends}/>
        </div>
    )
}
export default  Sidebar;

