import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import "./styles.scss";

interface ILayout {
    title: string
    children: React.ReactNode
}

const Layout = ({children, title}:ILayout) => {

    return <div className='layout'>
        <Header className='header-footer header' title={title} />
        <Main className='main'>
            {children}
        </Main>
        <Footer className='header-footer footer'/>
    </div>
    
}

export {Layout};