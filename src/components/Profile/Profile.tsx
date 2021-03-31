import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageState: ProfilePageType
    addNewProfilePost: (message: string) => void
    changeNewTextProfilePost: (message: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageState.posts} addNewProfilePost={props.addNewProfilePost}
                     newPostMessage={props.profilePageState.newPostMessage}
                     changeNewTextProfilePost={props.changeNewTextProfilePost}/>
        </div>
    );
}

export default Profile;