import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
    deleteFromFavorites: (state, { payload }) => {
      state.favoriteItems = state.favoriteItems.filter(
        ({ id }) => id !== payload.id
      );
    },
  },
});

export const { addToFavorites, deleteFromFavorites, clearAllFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
