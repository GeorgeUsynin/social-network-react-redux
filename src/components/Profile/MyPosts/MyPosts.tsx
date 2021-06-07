import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type FormDataType = {
    newPostMessage: string
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    const mappedPosts = props.profilePageState.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                                    likeCounts={p.likeCounts}/>)

    const onSubmitHandler = (values: FormDataType) => {
        props.addPost(values.newPostMessage)
    }

    return (
        <div className={classes.post_wrapper}>
            <div>
                My posts
            </div>
            <NewPostMessageReduxForm onSubmit={onSubmitHandler}/>
            <div className={classes.posts}>
                {
                    mappedPosts
                }
            </div>
        </div>
    );
}
export default MyPosts;

const maxLength10 = maxLengthCreator(10)

const NewPostMessage: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostMessage'}
                    component={Textarea} //в Textarea приходят пропсы input, meta, ...restProps
                    validate={[required, maxLength10]}
                    placeholder={'Enter new message'}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const NewPostMessageReduxForm = reduxForm<FormDataType>({form: 'PostMessageForm'})(NewPostMessage)
