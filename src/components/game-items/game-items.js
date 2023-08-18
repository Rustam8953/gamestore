import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GameCover } from './../game-cover';
import { GameBuy } from './../game-buy';
import { GameGenre } from './../game-genre';
import { setCurrentGame } from '../../redux/game/reducer';
import './game-items.scss';

export const GameItems = ({ game }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game)); //запрос на именно ту игру, на которую был совершен клик
        navigate(`/app/${game.title}`);  //задает URL на странице определенной игры
    }

    return (
        <div className='gameItems' onClick={ handleClick }>
            <GameCover image={game.image} />
            <div className='gameItems__details'>
                <span className='gameItems__details-title'>{game.title}</span>
                <div className='gameItems__details-genre'>{game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}</div>
                <div className='gameItems__details-buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}