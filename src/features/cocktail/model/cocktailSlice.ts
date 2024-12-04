import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCocktailByCode } from '../lib/api';

interface Cocktail {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strMeasure: string;
  strIngredient: string;
}

interface CocktailState {
  cocktails: Record<string, Cocktail>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CocktailState = {
  cocktails: {},
  status: 'idle',
  error: null,
};

export const getCocktail = createAsyncThunk(
  'cocktail/fetchCocktail',
  async (code: string, { getState }) => {
    const state = getState() as { cocktail: CocktailState };
    if (state.cocktail.cocktails[code]) {
      return { code, cocktail: state.cocktail.cocktails[code] };
    }
    const response = await getCocktailByCode(code);
    return { code, cocktail: response.drinks[0] };
  }
);

const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCocktail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getCocktail.fulfilled,
        (
          state,
          action: PayloadAction<{ code: string; cocktail: Cocktail }>
        ) => {
          state.status = 'succeeded';
          state.cocktails[action.payload.code] = action.payload.cocktail;
        }
      )
      .addCase(getCocktail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cocktail';
      });
  },
});

export default cocktailSlice.reducer;
