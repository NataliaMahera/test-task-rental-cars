import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './adverts/advertsReduser';
import { favoritesReducer } from './favorites/favoritesReducer';
import persistReducer from 'redux-persist/es/persistReducer';

const favoritesConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistReducer(favoritesConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
