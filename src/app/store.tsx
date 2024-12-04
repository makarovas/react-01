import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from '../features/cocktail/model/cocktailSlice';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
