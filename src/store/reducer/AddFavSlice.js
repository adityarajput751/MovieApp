import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from '../../network/AxiosInstance';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const addToFav = createAsyncThunk(
  'addToFav',
  async item => {
    console.log(item, 'fdsihgfdjhf');
    const response = await instance.post(
      'account/20255885/favorite',
      item,
    );
    console.log(response, 'respghtfdgthtonse');
    return response.data;
  },
);

const addtoFavSlice = createSlice({
  name: 'addFav',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToFav.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToFav.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload; 
        console.log(action?.payload,'ewofjikvn');
      })
      .addCase(addToFav.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default addtoFavSlice.reducer;
