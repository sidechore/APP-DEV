import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class ForgotPassword extends Component {

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
                    style={{height: 40, marginStart: 20, marginEnd: 20, marginTop: 10}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={item.hintText}
                />

            </View>
            <View
                style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25, marginTop: 10}}></View>

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
                        text: "Forgot Password",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                        <Image source={require("../../../assets/images/arrowback.png" )} style={{
                       marginStart:10, height:14,width:14,resizeMode:"contain"


                        }}  /></TouchableOpacity>
                            }


                />

                <ScrollView>

                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 250, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 200, height: 200, marginTop: 40}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 80, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"Enter your email address and we will send you"}</Text>
                            <Text style={{color: "black"}}>{" a link to reset your password"}
                            </Text>
                        </View>
                    </View>
                   <View  style={{width:"100%",height:150,backgroundColor:"white",}}>
                       {this.renderRowInput({
                           hintText: "Enter your Email Address",

                       })}

                       <TouchableOpacity onPress={()=>this.props.navigation.navigate("ResetPassword")} style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
                           <View style={{
                               flexDirection: "column",
                               backgroundColor: "#FA2021",
                               width: "85%",
                               height: 50,
                               justifyContent: "center",
                               alignItems: "center",
                               borderRadius: 7


                           }}>
                               <Text style={{color: "white",fontSize:18}}>{"Send an email"}</Text>


                           </View>
                       </TouchableOpacity>
                   </View>

                    <Image source={require("../../../assets/images/halfsplash.png")}
                           style={{resizeMode:'cover', width:"100%",height:350}}  />

                </ScrollView>


            </View>

        )




    }


}