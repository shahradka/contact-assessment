import React, { HTMLProps } from "react";

interface IMain extends HTMLProps<HTMLDivElement>{
    children:React.ReactNode
}

const Main = ({children, ...restProps}:IMain) => {

    return <div className="main-wrapper">
            <main  className="main" {...restProps}>
                {children}
            </main>    
        </div>
    
}

export default Main;