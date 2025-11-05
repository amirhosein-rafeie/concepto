import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
    location: "",
    companyType: "",
    industry: "",
    similar: "",
    tech: "",
    employees: [0, 100],
    privateOnly: false,
  },
  data: [],
  filteredData: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    updateFilter: (state, action) => {
      const { field, value } = action.payload;
      state.filters[field] = value;

      state.filteredData = state.data.filter((el) => {
        if (value === "" || value === initialState.filters[field]) return true;
        return el[field] == value;
      });
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredData = state.data;
    },
  },
});

export const { setData, updateFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
