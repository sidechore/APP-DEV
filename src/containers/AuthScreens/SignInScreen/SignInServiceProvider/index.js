import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../../utils';
import {Colors} from "../../../../themes";


export default class SignInProvider extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            showIconLeftpass: false,
            userName: undefined,
        };
        const {navigation} = this.props;
        const itemId = navigation.getParam('User', 'NO-ID');
        console.log("gettingUSer--->" + itemId);
        this.state.userName=itemId;
    }

    onSignUp = () => {
        this.props.navigation.navigate('ServiceProviderSignUp', {User:this.state.userName});
    };

    onSignIn = () => {
        this.props.navigation.navigate('SignInProvider', {User:this.state.userName});
    };



    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftEmail &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderRowInput(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPassword(text)}
                    secureTextEntry={true}
                    maxLength={12}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftpass &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
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

    checkPassword(text) {
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass: true})
        }else {
            this.setState({showIconLeftpass: false})
        }
    }

    checkEmail(email) {
        if (this.validate(email)) {
            this.setState({showIconLeftEmail: true})
        } else {
            this.setState({showIconLeftEmail: false})
        }

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
                        text: "Sign In",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}/>
                <ScrollView>
                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 250, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../../assets/images/logo3x.png")}
                               style={{width: 200, height: 200, marginTop: 40}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 60, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"Enter your Phone Number Below to"}</Text>
                            <Text style={{color: "black"}}>{" Sign in to"}<Text
                                style={{color: "red"}}>{" SideChore"}</Text>
                            </Text>
                        </View>
                    </View>
                    {this.renderRowInputEmail({
                        hintText: "Email",
                        showIcon: this.state.showIconLeftEmail
                    })}
                    {this.renderRowInput({
                        hintText: "Password"
                    })}
                    <TouchableOpacity style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
                        <View style={{
                            flexDirection: "column",
                            backgroundColor: "#FA2021",
                            width: "85%",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7
                        }}>
                            <Text style={{color: "white", fontWeight: "bold"}}>{"Sign In"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 25
                        }}>
                            <Text style={{color: "black"}}>{"Forgot Password?"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop: 30, width: "100%", flexDirection: "row", alignItems: "center"}}>
                        <View style={{width: "40%", height: 0.5, backgroundColor: Colors.lightGrey}}></View>

                        <View style={{
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: 'center',
                            borderRadius: 20,
                            width: 40,
                            height: 40,
                            marginStart: 10,
                            marginEnd: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 2, height: 2},
                            shadowOpacity: 1,
                            shadowRadius: 10,
                            elevation: 10
                        }}><Text style={{color: "black"}}>{"OR"}</Text>
                        </View>
                        <View
                            style={{width: "100%", height: 0.5, backgroundColor: Colors.lightGrey}}></View>
                    </View>
                    <TouchableOpacity
                        onPress={this.onSignIn}
                        style={{justifyContent: "center", alignItems: "center", marginTop: 30, marginBottom: 40}}>
                        <View style={{
                            flexDirection: "row",
                            backgroundColor: "#4E598F",
                            width: "85%",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7
                        }}>
                            <Image source={require("../../../../assets/images/facebook.png")}
                                   style={{resizeMode: "contain", width: 25, height: 25, marginEnd: 5}}/>
                            <Text style={{color: "white", fontWeight: "bold"}}>{"Sign In with Facebook"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "column", backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: "black", fontSize: 15}}>{"Don't have an account?"}</Text>
                            <TouchableOpacity onPress={this.onSignUp}>
                                <Text style={{color: "red", fontSize: 15, fontWeight: "bold"}}>{"Sign Up"}</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{
                                fontSize: 12,
                                marginTop: 10
                            }}>{"Facebook/Number will never be flooded with posts."}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 12}}>{"Privacy and Security is Key"}</Text>
                        </View>

                    </View>

                </ScrollView>


            </View>


        )
    }
}