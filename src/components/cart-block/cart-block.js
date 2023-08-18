import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartMenu } from './../cart-menu';
import { calcTotalPrice } from '../utils.js';
import { ItemsInCart } from './../items-cart';
import './cart-block.scss';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false) //отображение корзины при клике на иконку
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
    }, [navigate]);

    return (
        <div className = 'cartBlock' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
            <ItemsInCart quantity={items.length} />
            <AiOutlineShoppingCart size={20} className = 'cartBlock__icon' />
            <span className = 'cartBlock__total'>{totalPrice} руб.</span>
            {isCartMenuVisible && <CartMenu items={ items } onClick={handleClick} />}
        </div>
    )
}