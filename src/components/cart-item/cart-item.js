import React from 'react';
import './cart-item.scss';
import { TiDeleteOutline } from 'react-icons/ti';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { useDispatch } from 'react-redux';

export const CartItem = ({
    title,
    price,
    id
}, {game}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }
    return (
        <div className='cartItem'>
            <span>{title}</span>
            <div className='cartItem__price' onClick={handleClick}><span>{price} руб.</span><TiDeleteOutline size={20} /></div>
        </div>
    ) 
}