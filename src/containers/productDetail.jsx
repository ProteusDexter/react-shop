// viene de html 12 y tiene un hijo productInfo ademas cambia de product
//check ok
import React from 'react';
import { ProductInfo } from '../components/productInfo';
import "../styles/productDetail.scss";
const ProductDetail = (children) => {
  return (
    <aside className="productDetail">
      <div className="productDetail-close">
        <img src="../assets/icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
        {children}
    </aside>



  );
}

export {ProductDetail};
