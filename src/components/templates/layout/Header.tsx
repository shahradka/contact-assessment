import React, { HTMLProps } from "react";

interface IHeader extends HTMLProps<HTMLDivElement> {
    title:string
    innerClassName?: string
}

const Header = ({title, innerClassName,...restProps}:IHeader) => {

    return <header {...restProps}>
            <div className={innerClassName}>
                {title}
            </div>
    </header>
    
}

export default Header;