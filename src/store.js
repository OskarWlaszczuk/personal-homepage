import { configureStore } from '@reduxjs/toolkit';
import { portfolioReducer } from './portfolioSlice';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);