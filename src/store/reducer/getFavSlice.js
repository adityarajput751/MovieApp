import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../network/AxiosInstance';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const getFav = createAsyncThunk('GetFav', async () => {
  try {
    const response = await instance.get(
      'account/20255885/favorite/movies?language=en-US&page=1&sort_by=created_at.asc',
    );
    console.log(response, 'oejmhngbfvrnewf');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getFavTvSlice = createSlice({
  name: 'getFavList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFav.pending, state => {
        state.loading = true;
        state.error = null;
        console.log('pendiiujhgfngjsdd');
      })
      .addCase(getFav.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
        console.log(state.data, 'jdsfjdskujyhgfdcfgvfb');
      })
      .addCase(getFav.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log('erroraskn');
      });
  },
});

export default getFavTvSlice.reducer;
