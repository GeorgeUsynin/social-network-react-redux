import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    newDialogMessage: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogs = props.dialogPage.dialogs.map(d => {
        return (
            <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    const mappedMessages = props.dialogPage.messages.map(m => {
        return (
            <Message key={m.id} id={m.id} message={m.message}/>
        )
    })

    const onSubmitHandler = (values: FormDataType) => {
        props.addNewDialogMessage(values.newDialogMessage)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
                <NewDialogMessageReduxForm onSubmit={onSubmitHandler}/>
            </div>

        </div>
    )
}

export default Dialogs;

const maxLength50 = maxLengthCreator(50)

const NewDialogMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newDialogMessage'}
                component={Textarea}
                validate={[required, maxLength50]}
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewDialogMessageReduxForm = reduxForm<FormDataType>({form: 'DialogMessageForm'})(NewDialogMessageForm)