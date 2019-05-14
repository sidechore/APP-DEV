import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView,Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

export default class Help extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
        };
    }
    renderRowhelp(item) {
        return <View style={{alignItems: "center", width: "100%"}}>
            <View style={{
                flexDirection: "row", width: "85%", marginTop: 20,
                backgroundColor: "white",
                height: 50,
                borderRadius: 5,
                alignItems: "center"}}>
                <View style={{width: "90%"}}>
                    <Text
                        style={{
                            marginStart: 15,
                            fontSize: 13, color: "black", marginBottom: 5
                        }}>{item.text}</Text>
                </View>
            </View>
        </View>

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
                        text: "Help Center",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }
                />

                {this.renderRowhelp({
                    text: "Live Chat",


                })}

                {this.renderRowhelp({
                    text: "Privacy Policy",


                })}
                {this.renderRowhelp({
                    text: "Terms and Conditions",


                })}
            </View>
        )}
}
