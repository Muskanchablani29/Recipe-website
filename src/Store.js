// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/Reducers/authReducers';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;
