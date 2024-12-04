import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer, { getCocktail } from './cocktailSlice';

describe('cocktailSlice', () => {
  const store = configureStore({
    reducer: {
      cocktail: cocktailReducer,
    },
  });

  it('should handle initial state', () => {
    expect(store.getState().cocktail).toEqual({
      cocktails: {},
      status: 'idle',
      error: null,
    });
  });

  it('should handle getCocktail.pending', () => {
    store.dispatch(getCocktail.pending('', 'margarita'));
    expect(store.getState().cocktail.status).toBe('loading');
  });

  it('should handle getCocktail.fulfilled', () => {
    const mockCocktail = {
      strDrink: 'Margarita',
    };

    const mockResponse = { drinks: [mockCocktail] };

    store.dispatch(
      getCocktail.fulfilled(
        mockResponse,
        '',
        'margarita'
      )
    );

    expect(store.getState().cocktail.status).toBe('succeeded');
    expect(store.getState().cocktail.cocktails.margarita).toEqual(mockCocktail);
  });

  it('should handle getCocktail.rejected', () => {
    store.dispatch(
      getCocktail.rejected(new Error('Failed to fetch'), '', 'margarita')
    );

    expect(store.getState().cocktail.status).toBe('failed');
    expect(store.getState().cocktail.error).toBe('Failed to fetch');
  });
});
