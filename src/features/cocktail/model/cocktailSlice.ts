import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCocktailByCode } from '../lib/api';

interface CocktailState {
  cocktails: unknown[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CocktailState = {
  cocktails: [],
  status: 'idle',
};

export const getCocktail = createAsyncThunk(
  'cocktail/fetchCocktail',
  async (code: string) => {
    return await fetchCocktailByCode(code);
  }
);

const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCocktail.pending, (state) => {
        //TODO - Makarov add enums
        state.status = 'loading';
      })
      .addCase(getCocktail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cocktails = action.payload;
      })
      .addCase(getCocktail.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cocktailSlice.reducer;
