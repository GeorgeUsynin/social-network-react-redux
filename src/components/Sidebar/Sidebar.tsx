import React from "react";
import cls from "./Sidebar.module.css"
import Navbar from "./Navbar/Navbar";
import FriendsBarContainer from "./FriendsBar/FriendsBarContainer";


const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <Navbar/>
            <FriendsBarContainer/>
        </div>
    )
}
export default Sidebar;

