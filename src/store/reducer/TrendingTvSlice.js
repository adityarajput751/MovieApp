import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../network/AxiosInstance';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const trendingTv = createAsyncThunk('TrendingTv', async () => {
  try {
    const response = await instance.get(
      'account/20255885/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc',
    );
    console.log(response, 'oernewf');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const trendingTvSlice = createSlice({
  name: 'trendingTvShow',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(trendingTv.pending, state => {
        state.loading = true;
        state.error = null;
        console.log('pendingjsdd');
      })
      .addCase(trendingTv.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
        console.log(state.data, 'jdsfjdsxdcfgvfb');
      })
      .addCase(trendingTv.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log('erroraskn');
      });
  },
});

export default trendingTvSlice.reducer;
