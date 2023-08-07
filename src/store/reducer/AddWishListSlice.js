import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../network/AxiosInstance';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const addToWishList = createAsyncThunk(
  'AddToWishList',
  async item => {
    console.log(item, 'fdsihjhf');
    const response = await instance.post(
      'account/20255885/watchlist',
      item,
    );
    console.log(response, 'respgthtonse');
    return response.data;
  },
);

const addtoWishListSlice = createSlice({
  name: 'addWishList',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToWishList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload; 
        console.log(action?.payload,'ewofjikvn');
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default addtoWishListSlice.reducer;
