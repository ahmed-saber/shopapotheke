import createSagaMiddleware from 'redux-saga';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import homeSaga from './sagas/homeSagas';
import reducer from './combineReducers/homeReducer';

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer,
	devTools: devMode,
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(homeSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
