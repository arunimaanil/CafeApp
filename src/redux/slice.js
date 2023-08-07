import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch api details
export const fetchMenu = createAsyncThunk(
  "menuItems/getLists",
  async () => {
    return axios
      .get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`)
      .then((res) => res.data);
  }
);

export const slice = createSlice({
  name: "menuItems",
  initialState: {
    menuList: [],
    status: null,
  },

  extraReducers: {
    [fetchMenu.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMenu.fulfilled]: (state, { payload }) => {
      state.menuList = payload;
      state.status = "success";
    },
    [fetchMenu.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default slice.reducer;
