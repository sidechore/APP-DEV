import React, {Component} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";


export default class ChangePassword extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftpass1: false,
            showIconLeftpass2: false,
            Cross1: false,
            Cross2: false,
            Password: '',
            Cpassword: "",
            Cross0: false,
            showIconLeftpass0: false,
            isConnected:true,
            showLoading:false,
            oldPassword:null,
            newPassword:null,
            AuthToken:Preference.get("userToken")

        };
    }

    renderRowInputOldPassword(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkOldPassword(text)}

                    placeholder={item.hintText}

                    secureTextEntry={true}
                />

                {this.state.showIconLeftpass0 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross0 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/close.png")}
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
    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };
    renderRowInputPassword(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPassword(text)}

                    placeholder={item.hintText}

                    secureTextEntry={true}
                />

                {this.state.showIconLeftpass1 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/close.png")}
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

    renderRowcnfrPassword(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.cnfrPassword(text)}

                    placeholder={item.hintText}

                    secureTextEntry={true}
                />

                {this.state.showIconLeftpass2 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross2 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/close.png")}
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
    onChange=()=> {

        if (this.state.isConnected) {

                this.setState({showLoading: true});
                const {oldPassword, newPassword} = this.state;
                var details = {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                };
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(constants.ChangePassword, {
                    method: 'POST',
                    headers: {
                        "x-auth-token":this.state.AuthToken,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                }).then(response => response.json())
                    .then(response => {
                        console.log("responseClientlogin-->", "-" + JSON.stringify(response));
                        if (response.ResultType === 1) {
                            this.setState({showLoading: false});
                            alert("Password has Successfully Changed ")
                            this.moveToSiginIn();

                        } else {
                            this.setState({showLoading: false});
                            if (response.ResultType === 0) {
                                alert(response.Message);
                            }
                        }
                    })
                    .catch(error => {
                        //console.error('Errorr:', error);
                        console.log('Error:', error);
                        alert("Error: " + error);
                    });
                //Keyboard.dismiss();

        } else {
            alert("Please connect Internet");
        }
    }

    moveToSiginIn() {


            this.props.navigation.navigate("SignInScreen");

        }

    checkPassword(text) {
        this.setState({Password: text});
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1: false})
        } else {
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1: true})
        }
        this.onChangeText('newPassword', text)
    }

    checkOldPassword(text) {
        this.setState({Password: text});
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass0: true});
            this.setState({Cross0: false})
        } else {
            this.setState({showIconLeftpass0: false})
            this.setState({Cross0: true})
        }
        this.onChangeText('oldPassword', text)
    }

    cnfrPassword(text) {
        this.setState({Cpassword: text});
        if (this.state.Password === text) {
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

    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "Change Password",
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

                <ScrollView>

                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 150, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../../assets/images/logo3x.png")}
                               style={{width: 180, height: 180,}}/>

                    </View>
                    <View style={{width: "100%", height: 230, backgroundColor: "white", marginBottom: 20}}>
                        {this.renderRowInputOldPassword({
                            hintText: "Old Password",

                        })}
                        {this.renderRowInputPassword({
                            hintText: "New Password",

                        })}
                        {this.renderRowcnfrPassword({
                            hintText: "Confirm Password",

                        })}

                        <TouchableOpacity onPress={this.onChange}
                                          style={{justifyContent: "center", alignItems: "center", marginTop: 25,}}>
                            <View style={{
                                flexDirection: "column",
                                backgroundColor: "#FA2021",
                                width: "85%",
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Change"}</Text>


                            </View>
                        </TouchableOpacity>
                    </View>

                    <Image source={require("../../../../assets/images/halfsplash.png")}
                           style={{resizeMode: 'cover', width: "100%", height: 350}}/>

                </ScrollView>
                {this.state.showLoading && <View style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    opacity: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image resizeMode={"contain"} source={require("../../../../assets/images/loading.gif")}
                           style={{width: 100, height: 100, opacity: 1,}}/>
                </View>}
            </View>
        )
    }


}