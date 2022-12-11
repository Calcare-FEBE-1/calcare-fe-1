import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: false, list: [] };

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { startFetch, save } = foodsSlice.actions;

export const fetchFoods = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());
  const foods = await axios({
    method: "GET",
    url: "https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats",
  });

  dispatch(save(foods.data));
};

const foodsReducer = foodsSlice.reducer;

export default foodsReducer;
