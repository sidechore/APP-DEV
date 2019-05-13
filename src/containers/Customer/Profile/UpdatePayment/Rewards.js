import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
export default class Rewards extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',
        };
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
                        text: "Rewards",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                            <Image source={require("../../../../assets/images/arrowback.png" )} style={{
                                marginStart:10, height:14,width:14,resizeMode:"contain"


                            }}  /></TouchableOpacity>
                    }


                />

                <View style={{alignItems: "center", width: "100%"}}>

                    <View style={{
                        flexDirection: "row", width: "85%", marginTop: 20,
                        backgroundColor: "white",

                        height: 50,
                        borderRadius: 5,
                        alignItems:"center"

                    }}>


                        <View style={{width:"90%"}} >

                            <Text
                                style={{marginStart: 15, fontSize: 14, color:"#646464",marginBottom:5}}>{"Availaible Balance"}</Text>
                        </View>

                            <View style={{width:"10%"}} >


                                <Text style={{color:"#646464"}}  >{"0"}</Text>
                            </View>


                    </View>

                    <View style={{width:"85%",marginTop:25,flexDirection:"column",justifyContent:"center"
                        ,marginStart:25,

                    }} >
                        <Text style={{fontSize:13,color:"#646464"}}
                        >
                            {"Account balance are automatically applied when a Job is completed."}
                        </Text>
                    </View>
            </View>

            </View>

        )}

                }