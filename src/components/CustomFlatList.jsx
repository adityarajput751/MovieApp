import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CustomFlatList = ({data, listTitle, onPress}) => {
  const renderItem = ({item}) => {
    const imagePath = `https://image.tmdb.org/t/p/w500${item?.poster_path}`;
    return (
      <>
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={styles.listMainContainer}>
            <Image
              style={{height: 230, width: 170}}
              source={{uri: imagePath}}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#ffffff',
                fontWeight: '700',
                marginTop: 5,
              }}>
              {item?.title || item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.listTitleText}>{listTitle}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  listTitleText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  listMainContainer: {
    height: 280,
    width: 170,
    marginRight: 20,
    borderRadius: 10,
  },
});
