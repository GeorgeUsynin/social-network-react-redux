import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    userProfile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={classes.profile}>
            <ProfileInfo
                userProfile={props.userProfile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;