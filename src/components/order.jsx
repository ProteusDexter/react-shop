//viene del html 10  hijo de orders

import React from 'react';
import "../styles/order.scss"
const Order = () => {
    return (
        <div className="order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src="../assets/icons/flechita.svg" alt="arrow"/>
      </div> 
    );
}

export {Order};