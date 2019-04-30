import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView,Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class PhoneNumber extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',
            Cross1:false,
            showIconLeftpass1: false,
        };
    }

    renderRowInputPhone(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPhone(text)}
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
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    checkPhone(text) {
        if (text.length >=11 && text.length <= 13) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1:false})
        }else if(text.length===0 ||text.length>13){
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1:true})
        }
        else{
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1:true})


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
                        text: "Submit Phone Number ",
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
                        height: 200, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 180, height: 150,}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 40, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"Please enter few more details to"}</Text>
                            <Text style={{color: "black"}}>{" complete registration"}
                            </Text>
                        </View>
                    </View>
                    <View style={{width: "100%", height: 250, backgroundColor: "white",}}>
                        {this.renderRowInputPhone({
                            hintText: "Phone Number",

                        })}
                        <View style={{
                            flexDirection: "row",

                            justifyContent: "center",
                            alignItems:"center",

                            marginTop:40,
                            marginLeft:20,
                            marginRight:20


                        }}>
                            <View style={{flexDirection:"column" , width:"15%",justifyContent: "center",
                                alignItems:"center", }}>
                                <Switch
                                    onTintColor="#00D200"
                                    thumbTintColor="#fff"
                                    value={false} style={{
                                    position: 'absolute',
                                    right:15,
                                    tintColor: 'white',

                                }}/>
                            </View>
                            <View style={{flexDirection:"column", width:"75%",
                               }}>

                                <Text style={{color:"black"}}  > {"I agree to SideChore's Terms of Use "} </Text>
                                <Text style={{color:"black"}}  > {"and Privacy Policy "} </Text>
                            </View>

                        </View>

                            <TouchableOpacity 
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
                                    <Text style={{color: "white", fontSize: 18}}>{"Submit"}</Text>


                                </View>
                            </TouchableOpacity>
                        </View>
                    <View style={{width:"100%",height:250,backgroundColor:"#F3F3F3" }}  >
                    </View>


                </ScrollView>


            </View>

    )




    }


    }