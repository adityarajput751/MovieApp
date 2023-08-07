import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getFav} from '../../store/reducer/getFavSlice';
import {useDispatch, useSelector} from 'react-redux';

const Favorite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getFavoriteList = useSelector(
    state => state?.getfavlistData?.data?.results,
  );

  console.log(
    'esgdfjj',
    getFavoriteList,
    'getFavorimjhggfdfteListgetFavoriteList',
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getFav());
    }, [dispatch]),
  );

  const screenWidth = Dimensions.get('window').width;
  console.log(screenWidth, 'oerbrwbedhevvj;wnjwr');

  const handleMoviePress = item => {
    navigation.navigate('DetailScreen', {movie: item});
  };

  const renderItem = ({item}) => {
    const imagePath = `https://image.tmdb.org/t/p/w500${item?.poster_path}`;
    console.log(imagePath);
    return (
      <>
        <TouchableOpacity onPress={() => handleMoviePress(item)}>
          <Image
            style={{
              width: 332,
              height: 180,
              marginTop: 20,
              alignSelf: 'center',
            }}
            source={{uri: imagePath}}
          />
          <Text
            style={{
              fontSize: 18,
              color: '#ffffff',
              fontWeight: '700',
              marginLeft: 30,
            }}>
            {item?.title}
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorite</Text>
      <FlatList
        data={getFavoriteList}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000'},
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 10,
  },
});
