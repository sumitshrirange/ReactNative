import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const doneButton = ({...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.doneButton}>Done</Text>
    </TouchableOpacity>
  );
};

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => navigation.replace('Home')}
        onSkip={() => navigation.replace('Home')}
        DoneButtonComponent={doneButton}
        pages={[
          {
            backgroundColor: '#a090ea',
            image: (
              <Image
                style={{width: '100%'}}
                source={require('../assets/Img_car2.png')}
              />
            ),
            title: 'Always there: more than 1000 cars in Tbilisi',
            subtitle:
              'Our company is a leader by the number of cars in the fleet',
            titleStyles: {fontSize: 22, fontWeight: 600},
          },
          {
            backgroundColor: '#efae8d',
            image: (
              <Image
                style={{width: '100%'}}
                source={require('../assets/Img_car3.png')}
              />
            ),
            title: 'Do not pay for parking, maintenance and gasoline',
            subtitle: 'We will pay for you, all expenses related to the car',
            titleStyles: {fontSize: 22, fontWeight: 600},
          },
          {
            backgroundColor: '#749fff',
            image: (
              <Image
                style={{width: '100%'}}
                source={require('../assets/Img_car4.png')}
              />
            ),
            title: 'Do not pay for parking, maintenance and gasoline',
            subtitle: 'We will pay for you, all expenses related to the car',
            titleStyles: {fontSize: 22, fontWeight: 600},
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  doneButton: {
    paddingRight: 20,
    color: 'white',
    fontSize: 17,
    fontWeight: 500,
  },
});
