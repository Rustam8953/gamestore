import React from 'react';
import { useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import { GameCover } from './../game-cover';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './order-item.scss';


export const OrderItem = ({game}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }

    return (
        <div className = 'orderItem'>
            <div className='orderItem__cover'>
                <GameCover image={game.image} />
            </div>
            <div className='orderItem__title'>
                <span>{game.title}</span>
            </div>
            <div className='orderItem__price'>
                <span>{game.price} руб.</span>
                <TiDeleteOutline size={25} className='orderItem__price-delete-icon' onClick={handleClick} />
            </div>
        </div>
    )
}