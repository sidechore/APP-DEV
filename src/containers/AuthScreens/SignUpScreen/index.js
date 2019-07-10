import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Keyboard} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";
import {constants} from "../../../utils/constants";
import Preference from "react-native-preference";

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',

            showIconLeftpass1: false,
            showIconLeftpass2: false,
            showIconLeftpass3: false,
            showIconLeftpass4: false,
            showIconLeftpass5: false,
            showIconLeftpass6: false,
            showIconLeftpass7: false,
            Cross1: false,
            Cross2: false,
            Cross3: false,
            Cross4: false,
            Cross5: false,
            Cross6: false,
            Cross7: false,
            Password1: '',
            Cpassword: "",
            showLoading: false,
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            Password: '',
            isConnected: true,


        };

        const {navigation} = this.props;
        const itemId = navigation.getParam('User', 'NO-ID');
        console.log("gettingUSer--->" + itemId);
        this.state.userName = itemId;
    }

    onSignUpWithFBClick = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', "email"]);

            if (result.isCancelled) {
                alert('Login was cancelled');
                return
            } else {
                this.FBGraphRequest('id, email, first_name, last_name', this.FBLoginCallback);
            }


        } catch (e) {
            alert("error: " + e)
        }
    };

    async FBGraphRequest(fields, callback) {
        const accessData = await AccessToken.getCurrentAccessToken();
        // Create a graph request asking for user information
        const infoRequest = new GraphRequest('/me', {
            accessToken: accessData.accessToken,
            parameters: {
                fields: {
                    string: fields
                }
            }
        }, callback.bind(this));
        // Execute the graph request created above
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    async FBLoginCallback(error, result) {

        if (error) {
            alert(JSON.stringify(error))
        } else {
            console.log("FBLoginCallback: " + JSON.stringify(result))
            this.socialSignUp(
                result.id,
                'facebook',
                result.email,
                result.first_name,
                result.last_name
            )

        }
    }

    socialSignUp(authId, authType, email, firsyName, lastName ){

        var details = {
            'authId': authId,
            'authType': authType,
            'email': email,
            'firstName': firsyName,
            'lastName': lastName
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");


        // hide keyboard if open
        Keyboard.dismiss();

        if (this.state.isConnected) {

            // show loading
            this.setState({
                showLoading: true
            })

            // call api
            fetch(constants.ClientSocialLogin, {
                method: 'POST',
                body: formBody,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then(response => response.json())
            .then(response => {
                    this.setState({showLoading: false});
                    console.log('Social Login response: ' + JSON.stringify(response))

                    if (response.ResultType === 1) {
                        this.setState({showLoading: false});
                        Preference.set({
                            clientlogin: true,
                            userEmail: response.Data.email,
                            userId: response.Data.id,
                            userName: response.Data.firstname + " " + response.Data.lastname,
                            userToken: response.Data.token
                        });

                        this.moveTo();

                    } else {
                        this.setState({showLoading: false});
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }

            })
            .catch(error => {
                this.setState({showLoading: false});
                console.error('Social Login api error: ', error);
            })
        } else {
            alert("Please connect Internet");
        }

    }

    onSignUp = () => {
        this.props.navigation.navigate('PhoneNumber', {User: this.state.userName});
    };

    moveTo() {
        this.props.navigation.navigate('PhoneNumber', {User: this.state.userName});
    }

    onSignUp1 = () => {

        if (this.state.isConnected) {

                this.setState({showLoading: true});
                const {email, password, phone, firstName, lastName} = this.state;
                var details = {
                    email: email,
                    password: password,
                    phone: phone,
                    firstName: firstName,
                    lastName: lastName
                };
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(constants.ClientSignUp, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                }).then(response => response.json())
                    .then(response => {
                        console.log("responseClientlogin-->", "-" + JSON.stringify(response));
                        if (response.ResultType === 1) {
                            this.setState({showLoading: false});
                            Preference.set({
                                clientlogin: true,
                                userEmail: response.Data.email,
                                userId: response.Data.id,
                                userName: response.Data.firstname + " " + response.Data.lastname,
                                userToken: response.Data.token
                            });

                            this.moveTo();

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
    };

    renderRowInputText(item) {
        const {firstName} = this.props;
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength(text)}
                    value={firstName}
                    maxLength={12}
                    placeholder={item.hintText}
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
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderRowInputText2(item) {
        const {lastName} = this.props;
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength2(text)}
                    value={lastName}
                    maxLength={12}
                    placeholder={item.hintText}
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
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderRowInputEmail(item) {
        const {email}=this.props;
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                    value={email}
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
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderRowInputPhone(item) {
        const {phone}=this.props
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPhone(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                    value={phone}
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
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderRowInputPassword(item) {
        const {password}=this.props;
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPassword(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    value={password}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                />

                {this.state.showIconLeftpass5 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross5 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
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
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                />

                {this.state.showIconLeftpass6 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross6 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
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

    renderRowPostal(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.postal(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    
                />

                {this.state.showIconLeftpass7 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross7 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
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
    checklength(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1: false})
        } else if (text.length === 0) {
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1: true})
        } else {
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1: true})


        }
        this.onChangeText('firstName', text)
    }

    checklength2(text) {
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
        this.onChangeText('lastName', text)
    }


    checkEmail(email) {
        if (this.validate(email)) {
            this.setState({showIconLeftpass3: true});
            this.setState({Cross3: false})
        } else if (email.length === 0) {
            this.setState({showIconLeftpass3: false})
            this.setState({Cross3: true})
        } else {
            this.setState({showIconLeftEmail3: false});
            this.setState({Cross3: true})
        }
        this.onChangeText('email', email)

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

    checkPhone(text) {
        if (text.length >= 11 && text.length <= 13) {
            this.setState({showIconLeftpass4: true});
            this.setState({Cross4: false})
        } else if (text.length === 0 || text.length > 13) {
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4: true})
        } else {
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4: true})


        }
        this.onChangeText('phone', text)
    }

    checkPassword(text) {
        this.setState({Password1: text});
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass5: true});
            this.setState({Cross5: false})
        } else {
            this.setState({showIconLeftpass5: false})
            this.setState({Cross5: true})
        }
        this.onChangeText('password', text)
    }

    cnfrPassword(text) {
        this.setState({Cpassword: text});
        if (this.state.Password1 === text) {
            this.setState({showIconLeftpass6: true});
            this.setState({Cross6: false})
        } else {
            this.setState({showIconLeftpass6: false})
            this.setState({Cross6: true})
        }
    }

    postal(text) {
        if (text.length >= 5 && text.length <= 6) {
            this.setState({showIconLeftpass7: true});
            this.setState({Cross7: false})
        } else if (text.length === 0) {
            this.setState({showIconLeftpass7: false})
            this.setState({Cross7: true})
        } else {
            this.setState({showIconLeftpass7: false})
            this.setState({Cross7: true})
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
                        text: "Sign Up",
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
                        height: 200, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 200, height: 200, marginTop: 40}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 60, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>

                        </View>

                    </View>

                    {this.renderRowInputText({
                        hintText: "First Name",

                    })}
                    {this.renderRowInputText2({
                        hintText: "Last Name",

                    })}
                    {this.renderRowInputEmail({
                        hintText: "Email",

                    })}
                    {this.renderRowInputPhone({
                        hintText: "Phone",

                    })}
                    {this.renderRowInputPassword({
                        hintText: "Password",

                    })}
                    {this.renderRowcnfrPassword({
                        hintText: "Confirm Password",

                    })}
                    {this.renderRowPostal({
                        hintText: "Postal Code",

                    })}
                    <View style={{flexDirection: "column", width: "100%", backgroundColor: "white", marginTop: 10}}>
                        <TouchableOpacity onPress={this.onSignUp1}
                                          style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
                            <View style={{
                                flexDirection: "column",
                                backgroundColor: "#FA2021",
                                width: "85%",
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontWeight: "bold"}}>{"Sign Up"}</Text>


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
                            onPress={()=>{
                                this.onSignUpWithFBClick()
                            }}
                            style={{justifyContent: "center", alignItems: "center", marginTop: 30, marginBottom: 10}}>
                            <View style={{
                                flexDirection: "row",
                                backgroundColor: "#4E598F",
                                width: "85%",
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7
                            }}>
                                <Image source={require("../../../assets/images/facebook.png")}
                                       style={{resizeMode: "contain", width: 25, height: 25, marginEnd: 5}}/>
                                <Text style={{color: "white", fontWeight: "bold"}}>{"Sign Up with Facebook"}</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            backgroundColor: "#F3F3F3",
                            height: 70
                        }}>
                            <Text style={{color: 'black'}}>{"Already have an account?"}</Text>
                            <Text style={{color: "red", fontWeight: "bold"}}>{" Sign In"}</Text>
                        </View>

                    </View>


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
                    <Image resizeMode={"contain"} source={require("../../../assets/images/loading.gif")} style={{width:100,height:100, opacity: 1,}}/>
                </View>}

            </View>


        )
    }


}