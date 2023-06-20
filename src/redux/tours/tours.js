/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from 'util/auth';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const fetchToursAll = createAsyncThunk('tours/fetchToursAll', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours-all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const deleteTour = createAsyncThunk(
  'tours/deleteTour',
  async (tourId) => {
    await fetch(`${process.env.REACT_APP_API_URL}/tours/${tourId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: true }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken}`,
      },
    });
    return tourId;
  },
);

const ToursSlice = createSlice({
  name: 'tours',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.fulfilled, (state, action) => {
        const newArr = action.payload;
        state.data = newArr;
      })

      .addCase(fetchToursAll.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))

      .addCase(deleteTour.fulfilled, (state, action) => {
        const deletedTourId = action.payload;
        // Update the status of the deleted tour in the Redux store
        state.data = state.data.map((tour) => {
          if (tour.id === deletedTourId) {
            return {
              ...tour,
              status: true,
            };
          }
          return tour;
        });
      });
  },
});

export default ToursSlice.reducer;
