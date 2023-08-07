import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import InputBox from '../../components/InputBox';
import CustomFlatList from '../../components/CustomFlatList';
import {trendingMovies} from '../../store/reducer/TrendingMoviesSlice';
import {useSelector, useDispatch} from 'react-redux';
import {trendingTv} from '../../store/reducer/TrendingTvSlice';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const trendingMoviesdata = useSelector(
    state => state?.trendingMovies?.data?.results,
  );

  const trendingtvdata = useSelector(
    state => state?.trendingtvShows?.data?.results,
  );

  useEffect(() => {
    const getSignupData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('isLoggedin');
        if (jsonValue !== null) {
          const loginData = JSON.parse(jsonValue);
          setData(loginData);
          setIsLoggedIn(loginData);
        } else {
          console.log('No signup data found.');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    getSignupData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(trendingMovies());
    }, [dispatch]),
  );
  useFocusEffect(
    useCallback(() => {
      dispatch(trendingTv());
    }, [dispatch]),
  );

  const handleMoviePress = item => {
    navigation.navigate('DetailScreen', {movie: item});
  };
  console.log(data, 'gttrkmgk');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>
        Hi {isLoggedIn ? `${data.username}` : 'Guest'}
      </Text>
      <InputBox placeholder={'Search'} />
      <CustomFlatList
        data={trendingMoviesdata}
        listTitle={'Trending Movie'}
        onPress={handleMoviePress}
      />
      <CustomFlatList
        data={trendingtvdata}
        listTitle={'Watchlist'}
        onPress={handleMoviePress}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15, backgroundColor: '#000000'},
  welcomeText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'right',
  },
});
