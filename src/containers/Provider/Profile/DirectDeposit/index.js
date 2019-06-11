import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

export default class ProAbout extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({
            Greytext: true


        })
    }
    checklength2(text) {


    }
    renderRowInputText2(item) {
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20,marginTop:10 }}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength2(text)}

                    maxLength={12}
                    placeholder={item.hintText}
                />


            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
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
                        text: "Direct Deposit",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />

                <View style={{flexDirection:"column",width:"86%",marginStart:25,marginTop:20,marginBottom:30}}>
                    <Text style={{color:"black",fontSize:15}} >
                        {"Enter your bank account information to"}
                    </Text>
                    <Text style={{color:"black",fontSize:15}} >
                        {"ensure that your Service Pro earnings are"}
                    </Text>
                    <Text style={{color:"black",fontSize:15}} >
                        {"deposited directly into your account."}
                    </Text>
                </View>
                <View style={{flexDirection:"column",backgroundColor:"white"}}>
                    {this. renderRowInputText2({
                        hintText: "Bank Account Number",

                    })}
                    {this. renderRowInputText2({
                        hintText: "Confirm Bank Account Number",

                    })}
                    {this. renderRowInputText2({
                        hintText: "Bank Routing Number",

                    })}
                    <View style={{flexDirection:"row",width:"100%",marginStart:20,marginTop:30}}>
                        <Image source={require("../../../../assets/images/lockRed.png")}
                        style={{resizeMode:"contain",width:18,height:18,marginTop:2}}
                        />
                        <View style={{flexDirection:"column",width:"100%"}} >
                        <Text style={{color:"red",fontSize:15,marginStart:20}} >{"Your personal information is confidential"}</Text>
                        <Text style={{color:"red",fontSize:15,marginStart:20}} >{"and protected in accordance with our"}</Text>
                            <Text style={{color:"red",fontSize:15,marginStart:20}} >{"privacy policy."}</Text>



                        </View>


                    </View>
                <View style={{justifyContent:"center",alignItems:"center"}} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginTop: 20,
                                          width: "85%",
                                          backgroundColor: "#FA2021",
                                          height: 50,
                                          borderRadius: 7,
                                          marginBottom: 30
                                      }}>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "white", fontSize: 18}}>{"Save"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                </View>




            </View>
        )
    }
}