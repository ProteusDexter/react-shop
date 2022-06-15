// viene de html 13 se consolidan todos los shopping cart como <orderItem/>
//check ok
import React from 'react';
import {OrderItem} from "../components/orderItem"
import "../styles/myOrder.scss"


const MyOrder = (children) => {
    return (

        <aside className="myOrder">
            <div className="title-container">
                <img src="../assets/icons/flechita.svg" alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                <OrderItem />
                    {children}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div> 
        </aside>
        
    );
}

export {MyOrder};