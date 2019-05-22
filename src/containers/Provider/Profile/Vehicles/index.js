import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

export default class Vehicles extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({



        })
    }
    renderRowProfile(item){
        return(
            <View style={{alignItems: "center", width: "100%",}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 100,
                    borderRadius: 5,


                }}>
                    <View style={{flexDirection: "column", width: "80%",marginStart:10,marginTop:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                        <Text
                            style={{marginStart: 5, fontSize: 13, textAlignVertical: "center",
                                color: "black"
                            }}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%",alignItems:"center",marginTop:20}} >


                        <View style={{flexDirection:"column" , width:"100%",justifyContent: "center",
                            alignItems:"center", }}>
                            <Switch
                                onTintColor="red"
                                thumbTintColor="white"
                                value={item.valS} style={{
                                position: 'absolute',

                                tintColor: 'red',

                            }}/>
                        </View>
                    </View>


                </View>

            </View>
        )

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
                        text: "Vehicle Sizes",
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
                <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}} >
                    {this.renderRowProfile({

                        text2:"Car",
                        text1:"For transporting small-sized items.",
                        valS:true
                    })}
                    {this.renderRowProfile({

                        text2:"Minivan / SUV / Van",
                        text1:"For transporting medium-sized items.",
                        valS:false
                    })}
                    {this.renderRowProfile({

                        text2:"Pickup Truck / Moving Truck",
                        text1:"For transporting large-sized items.",
                        valS:false
                    })}
                </View>

            </View>
        )
    }}