import classNames from "classnames";
import React, { forwardRef, InputHTMLAttributes } from "react";
import "./styles.scss";

interface ITextField extends InputHTMLAttributes<HTMLInputElement>{
    variant?:'small' | 'medium'
}

const TextField = forwardRef<HTMLInputElement, ITextField>(({className, variant="medium",...restProps}:ITextField, ref) => {
    return <input ref={ref} className={classNames(["textField", className, variant])} {...restProps}/>
})

TextField.displayName = "TextField";

export default TextField;