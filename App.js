import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'


import MainNavigator from './navigation/MainNavigator'

{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com></a></div> */}
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

const fetchFonts = () => {
  return Font.loadAsync({
    'score': require('./assets/fonts/AbhayaLibre-Bold.ttf'),
    'scoreBold': require('./assets/fonts/AbhayaLibre-ExtraBold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
 
  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() =>
      setDataLoaded(true)}/>
   }

  return (
    <MainNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
