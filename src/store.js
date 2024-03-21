import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    // Middleware et DevTools sont automatiquement configurés par configureStore
});

export default store;
