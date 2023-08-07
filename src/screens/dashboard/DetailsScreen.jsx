import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToWishList} from '../../store/reducer/AddWishListSlice';
import {addToFav} from '../../store/reducer/AddFavSlice';

const DetailsScreen = () => {
  const route = useRoute();
  const {movie} = route.params;
  const dispatch = useDispatch();

  const screenWidth = Dimensions.get('window').width;
  console.log(screenWidth, 'oerbrwbedhevvj;wnjwr');
  const imagePath = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const handleWishList = item => {
    const payload = {
      media_type: item?.media_type,
      media_id: item?.id,
      watchlist: true,
    };
    dispatch(addToWishList(payload));
    console.log(payload, 'prefkdxanj');
  };

  const handleFavorite = item => {
    const payload = {
      media_type: item?.media_type,
      media_id: item?.id,
      favorite: true,
    };
    dispatch(addToFav(payload));
    console.log(payload, 'prefjuyhtgrfdkdxanj');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>{movie?.title || movie?.name}</Text>
      <Image style={{height: 550, width: 392.77}} source={{uri: imagePath}} />
      <View style={styles.ratingContainer}>
        <TouchableOpacity onPress={() => handleWishList(movie)}>
          <Text style={styles.buttonText}>Add to Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFavorite(movie)}>
          <Text style={styles.buttonText}>Add to Favorite</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating : {movie?.vote_average}</Text>
        <Text style={styles.ratingText}>
          Release Date : {movie?.release_date || movie?.first_air_date}
        </Text>
      </View>

      <Text style={styles.overViewText}>Overview : {movie?.overview}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  ratingText: {
    fontSize: 19,
    color: '#ffffff',
    fontWeight: '600',
  },
  overViewText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '400',
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    backgroundColor: 'yellow',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
