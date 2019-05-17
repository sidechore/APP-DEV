import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import Current from "./Current/index.js"
import Completed from "./Completed/index.js"


export default class Jobs extends Component {
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
            completed: false,
            current: true,
        };
        this.Completed = this.Completed.bind(this);
        this.Current = this.Current.bind(this);
    }

    Current() {

        this.setState({barColor: "red"});
        this.setState({headerColor: "red"});
        this.setState({current: true});
        this.setState({barColor2: "transparent"});
        this.setState({headerColor2: "black"});
        this.setState({completed: false});

    }

    Completed() {

        this.setState({barColor2: "red"});
        this.setState({headerColor2: "red"});
        this.setState({completed: true});
        this.setState({barColor: "transparent"});
        this.setState({headerColor: "black"});
        this.setState({current: false});
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
                        text: "My Jobs",
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


                /><View style={{flexDirection: "column", backgroundColor: "white", width: "100%"}}>
                <View style={{flexDirection: "row", width: "100%", marginTop: 15,}}>
                    <TouchableOpacity style={{
                        width: "50%", justifyContent: "center", alignItems: "center",

                    }} onPress={() => this.Current()}>

                        <Text style={{color: this.state.headerColor, fontSize: 16, marginBottom: 15}}>{"Open"}</Text>
                        <View style={{height: 4, backgroundColor: this.state.barColor, width: "100%"}}></View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{width: "50%", justifyContent: "center", alignItems: "center",}}
                                      onPress={() => this.Completed()}
                    >

                        <Text style={{
                            color: this.state.headerColor2,
                            fontSize: 16,
                            marginBottom: 15
                        }}>{"Completed"}</Text>
                        <View style={{height: 4, backgroundColor: this.state.barColor2, width: "100%"}}></View>

                    </TouchableOpacity>
                </View>


            </View>
                <ScrollView>
                    {this.state.current &&
                    <Current  navigation={this.props.navigation}/>}
                    {this.state.completed &&
                    <Completed/>
                    }
                </ScrollView>
            </View>
        )
    }
}