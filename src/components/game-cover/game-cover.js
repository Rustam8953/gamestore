import React from 'react';
import './game-cover.scss';

export const GameCover = ({ image = "" }) => {
    return (
        <div className = 'gameCover' style = {{backgroundImage: `URL(${image})`}}>
            
        </div>
    )
}