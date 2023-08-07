import {combineReducers} from 'redux';
import TrendingMoviesSlice from './reducer/TrendingMoviesSlice';
import TrendingTvSlice from './reducer/TrendingTvSlice';
import AddWishListSlice from './reducer/AddWishListSlice';
import AddFavSlice from './reducer/AddFavSlice';
import getFavSlice from './reducer/getFavSlice';

const rootReducer = combineReducers({
  trendingMovies : TrendingMoviesSlice,
  trendingtvShows : TrendingTvSlice,
  addtowishlist : AddWishListSlice,
  getfavlistData : getFavSlice,
  addtofav : AddFavSlice
});

export default rootReducer;
