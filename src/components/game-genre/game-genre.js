import React from 'react';
import './game-genre.scss';

export const GameGenre = ({ genre }) => {
    return (
        <span className='gameGenre'>
            {genre}
        </span>
    )
}