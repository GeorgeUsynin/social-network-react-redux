import React from "react";
import {WrappedFieldProps} from "redux-form";
import cls from './FormsControls.module.css'

type CustomFieldProp = {
    placeholder: string
}

export const Textarea: React.FC<WrappedFieldProps & CustomFieldProp> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div className={`${cls.formsControl} ${hasError ? cls.error : ''}`}>
                <textarea {...input} {...restProps}/>
            </div>
            {hasError && <span className={cls.error}>{meta.error}</span>}
        </div>
    )
}