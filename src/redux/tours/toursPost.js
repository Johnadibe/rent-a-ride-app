import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../util/auth';

export const fetchTours = createAsyncThunk('tours/PostTours', async (name, city, price, video, image, description) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      city,
      price,
      video,
      image,
      des: description,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken}`,
    },
  });
  const data = await response.json();
  return data;
});

const ToursSlice = createSlice({
  name: 'Posttours',
  initialState: {
    tours: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTours.fulfilled, (state, action) => ({
        ...state,
        tours: action.payload,
      }));
  },
});

export default ToursSlice.reducer;
