import React, { HTMLProps } from "react";

interface IMain extends HTMLProps<HTMLDivElement>{
    children:React.ReactNode
}

const Main = ({children, ...restProps}:IMain) => {

    return <main  {...restProps}>
        {children}
    </main>
    
}

export default Main;