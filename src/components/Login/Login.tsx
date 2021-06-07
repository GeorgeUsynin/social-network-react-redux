import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginMe} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: mapDispatchToPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginMe(formData.login, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            {/*this callback => (onSubmit) will be called by handleSubmit callback in tag <form/>.
            handleSubmit call:
            1) e.preventDefault
            2) get all form data and put them to object
            3) calls onSubmit(formData) => callback in LoginReduxForm
            */}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps =  (state: AppStateType) => {
    return {
    }
}

type mapDispatchToPropsType = {
    loginMe: (email: string, password: string, rememberMe: boolean) => void
}

export default connect (mapStateToProps,{loginMe})(Login)