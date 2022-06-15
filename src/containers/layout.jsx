// check ok
import React from 'react';
import {Header} from "../components/header"
import { ProductList } from './productList';

const Layout = ({children}) => {
    return (
    <div className="Layout">
        <Header />
        {children}
        
        
    </div>
    );
}

export {Layout};