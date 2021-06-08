import React from "react";
import {WrappedFieldProps} from "redux-form";
import cls from './FormsControls.module.css'

type CustomFieldProp = {
    placeholder?: string
}

//HOC for textarea and input
export const Element = (ElementWrapper: any) => ({meta, input, ...restProps}: WrappedFieldProps & CustomFieldProp) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div className={`${cls.formsControl} ${hasError ? cls.error : ''}`}>
                <ElementWrapper {...input} {...restProps}/>
            </div>
            {hasError && <span className={cls.error}>{meta.error}</span>}
        </div>
    )
}


// export const Textarea: React.FC<WrappedFieldProps & CustomFieldProp> = ({input, meta, ...restProps}) => {
//
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div>
//             <div className={`${cls.formsControl} ${hasError ? cls.error : ''}`}>
//                 <textarea {...input} {...restProps}/>
//             </div>
//             {hasError && <span className={cls.error}>{meta.error}</span>}
//         </div>
//     )
// }
//
// export const Input: React.FC<WrappedFieldProps & CustomFieldProp> = ({input, meta, ...restProps}) => {
//     debugger
//
//     const hasError = meta.touched && meta.error
//
//     return (
//         <div>
//             <div className={`${cls.formsControl} ${hasError ? cls.error : ''}`}>
//                 <input {...input} {...restProps}/>
//             </div>
//             {hasError && <span className={cls.error}>{meta.error}</span>}
//         </div>
//     )
// }