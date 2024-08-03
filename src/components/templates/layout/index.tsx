import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import "./styles.scss";
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import classNames from 'classnames';

interface ILayout {
    title: string
    contactRecordsComp?: React.ReactNode
    children: React.ReactNode
}

const Layout = ({children, title, contactRecordsComp}:ILayout) => {
    
    const {mobile, tablet} = useMediaQueries();

    return <div className='layout'>
        <Header className='header-footer header' title={title} innerClassName={classNames({'inner-small':mobile, 'inner-large':tablet})} />
        {contactRecordsComp}
        <Main className='main'>
            {children}
        </Main>
        <Footer className='header-footer footer'/>
    </div>
    
}

export {Layout};