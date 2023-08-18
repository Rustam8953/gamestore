import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from './cart-block';
import './header.scss';

export const Header = () => {
    return (
        <div className = 'header'>
            <div className = 'header__wrapper'>
                <Link to = '/' className = 'header__wrapper-title'>
                    Game Store
                </Link>
            </div>
            <div className = 'header__cart header__cart-btn'>
                <CartBlock />
            </div>
        </div>
    )
}