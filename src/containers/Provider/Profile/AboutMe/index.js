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
                    <View style={{}}  >
                <Text style={{color:"black"}} >
                    {"Official start date: 2017"}
                </Text>
                </View>
                    <Text style={{color:"black",marginTop:5,marginBottom:5}} >
                        {"Total amount of jobs completed: 108 "}
                    </Text>
                    <Text style={{color:"black"}} >
                        {"Average response time: Fast"}
                    </Text>


                </View>

            </View>
        )
    }
}
