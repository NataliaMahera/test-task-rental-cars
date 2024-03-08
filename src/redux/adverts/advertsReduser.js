import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllAdvertsThunk } from './advertsOperations';
import {
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './advertsFunctions';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const getActions = (type) => isAnyOf(getAllAdvertsThunk[type]);

const initialState = { advertItems: [], isLoading: false, error: null };

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(getAllAdvertsThunk.fulfilled, handleFulfilledGet)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
