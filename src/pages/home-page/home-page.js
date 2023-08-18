import React from 'react';
import './home-page.scss';
import { GameItems } from './../../components/game-items'

const GAMES = [
    {
        image: 'https://avatars.mds.yandex.net/i?id=198b96684c80a3f4f4a695d30d7e532f-4801093-images-thumbs&n=13',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=37166c5dcd6ebe36e476478008d6584f-5666582-images-thumbs&n=13',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=67fa7ddbfdc591df01cf2320d67b8754-5874167-images-thumbs&n=13',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: 'https://raw.githubusercontent.com/brian7346/game-store/main/public/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=80d530db1da26ddc1af87063660455f1-4303774-images-thumbs&n=13',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=c1b07f9d93dd88a1e107b71c8e78aa4c-5519673-images-thumbs&n=13',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=4388f51080ccf4d38f1529eab81ae308-5235953-images-thumbs&n=13',
        title: 'World of Tanks',
        genres: ['танковый симулятор'],
        video: 'https://www.youtube.com/embed/iDt7ZJ0rcOc',
        price: 2789,
        id: 7,
        description: 'Играйте в бесплатный командный шутер с постоянно расширяющимся парком исторической техники, потрясающей графикой, восхитительными картами и оркестровым саундтреком. Вас ждёт уникальное сочетание стратегии и активного игрового процесса!'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=dcbc9241cbef7bd7186da5f2fc608c96-5669789-images-thumbs&n=13',
        title: 'Kingdom Come: Deliverance',
        genres: ['Экшен', 'РПГ'],
        video: 'https://www.youtube.com/embed/yKO52lZ3eMg',
        price: 3459,
        id: 8,
        description: 'Компьютерная игра в жанре action/RPG от первого лица с открытым миром, разработанная чешской студией Warhorse Studios и выпущенная компанией Deep Silver для платформ PlayStation 4, Xbox One и Microsoft Windows в 2018 году. Особенностью игры является упор на историческую достоверность: в игре детально воспроизведены одежда, вооружение, архитектура и общественное устройство средневековой Богемии.'
    },
    {
        image: 'https://avatars.mds.yandex.net/i?id=d65cb9d3816b136a8c22711a8ffc18b9-5479175-images-thumbs&n=13',
        title: 'Escape from Tarkov',
        genres: ['Шутер от первого лица', 'РПГ'],
        video: 'https://www.youtube.com/embed/a70_QmnjhCU',
        price: 2190,
        id: 9,
        description: 'Многопользовательская ролевая онлайн-игра от первого лица, разрабатываемая компанией Battlestate Games, сочетающая в себе жанры FPS и RPG c ММО-элементами'
    }
]


export const HomePage = () => {
    return (
        <div className = 'HomePage'>
            { GAMES.map(game => <GameItems game={game} key={game.id} />)}
        </div>
    )
}