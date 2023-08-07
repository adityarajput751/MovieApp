import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import rootReducer from './src/store/store';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <StackNavigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
