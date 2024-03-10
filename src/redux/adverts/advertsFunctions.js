export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.advertItems = [...state.advertItems, ...payload];
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
