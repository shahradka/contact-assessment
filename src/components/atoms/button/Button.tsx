import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import "./styles.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{

    variant?: "icon" | "normal"

    size?: "tiny" | "small" | "medium" | "large"

}

const Button = ({children, variant="icon",  size="tiny", className, ...restProps}:IButton) => {

    return <button className={classNames([className, "button", 
    {["icon"]:variant === 'icon', 
    ["normal"]:variant === 'normal',
    }, size])} {...restProps}>
        {children}
    </button>

}

export default Button;