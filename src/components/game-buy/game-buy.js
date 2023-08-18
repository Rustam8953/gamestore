import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './game-buy.scss';
import { Button } from './../button';
import { deleteItemFromCart, setItemInCart } from './../../redux/cart/reducer';

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id) // some - возвращает значение true or false, в зависимости от элемента, который удовлетворяет заданному условию (меняю текст кнопки в зависимости от нахождения товара в корзине)

    const handleClick = (e) => {
        e.stopPropagation();
        if ( isItemInCart ) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
        
    } 
    return (
        <div className='gameBuy'>
           <span classNAme='gameBuy__price'></span>
           <Button type={isItemInCart? 'secondary' : 'primary'} onClick={ handleClick } > 
               { isItemInCart ? 'УБРАТЬ ИЗ КОРЗИНЫ' : (game.price + ' руб.') }
           </Button>
        </div>
    ) // secondary/primary - меняю стиль кнопок, заданных в компоненте button
}