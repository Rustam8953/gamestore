import React from 'react';
import { useSelector } from 'react-redux';
import { ItemsInCart } from '../../components/items-cart';
import { calcTotalPrice } from '../../components/utils';
import { OrderItem } from './../../components/order-item';
import './order-page.scss';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.ItemInCart);

    if (items.length < 1) {
        return <ul>Ваша корзина пуста</ul>
    }
    return (
        <div className = 'orderPage'>
            <div className='orderPAge__left'>
                { items.map(game => <OrderItem game={game} />)}
            </div>
            <div className='orderPage__right'>
                <div className='orderPage__right-total'>
                    <span>{items.length} на сумму {calcTotalPrice(items)} руб.</span>
                </div>
            </div>
        </div>
    )
}