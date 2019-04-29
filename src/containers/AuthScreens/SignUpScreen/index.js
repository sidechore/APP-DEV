import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder'};
    }

    renderRowInput(item) {
        return <View style={{
            flexDirection: 'column', width: "100%",

        }}>
            <View style={{flexDirection: "column",}}>
                <TextInput
                    style={{height: 50, marginStart: 20, marginEnd: 20, marginTop: 10}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={item.hintText}
                />

            </View>
            <View
                style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>

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
                    {this.renderRowInput({
                        hintText: "First Name",

                    })}
                    {this.renderRowInput({
                        hintText: "Last Name",

                    })}
                    {this.renderRowInput({
                        hintText: "Email",

                    })}
                    {this.renderRowInput({
                        hintText: "Phone",

                    })}
                    {this.renderRowInput({
                        hintText: "Password",

                    })}
                    {this.renderRowInput({
                        hintText: "Confirm Password",

                    })}
                    {this.renderRowInput({
                        hintText: "Postal Code",

                    })}
                    <View style={{flexDirection:"column",width:"100%",height:130,backgroundColor:"#F3F3F3",marginTop:10}} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("PhoneNumber")}  style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
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
                    </TouchableOpacity   >
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:20  }} >
                            <Text style={{color:'black'}} >{"Already have an account?"}</Text>
                            <Text style={{color:"red", fontWeight:"bold" }}>{" Sign In"}</Text>
                        </View>

                    </View>



                </ScrollView>




            </View>





        )}




}