import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import ProCall from "./ContactComponents/Call.js"

import ProMessage from "./ContactComponents/Message";
export default class ProContact extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            isModalVisible: false,
            headerColor: "red",
            headerColor2: "black",
            barColor: "red",
            barColor2: "transparent",
            Call: true,
            Message: false,
        };
        this.message = this.message.bind(this);
        this.call = this.call.bind(this);
    }


    message() {

        this.setState({barColor: "transparent"});
        this.setState({headerColor: "black"});
        this.setState({Message: true});
        this.setState({barColor2: "red"});
        this.setState({headerColor2: "red"});
        this.setState({Call: false});

    }

    call() {

        this.setState({barColor2: "transparent"});
        this.setState({headerColor2: "black"});
        this.setState({Call: true});
        this.setState({barColor: "red"});
        this.setState({headerColor: "red"});
        this.setState({Message: false});
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
                        text: "[Input Service Pro Name]",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }


                />
                <View style={{flexDirection: "column", backgroundColor: "white", width: "100%"}}>
                    <View style={{flexDirection: "row", width: "100%", marginTop: 15,}}>
                        <TouchableOpacity style={{
                            width: "50%", justifyContent: "center", alignItems: "center",

                        }} onPress={() => this.call()}>

                            <Text style={{color: this.state.headerColor, fontSize: 16, marginBottom: 15}}>{"Call"}</Text>
                            <View style={{height: 4, backgroundColor: this.state.barColor, width: "100%"}}></View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "50%", justifyContent: "center", alignItems: "center",}}
                                          onPress={() => this.message()}
                        >

                            <Text style={{
                                color: this.state.headerColor2,
                                fontSize: 16,
                                marginBottom: 15
                            }}>{"Messages"}</Text>
                            <View style={{height: 4, backgroundColor: this.state.barColor2, width: "100%"}}></View>

                        </TouchableOpacity>
                    </View>


                </View>

                    {this.state.Call && <ProCall/>}
                    {this.state.Message &&
                      <ProMessage/>

                    }

            </View>
        )
    }
}