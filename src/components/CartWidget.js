import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

function CartWidget() {
    return (
      <div className="cart-widget">
        <IoCartOutline size={24} />
        <span className="cart-count">3</span>
      </div>
    );
  }
  

export default CartWidget;
