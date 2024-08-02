import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

interface ILayout {
    title: string
    children: React.ReactNode
}

const Layout = ({children, title}:ILayout) => {

    return <div>
        <Header title={title} />
        <Main>
            {children}
        </Main>
        <Footer />
    </div>
    
}

export {Layout};