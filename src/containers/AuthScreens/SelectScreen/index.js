import React, { Component } from 'react';
import { ImageBackground, View, Text, Image,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from './styles';
class SelectScreen extends Component {


    componentDidMount(){
       /* StatusBar.setHidden(true);*/
        setTimeout(() => {
            this.props.navigation.navigate("InitialScreen");
        }, 3000)
    }




    render() {
        return (
<ImageBackground
source={require('../../../assets/splash.png')}
style={styles.container}
imageStyle={styles.backgroundImg}
>
<View style={{justifyContent:"center",alignItems:"center",marginTop:200}} >
    <Image source={require("../../../assets/logoSplash.png")}
    style={{resizeMode:"contain",width:200,height:200}}
    />
</View>

</ImageBackground>
    )
    }
    }
export default SelectScreen;