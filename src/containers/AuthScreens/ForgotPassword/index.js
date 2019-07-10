import React, {Component} from "react";
import {ScrollView, Text, TextInput,SafeAreaView ,TouchableOpacity, View,KeyboardAvoidingView} from "react-native";
import {styles} from "./styles";
import {Header, Image} from "react-native-elements";
import {constants} from "../../../utils/constants";

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: "Useless Placeholder",
            showIconLeftEmail: false,
            Cross1: false,
            isVisible: false,
            email: '',
            pin: "",
            isConnected: false,
            sendMail: true,
            resetPassword: false,
            forgetpassword_pin: "5463", password: "", repassword: "",
        };
        this.onForgot = this.onForgot.bind(this);
    }
    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };
    moveTo(){
        
        this.props.navigation.navigate("ResetPassword",{email:this.state.email})
    }
    onForgot = () => {
            if (this.state.email === "") {
                alert("Please enter email?");
            } else {
                var details = {
                    email: this.state.email,
                    forgetpassword_pin: this.state.forgetpassword_pin
                };
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(constants.ForgetPassword, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                }).then(response => response.json())
                    .then(response => {
                        console.log("responseforgetPasswordClient-->", "-" + JSON.stringify(response));
                        if (response.ResultType === 1) {
                            this.moveTo();
                        } else {
                            if (response.ResultType === 0) {
                                alert(response.Message);
                            }
                        }
                    })
                    .catch(error => {
                        //console.error('Errorr:', error);
                        console.log('Error:', error);
                        alert("Error: "+error);
                    });
                //Keyboard.dismiss();
            }
        
    };
    renderRowInputEmail(item) {
        const {email}=this.state;
        return (
            <View style={{ flexDirection: "column", width: "100%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginStart: 20,
                        marginEnd: 20
                    }}
                >
                    <TextInput
                        style={{ height: 50, width: "100%" }}
                        onChangeText={email =>this.checkEmail(email) }
                        textContentType={"Email"}
                        placeholder={item.hintText}
                        keyboardType={"email-address"}
                        value={email}
                    />

                    {this.state.showIconLeftEmail && (
                        <Image
                            resizeMode={"contain"}
                            source={require("../../../assets/images/checked.png")}
                            style={{
                                width: 20,
                                height: 20,
                                position: "absolute",
                                right: 10,
                                top: 15
                            }}
                        />
                    )}
                    {this.state.Cross1 && (
                        <Image
                            resizeMode={"contain"}
                            source={require("../../../assets/images/close.png")}
                            style={{
                                width: 20,
                                height: 20,
                                position: "absolute",
                                right: 10,
                                top: 15
                            }}
                        />
                    )}
                </View>
                <View
                    style={{
                        height: 0.5,
                        backgroundColor: "#52525D",
                        marginStart: 25,
                        marginEnd: 25
                    }}
                />
            </View>
        );
    }

    validate = text => {
        console.log(text);
        let reg = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text });
            return false;
        } else {
            this.setState({ email: text });
            console.log("Email is Correct");
            return true;
        }
    };

    checkEmail(email) {
        if (email.length === 0) {
            this.setState({ showIconLeftEmail: false });
            this.setState({ Cross1: true });
        }
        if (this.validate(email)) {
            this.setState({ showIconLeftEmail: true });
            this.setState({ Cross1: false });
        } else {
            this.setState({ showIconLeftEmail: false });
            this.setState({ Cross1: true });
        }
        this.onChangeText('email', email)
    }

    render() {
        return (
           
                <SafeAreaView  style={styles.container}  >
                <Header
                    statusBarProps={{ barStyle: "light-content" }}
                    barStyle="light-content" // or directly
                    style={{ backgroundColor: "white" }}
                    outerContainerStyles={{ backgroundColor: "white" }}
                    centerComponent={{
                        text: "Forgot Password",
                        style: {
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                        }
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                source={require("../../../assets/images/arrowback.png")}
                                style={{
                                    marginStart: 10,
                                    height: 14,
                                    width: 14,
                                    resizeMode: "contain"
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                <ScrollView>
                    <View
                        style={{
                            flexDirection: "column",
                            width: "100%",
                            height: 250,
                            backgroundColor: "#F3F3F3",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            resizeMode={"contain"}
                            source={require("../../../assets/images/logo3x.png")}
                            style={{ width: 200, height: 200, marginTop: 40 }}
                        />
                        <View
                            style={{
                                flexDirection: "column",
                                marginBottom: 80,
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black"
                            }}
                        >
                            <Text style={{ color: "black" }}>
                                {
                                    "Enter your email address and we will send you"
                                }
                            </Text>
                            <Text style={{ color: "black" }}>
                                {" a link to reset your password"}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: 150,
                            backgroundColor: "white"
                        }}
                    >
                        {this.renderRowInputEmail({
                            hintText: "Enter your Email Address"
                        })}

                        <TouchableOpacity
                            onPress={() =>
                                this.onForgot()
                            }
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 25
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    backgroundColor: "#FA2021",
                                    width: "85%",
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 7
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 18 }}>
                                    {"Send an email"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require("../../../assets/images/halfsplash.png")}
                        style={{
                            resizeMode: "cover",
                            width: "100%",
                            height: 350
                        }}
                    />
                </ScrollView>
                </SafeAreaView>
           
        );
    }
}
