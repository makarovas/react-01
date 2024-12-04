import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import cocktailReducer from '../../model/cocktailSlice';

import { MENU_ITEMS } from '../../../../shared/config/menu';
import { CocktailMenu } from './CocktailMenu';

describe('CocktailMenu', () => {
  const store = configureStore({
    reducer: {
      cocktail: cocktailReducer,
    },
  });

  it('renders all menu items', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CocktailMenu />
        </MemoryRouter>
      </Provider>
    );

    MENU_ITEMS.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
