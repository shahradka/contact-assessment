import React from "react";

interface IMain {
    children:React.ReactNode
}

const Main = ({children}:IMain) => {

    return <main>
        {children}
    </main>
    
}

export default Main;