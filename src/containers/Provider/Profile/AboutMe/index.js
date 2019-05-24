import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";


export default class ProAbout extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({
            Greytext: true


        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "About Me",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />
                <View style={{flexDirection:"column",width:"100%",marginStart:20,marginTop:30}}>
                <Text style={{color:"black"}} >
                    {"I've been a tasker since 2017."}
                </Text>
                    <Text style={{color:"black"}} >
                        {"I've completed 108 tasks."}
                    </Text>
                    <Text style={{color:"black"}} >
                        {"I respond quickly."}
                    </Text>


                </View>

            </View>
        )
    }
}