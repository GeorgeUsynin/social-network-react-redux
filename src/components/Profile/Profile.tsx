import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageState.posts}/>
        </div>
    );
}

export default Profile;