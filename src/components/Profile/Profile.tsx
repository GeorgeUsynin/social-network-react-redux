import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageState.posts}
                     newPostMessage={props.profilePageState.newPostMessage}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;