/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`);
  const data = await response.json();
  return data;
});

const ToursSlice = createSlice({
  name: 'tours',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
export default ToursSlice.reducer;
