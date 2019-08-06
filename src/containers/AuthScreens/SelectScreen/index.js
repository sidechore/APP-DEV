import React, { Component } from 'react';
import { ImageBackground, View, Text, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Preference from 'react-native-preference';

import { styles } from './styles';
class SelectScreen extends Component {
  componentDidMount() {
    /* StatusBar.setHidden(true);*/
    setTimeout(() => {
      // let userId = await Preference.get('clientlogin');
      //if (userId) {
      //} else {
      this.gotoNextscreen();
      //}
    }, 3000);
  }
  gotoNextscreen(){

      this.props.navigation.navigate('InitialScreen');
    }


  render() {
    return (
      <ImageBackground
        source={require('../../../assets/splash.png')}
        style={styles.container}
        imageStyle={styles.backgroundImg}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 200
          }}
        >
          <Image
            source={require('../../../assets/logoSplash.png')}
            style={{ resizeMode: 'contain', width: 200, height: 200 }}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default SelectScreen;
