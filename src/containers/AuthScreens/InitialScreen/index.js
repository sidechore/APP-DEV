import React, {Component} from 'react';
import {ImageBackground, View, Text, Image, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';


import {styles} from './styles';

export default class InitialScreen extends Component {

    render() {
        return (
            <View style={{width:"100%",height:"100%",backgroundColor:"#E9E9E9"}}>
                <ScrollView>
                    <View style={[styles.container,{flexDirection:"column"}]}>
                        <View style={{width: "100%",marginBottom:200}}>
                            <ImageBackground
                                source={require('../../../assets/images/opening.png')}
                                style={styles.backgroundImg}
                                imageStyle={styles.backgroundImg}>
                                <View style={{
                                    flexDirection: "column",
                                    width: "100%",

                                    height: 190,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                                           style={{width: 200, height: 200,}}/>

                                </View>
                                <View style={{
                                    flexDirection: "column",
                                    marginStart: 20,marginEnd:20, marginBottom: 20

                                }}>
                                    <View style={{flexDirection: 'row', width: "50%"}}>
                                        <Text style={{fontSize: 25, color: "black",}}>{"Customer"}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", width: "100%", marginTop: 40}}>

                                        <Text style={{color: "black"}}>
                                            {"SideChore is an on-demand platform that increases your productivity by taking on your odd jobs and home service needs."}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate("SignInScreen")}

                                        style={{justifyContent: "center", alignItems: "center", marginTop: 40}}>
                                        <View style={{
                                            flexDirection: "column",
                                            backgroundColor: "#FA2021",
                                            width: "95%",
                                            marginEnd: 20,
                                            height: 50,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 7
                                        }}>
                                            <Text style={{color: "white", fontWeight: "bold"}}>{"Sign In"}</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate("SignUpScreen")}
                                                       style={{justifyContent: "center", alignItems: "center", marginTop: 20}}>
                                        <View style={{
                                            flexDirection: "column",
                                            backgroundColor: "black",
                                            width: "95%",
                                            height: 50,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 7,
                                            marginEnd: 20,
                                        }}>
                                            <Text style={{color: "white", fontWeight: "bold"}}>{"Sign Up"}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </ScrollView>
                <View style={{width: "100%", flexDirection: "column", backgroundColor: "red",position:"absolute",bottom:0}}>
                    <View style={{flexDirection: 'column', width: "70%", marginStart: 30,marginTop:40 }}>
                        <Text style={{fontSize: 25, color: "white",}}>{"Earn as a Provider"}</Text>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", marginStart: 40, marginEnd: 40,marginTop:40,marginBottom:60 }}>

                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("SignInProvider")}
                                           style={{
                                               width: "40%",

                                           }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 60,
                                marginEnd: 20,
                                borderRadius: 7,
                                borderWidth: 0.5,
                                backgroundColor:"transparent",
                                borderColor: "white",



                            }}>

                                <Text style={{color: "white", fontWeight: "bold"}}>{"Sign In"}</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("ServiceProviderSignUp")}
                                          style={{width: "40%"}}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                height: 60,
                                alignItems: "center",
                                marginStart: 20,
                                borderRadius: 7,
                                borderWidth: 0.5,
                                borderColor: "white"
                            }}>
                                <Text style={{color: "white", fontWeight: "bold"}}>{"Sign Up"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}