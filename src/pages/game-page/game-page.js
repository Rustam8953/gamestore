import React from 'react';
import { useSelector } from 'react-redux';
import { GameCover } from './../../components/game-cover';
import { GameGenre } from './../../components/game-genre';
import { GameBuy } from './../../components/game-buy';
import './game-page.scss';

export const GamePage = () => {
    const game = useSelector((state) => state.game.currentGame);
    if (!game) return null

    return (
        <div className='gamePage'>
            <h1 className='gamePage__title'>{game.title}</h1>
            <div className='gamePage__content'>
                <div className='gamePage__content-left'>
                    <iframe width='90%' height='400px' src={game.video} title='Youtube Video Player' frameBorder='0'></iframe>
                </div>
                <div className='gamePage__content-right'><GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className='gamePage__content-right secondary-text'>Популярные метки этого продукта:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                    <div className='gamePage__content-buy-game'><GameBuy game={game}/></div>
                </div>
            </div>
        </div>
    )
}