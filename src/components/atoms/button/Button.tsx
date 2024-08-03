import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import "./styles.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{

    variant?: "icon" | "normal"
    
    size?: "tiny" | "small" | "medium" | "large"

    color?: "primary" | "secondary" | "gray" | "transparent"

}

const Button = ({children, variant="icon",  size="tiny", className, color="secondary", ...restProps}:IButton) => {

    return <button className={classNames([className, "button", 
    {["icon"]:variant === 'icon', 
    ["normal"]:variant === 'normal',
    ["has-border"]: color !== "transparent",

    }, size], color !== "transparent"? ["has-border", color] : color)} {...restProps}>
        {children}
    </button>

}

export default Button;