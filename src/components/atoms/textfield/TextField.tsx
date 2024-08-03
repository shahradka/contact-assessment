import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

interface ITextField extends InputHTMLAttributes<HTMLInputElement>{
    variant?:'small' | 'medium'
}

const TextField = ({className, variant="medium",...restProps}:ITextField) => {
    return <input className={classNames(["textField", className, variant])} {...restProps}/>
}

export default TextField;