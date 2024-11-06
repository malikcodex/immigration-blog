import React from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const Layout = ({children, title, keywords, description, meta}) => {
    return (
        <>
        <Header keywords={keywords} title={title} description={description} meta={meta} />
        {children}
        <Footer />
        </>
    )
}

export default Layout;