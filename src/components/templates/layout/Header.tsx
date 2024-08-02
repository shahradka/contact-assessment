import React from "react";

interface IHeader {
    title:string
}

const Header = ({title}:IHeader) => {

    return <header>
        {title}
    </header>
    
}

export default Header;