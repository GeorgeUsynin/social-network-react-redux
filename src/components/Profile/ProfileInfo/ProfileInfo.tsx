import classes from "./ProfileInfo.module.css";
import avatar from "../../../images/avatar.png";
import React from "react";

const ProfileInfo = () =>{
    return(
        <div>
            <div className={classes.background_image}>
                <img
                    src="https://images.unsplash.com/photo-1596313072836-5b6bbce5780d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1616&q=80"
                    alt="street"/>
            </div>
            <div className={classes.avatar}>
                <img
                    src={avatar}
                    alt="avatar"/>
            </div>
        </div>
    )
}

export default ProfileInfo;