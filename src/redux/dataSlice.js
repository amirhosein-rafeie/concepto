import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeType: "companies",
  filterType: "popular",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setActiveType: (state, action) => {
      state.activeType = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { setActiveType, setFilterType } = dataSlice.actions;
export default dataSlice.reducer;
