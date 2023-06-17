import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../util/auth';

export const postTours = createAsyncThunk('tours/PostTours', async (formData) => {
  console.log(formData);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
    method: 'POST',
    body: JSON.stringify({
      formData
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken}`,
    },
  });
  const data = await response.json();
  return data;
});

const PTSlice = createSlice({
  name: 'Posttours',
  initialState: {
    tours: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postTours.fulfilled, (state, action) => ({
        ...state,
        tours: action.payload,
      }));
  },
});

export default PTSlice.reducer;
