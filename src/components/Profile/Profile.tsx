import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: RootStoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;