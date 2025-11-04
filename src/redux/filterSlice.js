import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    keywords: "",
    location: "",
    companyType: "",
    industry: "",
    similar: "",
    tech: "",
    employees: [0, 100],
    privateOnly: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { field, value } = action.payload;
      state.filters[field] = value;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { updateFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
