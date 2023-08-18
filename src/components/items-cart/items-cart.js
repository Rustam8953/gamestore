import React from 'react';
import './items-cart.scss';

export const ItemsInCart = ({ 
    quantity = 0
 }) => {
    return quantity > 0 ? (           /* отображение количества элементов при условии, что i > 0*/
        <div className='itemsCart'>
            { quantity } 
        </div>
    ) : null
}