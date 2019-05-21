import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
export default class Message extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
        };
    }

    renderSentText(item){
    return<View style={{flexDirection:"row",width:"100%"}}>
        <View style={{width:"20%",justifyContent:"center",alignItems:"center",
      marginTop:20,flexDirection:"row"
        }}>
            <Image source={require("../../../../assets/images/pimg1.png")}
            style={{resizeMode:"contain",width:45,height:45}}
            />

        </View>
        <View style={{width:"75%",backgroundColor:"white",flexDirection:"row",
        marginTop:20,borderRadius:5,alignItems:"center"
        }}>
            <View style={{flexDirection:"column",marginStart:10,marginTop:5,marginBottom:5,
            width:"100%"
            }}>
            <Text style={{color:"black"}} >{item.txt}</Text>
                <View style={{alignItems:"flex-end",width:"90%"}} >
                <Text style={{fontSize:12,marginTop:10,}}>12:15am Sun 19 Dec</Text>
                </View>
            </View>
        </View>


    </View>


    }
    renderreceiveText(item){
        return<View style={{flexDirection:"row",width:"100%"}}>

            <View style={{width:"75%",backgroundColor:"red",flexDirection:"row",
                marginTop:20,borderRadius:5,alignItems:"center",marginStart:20
            }}>
                <View style={{flexDirection:"column",marginStart:10,marginTop:5,marginBottom:5,
                    width:"100%"
                }}>
                    <Text style={{color:"white"}} >{item.txt}</Text>
                    <View style={{alignItems:"flex-end",width:"90%"}} >
                        <Text style={{fontSize:12,marginTop:10,color:"white"}}>12:15am Sun 19 Dec</Text>
                    </View>
                </View>
            </View>
            <View style={{width:"20%",justifyContent:"center",alignItems:"center",
                marginTop:20,flexDirection:"row"
            }}>
                <Image source={require("../../../../assets/images/pimp2.png")}
                       style={{resizeMode:"contain",width:45,height:45}}
                />

            </View>


        </View>


    }
    renderImagetext(item){

        return <View style={{flexDirection:"row",width:"100%"}}>
            <View style={{width:"20%",justifyContent:"center",alignItems:"center",
                marginTop:20,flexDirection:"row"
            }}>
                <Image source={require("../../../../assets/images/pimg1.png")}
                       style={{resizeMode:"contain",width:45,height:45}}
                />

            </View>
        <View style={{flexDirection:"column",width:"75%",backgroundColor:"white",
        marginTop:20,marginBottom:20,marginStart:5,marginEnd:10,justifyContent:"center",
            alignItems:"center"

        }}>
        <Image source={require("../../../../assets/images/listimg4.png")}
        style={{width:80,height:80,margin:10}}
        />
            <View style={{alignItems:"flex-end",width:"90%",marginBottom:5,marginEnd:20}} >
                <Text style={{fontSize:12,marginTop:10,}}>12:15am Sun 19 Dec</Text>
            </View>

        </View>

        </View>

    }


    render() {
        return (

            <ScrollView>


            <View style={{flexDirection: "column", width: "100%",marginBottom:40

            }}>


                {this.renderSentText({
                    txt:"Where are you"


                })}
                {this.renderSentText({
                    txt:"Where are you"


                })}
                {this.renderImagetext()}
                {this.renderreceiveText({
                    txt:"received text"

                })}
                {this.renderreceiveText({
                    txt:"where are you"

                })}



            </View>
            </ScrollView>


        )}

}
