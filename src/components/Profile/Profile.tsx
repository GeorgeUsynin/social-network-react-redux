import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addNewProfilePost, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
    addNewProfilePost: (message: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageState.posts} addNewProfilePost={props.addNewProfilePost}/>
        </div>
    );
}

export default Profile;