import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";


import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class StayUpToDate extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',

            showIconLeftpass1: false,
            showIconLeftpass2: false,
            showIconLeftpass3: false,
            showIconLeftpass4: false,
            Cross1: false,
            Cross2: false,
            Cross3: false,
            Cross4: false,
            Password: '',
            Cpassword: "",

        };

    const {navigation} = this.props;
const itemId = navigation.getParam('User', 'NO-ID');
console.log("gettingUSer--->" + itemId);
this.state.userName=itemId;
}
onVerify = () => {
    if(this.state.userName==="Client")
    this.props.navigation.navigate('TabNavigator', {User:this.state.userName});
    else{

       this.props.navigation.navigate("ProviderTab", {User:this.state.userName})
    }
};

    checkEmail(email) {
        if (this.validate(email)) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1: false})
        } else if (email.length === 0) {
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1: true})
        } else {
            this.setState({showIconLeftEmail1: false});
            this.setState({Cross1: true})
        }

    }

    checklengthCity(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass2: true});
            this.setState({Cross2: false})
        } else if (text.length === 0) {
            this.setState({showIconLeftpass2: false})
            this.setState({Cross2: true})
        } else {
            this.setState({showIconLeftpass2: false})
            this.setState({Cross2: true})


        }
    }

    checklengthState(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass3: true});
            this.setState({Cross3: false})
        } else if (text.length === 0) {
            this.setState({showIconLeftpass3: false})
            this.setState({Cross3: true})
        } else {
            this.setState({showIconLeftpass3: false})
            this.setState({Cross3: true})


        }
    }

    Zip(text) {
        if (text.length >= 5 && text.length <= 6) {
            this.setState({showIconLeftpass4: true});
            this.setState({Cross4: false})
        } else if (text.length === 0) {
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4: true})
        } else {
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4: true})
        }
    }


    validate = (text) => {
        console.log(text);
        let reg = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({email: text})
            return false;
        } else {
            this.setState({email: text})
            console.log("Email is Correct");
            return true;
        }
    };

    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%", justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: "row", marginTop: 10,}}>

                <TextInput
                    style={{height: 50, width: "100%", textAlign: "center"}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


            </View>
            <View
                style={{
                    height: 0.5,
                    width: "90%",
                    backgroundColor: "#52525D",
                    marginStart: 25,
                    marginEnd: 25,
                }}></View>


        </View>;
    }

    renderRowInputCity(item) {
        return <View style={{flexDirection: 'column', width: "100%", justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: "row", marginTop: 10,}}>

                <TextInput
                    style={{height: 50, width: "100%", textAlign: "center"}}
                    onChangeText={(text) => this.checklengthCity(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />
                {this.state.showIconLeftpass2 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
                {this.state.Cross2 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View
                style={{
                    height: 0.5,
                    width: "90%",
                    backgroundColor: "#52525D",
                    marginStart: 25,
                    marginEnd: 25,
                }}></View>
        </View>;
    }

    renderRowInputState(item) {
        return <View style={{flexDirection: 'column', width: "100%", justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: "row", marginTop: 10,}}>

                <TextInput
                    style={{height: 50, width: "100%", textAlign: "center"}}
                    onChangeText={(text) => this.checklengthState(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />
                {this.state.showIconLeftpass3 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
                {this.state.Cross3 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View
                style={{
                    height: 0.5,
                    width: "90%",
                    backgroundColor: "#52525D",
                    marginStart: 25,
                    marginEnd: 25,
                }}></View>
        </View>;
    }

    renderRowInputZip(item) {
        return <View style={{flexDirection: 'column', width: "100%", justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: "row", marginTop: 10,}}>

                <TextInput
                    style={{height: 50, width: "100%", textAlign: "center"}}
                    onChangeText={(text) => this.Zip(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />
                {this.state.showIconLeftpass4 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
                {this.state.Cross4 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View
                style={{
                    height: 0.5,
                    width: "90%",
                    backgroundColor: "#52525D",
                    marginStart: 25,
                    marginEnd: 25,
                }}></View>
        </View>;
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
                        text: "Stay up to date",
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

                <ScrollView>
                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 120, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            flexDirection: "column", justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"Enter your contact information below to "}</Text>
                            <Text style={{color: "black"}}>{"receive news on when SideChore becomes"}</Text>
                            <Text style={{color: "black"}}>{"available in you area."}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: "white",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {this.renderRowInputEmail({
                            hintText: "Email",
                        })}
                        {this.renderRowInputCity({
                            hintText: "City",
                        })}
                        {this.renderRowInputState({
                            hintText: "State",
                        })}
                        {this.renderRowInputZip({
                            hintText: "Zip",
                        })}
                        <TouchableOpacity onPress={this.onVerify}
                                          style={{
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 35,
                                              width: "85%",
                                              backgroundColor: "#FA2021",
                                              height: 50,
                                              borderRadius: 7,
                                              marginBottom: 20
                                          }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Opt In"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View></ScrollView>
            </View>
        )
    }
}