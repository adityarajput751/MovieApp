import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../network/AxiosInstance';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const trendingMovies = createAsyncThunk('TrendingMovies', async () => {
  try {
    const response = await instance.get('trending/movie/day?language=en-US');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const trendingMoviesSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(trendingMovies.pending, state => {
        state.loading = true;
        state.error = null;
        console.log('pendingjsdd');
      })
      .addCase(trendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(trendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log('erroraskn');
      });
  },
});

export default trendingMoviesSlice.reducer;
