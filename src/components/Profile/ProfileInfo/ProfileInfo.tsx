import classes from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


const ProfileInfo: React.FC<ProfilePropsType> = React.memo((props) => {

    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.background_image}>
                <img
                    src="https://images.unsplash.com/photo-1596313072836-5b6bbce5780d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1616&q=80"
                    alt="street"/>
            </div>
            <div className={classes.avatar}>
                <img
                    src={props.userProfile.photos.small ? props.userProfile.photos.small : ''}
                    alt="avatar"/>
            </div>

            <ProfileStatus status={'Лечу в космос'}/>
        </div>
    )
})

export default ProfileInfo;