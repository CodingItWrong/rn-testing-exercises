// SafeAreaView fails without React import in CLI for some reason
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MovieList from './src/MovieList';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MovieList />
      </SafeAreaView>
    </>
  );
}
