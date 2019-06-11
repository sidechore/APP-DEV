import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";
export default class PerformanceSummary extends Component {
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
                        text: "Performance Summary",
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
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",marginTop:30}}>
                <View style={{width:"85%",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:5}}>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
                <Text style={{color:"red",fontSize:16,fontWeight:"200"}} >{"Reschedule"}</Text>
                <Image source={require("../../../assets/images/info.png")} style={{resizeMode:"contain",height:12,width:12,marginStart:10}} />
                </View>
                <View style={{flexDirection:"column",marginTop:20}}>
                <Text style={{fontSize:25,color:"black",fontWeight:"200"}} >{"2.2%"}</Text>
                
                </View>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",marginTop:20,marginBottom:25}}>
                <View style={{justifyContent:"center",alignItems:"center",width:"30%",backgroundColor:"#F9C8C9",height:25,borderBottomLeftRadius:30,borderTopLeftRadius:30}} >
                    <Text style={{color:"white"}} >{"Poor!"}</Text>
                </View>
                <View style={{width:"30%",backgroundColor:"#B8D8E1",height:25}} >
                    <Text>{""}</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",textAlign:"center",width:"30%",backgroundColor:"#E1DFDF",height:25,borderBottomRightRadius:30,borderTopRightRadius:30}} >
                    <Text style={{color:"white"}} >{"Great!"}</Text>
                </View>

                </View>
                
                </View>



                <View style={{width:"85%",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:5,marginTop:30}}>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
                <Text style={{color:"red",fontSize:16,fontWeight:"200"}} >{"Cancellation"}</Text>
                <Image source={require("../../../assets/images/info.png")} style={{resizeMode:"contain",height:12,width:12,marginStart:10}} />
                </View>
                <View style={{flexDirection:"column",marginTop:20}}>
                <Text style={{fontSize:25,color:"black",fontWeight:"200"}} >{"10%"}</Text>
                
                </View>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",marginTop:20,marginBottom:20}}>
                <View style={{justifyContent:"center",alignItems:"center",width:"30%",backgroundColor:"#F9C8C9",height:25,borderBottomLeftRadius:30,borderTopLeftRadius:30}} >
                    <Text style={{color:"white"}} >{"Poor!"}</Text>
                </View>
                <View style={{width:"30%",backgroundColor:"#B8D8E1",height:25}} >
                    <Text>{""}</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",textAlign:"center",width:"30%",backgroundColor:"#E1DFDF",height:25,borderBottomRightRadius:30,borderTopRightRadius:30}} >
                    <Text style={{color:"white"}} >{"Great!"}</Text>
                </View>

                </View>
                <View style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:25}} >
                <View style={{width:"40%",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                
                <Text style={{color:"black",fontSize:23,fontWeight:"200"}} >{"0"}</Text>
                <Text style={{fontSize:11,color:"#B7B7B7",marginTop:5}} >{"NO SHOWS"}</Text>
                </View>
                
                <View style={{height:"100%",width:0.8 ,backgroundColor: "#DADADA", }}></View>
                <View style={{width:"40%",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <Text style={{color:"black",fontSize:23,fontWeight:"200"}} >{"0"}</Text>
                <Text style={{fontSize:11,color:"#B7B7B7",marginTop:5}} >{"LATE CANCELS"}</Text>
                </View>



                </View>
                
                </View>


                <View style={{width:"85%",justifyContent:"center",alignItems:"center",backgroundColor:"white",borderRadius:5,marginTop:30}}>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
                <Text style={{color:"red",fontSize:16,fontWeight:"200"}} >{"Late Start"}</Text>
                <Image source={require("../../../assets/images/info.png")} style={{resizeMode:"contain",height:12,width:12,marginStart:10}} />
                </View>
                <View style={{flexDirection:"column",marginTop:20}}>
                <Text style={{fontSize:25,color:"black",fontWeight:"200"}} >{"0%"}</Text>
                
                </View>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",marginTop:20,marginBottom:25}}>
                <View style={{justifyContent:"center",alignItems:"center",width:"30%",backgroundColor:"#F9C8C9",height:25,borderBottomLeftRadius:30,borderTopLeftRadius:30}} >
                    <Text style={{color:"white"}} >{"Poor!"}</Text>
                </View>
                <View style={{width:"30%",backgroundColor:"#B8D8E1",height:25}} >
                    <Text>{""}</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center",textAlign:"center",width:"30%",backgroundColor:"#E1DFDF",height:25,borderBottomRightRadius:30,borderTopRightRadius:30}} >
                    <Text style={{color:"white"}} >{"Great!"}</Text>
                </View>

                </View>
                
                </View>
                </View>
                </View>
        )
                }
}