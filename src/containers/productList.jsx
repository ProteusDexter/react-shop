//check ok

import React from 'react';
import { ProductItem } from '../components/productItem';
import "../styles/productList.scss"

const ProductList = (children) => {
    return (
        <section className="main-container">
            <div className="productList">
                <ProductItem />
                {children}
            </div>
    
        </section>        
    );
}
export {ProductList};