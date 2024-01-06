import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './theme/themeSlice';
import weatherReducer from './weather/weatherSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        weather: weatherReducer,
    },
})