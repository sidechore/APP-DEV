import React, {Component} from 'react';
import { Text, View} from 'react-native';

import {CheckBox, Image} from "react-native-elements";

export default class JobSize extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false,
            date: new Date()
        };

    }
    renderRowWithChecks(item) {
        return<CheckBox

            /*title={item.title}*/

            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={item.checked}
            checkedColor={"red"}
            containerStyle={{backgroundColor:"grey", borderWidth:0,marginStart:10}}
            textStyle={{fontWeight:"normal",color:"black"}}


        />;



    }
    render() {
        return (
            <View style={{
                flexDirection: "column", width: "100%", justifyContent: "center",
                alignItems: "center", marginTop: 20
            }}>
                <Text style={{color: "red", fontSize: 18}}>{"What is the Estimated Time"}</Text>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginTop: 20,
                    height: 200,
                    width: "100%",
                    marginStart:20,

                    alignItems: "center"
                }}>
                    <View style={{flexDirection:"column",}}>
                        <View style={{flexDirection:"row",margin:10}}>
                            <Image source={require("../../../assets/images/radioUN.png")}
                            style={{resizeMode:"contain",
                            height:20,
                                width:20
                            }}
                            />
                            <View style={{flexDirection:"column"}} >
                                <Text  style={{marginStart:10,color:"black",fontSize:16}} >{"Small"}</Text>
                                <Text  style={{marginStart:10,color:"#B9B9B9"}} >{"Estimate 1 hour or less"}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",margin:10}}>
                            <Image source={require("../../../assets/images/radioCH.png")}
                                   style={{resizeMode:"contain",
                                       height:20,
                                       width:20
                                   }}
                            />
                            <View style={{flexDirection:"column"}} >
                                <Text  style={{marginStart:10,color:"black",fontSize:16}} >{"Medium"}</Text>
                                <Text  style={{marginStart:10,color:"#B9B9B9"}} >{"Estimate 2 to 4 hours"}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",margin:10}}>
                            <Image source={require("../../../assets/images/radioUN.png")}
                                   style={{resizeMode:"contain",
                                       height:20,
                                       width:20
                                   }}
                            />
                            <View style={{flexDirection:"column"}} >
                                <Text  style={{marginStart:10,color:"black",fontSize:16}} >{"Large"}</Text>
                                <Text  style={{marginStart:10,color:"#B9B9B9"}} >{"Estimate 4 hours or more"}</Text>
                            </View>
                        </View>


                    </View>

                </View>
            </View>
        )
    }
}