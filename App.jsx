import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <SafeAreaView>
    <AppNavigation />
    //  </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
