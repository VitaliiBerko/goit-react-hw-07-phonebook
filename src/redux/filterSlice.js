const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { searchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
