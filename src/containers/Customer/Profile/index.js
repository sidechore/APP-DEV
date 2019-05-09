import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    renderRowProfile(item){
        return(
        <View style={{alignItems: "center", width: "100%"}}>

            <View style={{
                flexDirection: "row", width: "85%", marginTop: 20,
                backgroundColor: "white",

                height: 70,
                borderRadius: 5,
            }}>

                <View style={{flexDirection: "column", width: "80%", justifyContent: "center",marginStart:10}}>
                    <Text
                        style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>
                    <Text style={{marginStart: 5, fontSize: 13}}>{item.text1}</Text>
                </View>
            </View>
        </View>
        )

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
                        text: "Account",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}/>

                <ScrollView>
                    <View style={{width:"100%",justifyContent:"center",alignItems:"center",
                    marginTop:20
                    }}>
                        <Image source={require("../../../assets/images/pimp2.png")}
                        style={{resizeMode:"contain",height:110,width:110}}

                        />
                        <Image source={require("../../../assets/images/camera.png")}
                               style={{resizeMode:"contain",height:39,width:39,position:"absolute",bottom:45,left:30}}

                        />

                    </View>
                    <View>

                        {this.renderRowProfile({
                            text1:"John Doe",
                            text2:"Name"
                        })}
                        {this.renderRowProfile({
                            text1:"JohnDoe@gmail.com",
                            text2:"Email"
                        })}
                        {this.renderRowProfile({
                            text1:"(123)-456789-0",
                            text2:"Mobile"
                        })}
                        {this.renderRowProfile({
                            text1:"12345",
                            text2:"Zip Code"
                        })}
                        {this.renderRowProfile({
                            text1:"Country",
                            text2:"US"
                        })}
                    </View>

                </ScrollView>

            </View>)}
}