import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";

export default class ServicesAndRates extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
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
                        text: "Services & Rates",
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
                <View style={{justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <View style={{justifyContent:"center",alignItems:"center",width:"90%",backgroundColor:"white"
                    ,marginTop:20,marginBottom:40,borderRadius:5
                    }}>
                        <Image source={(require("../../../assets/images/error-triangle.png"))}
                        style={{marginTop:20,marginBottom:20,resizeMode:"contain",width:60,height:60}}
                        />

                        <View style={{justifyContent:"center",alignItems:'center',width:"80%",marginBottom:20}}>
                            <View style={{justifyContent:"center",alignItems:'center'}}>
                            <Text style={{color:"black",textAlign:"center"}} >{"Uh oh! One or more of your job rates is above or below the rates we recommend for providers in your area with your experience. please update asap to increase the chance that you will get booked for the job."}</Text>
                            </View>
                            </View>


                    </View>

                </View>
<View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}} >

                <View style={{alignItems: "center", width: "85%",backgroundColor:"white", marginTop: 20, borderRadius: 5,marginBottom:60}}>
                    <Text style={{color:"red",fontSize:17,marginTop:10,marginBottom:10}} >{"Current Skills"}</Text>

                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent:"center",
                        marginBottom:20,

                        alignItems:"center"
                    }}>

                        <View style={{flexDirection: "column", width: "75%", justifyContent: "center",marginStart:10}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ServicesAndRate2")} >
                            <Text
                                style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{"Furniture Assembly"}</Text>
                            </TouchableOpacity>
                            <Text
                                style={{marginStart: 5,color:"#5A5D61" ,fontSize: 13, textAlignVertical: "center"}}>{"Suggested rate $21/hr"}</Text>
                        </View>
                        <View style={{width:"15%",marginEnd:10}} >
                            <Text style={{color:"red",fontSize:15,textAlign:"center"}} >{"$32/hr"}</Text>
                        </View>
                    </View>
                    <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA", }}></View>


                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent:"center",
                        marginBottom:20,
                        marginTop:20,

                        alignItems:"center"
                    }}>

                        <View style={{flexDirection: "column", width: "75%", justifyContent: "center",marginStart:10}}>
                            <Text
                                style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{"Moving"}</Text>
                            <Text
                                style={{marginStart: 5,color:"#5A5D61" ,fontSize: 13, textAlignVertical: "center"}}>{"Suggested rate $49/hr"}</Text>
                        </View>
                        <View style={{width:"15%",marginEnd:10}} >
                            <Text style={{color:"red",fontSize:15,textAlign:"center"}} >{"$56/hr"}</Text>
                        </View>
                    </View>
                </View>
</View>
                </ScrollView>
            </View>

        )
    }

    }