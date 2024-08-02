import React, { HTMLProps } from "react";

interface IHeader extends HTMLProps<HTMLDivElement> {
    title:string
}

const Header = ({title, ...restProps}:IHeader) => {

    return <header {...restProps}>
        {title}
    </header>
    
}

export default Header;