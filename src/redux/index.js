import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gamesReducer from './game/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
    }
})