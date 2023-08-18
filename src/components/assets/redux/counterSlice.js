import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
  value2: {},
  counter: 1,
};

export const counterSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    goToIndex: (state) => {
      state.value = "Home";
    },
    goToDetails: (state) => {
      state.value = "Detail";
    },
    getMovieDetails: (state, action) => {
      state.value2 = action.payload;
    },
    getCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { goToIndex, goToDetails, getMovieDetails, getCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
