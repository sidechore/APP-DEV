import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
export default class Promote extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({



        })
    }
    renderRowProfile(item){
        return(
            <View style={{alignItems: "center", width: "100%"}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 65,
                    borderRadius: 5,
                    alignItems:"center"

                }}>
                    <View style={{flexDirection: "column", width: "80%", justifyContent: "center",marginStart:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                        <Text
                            style={{marginStart: 5, fontSize: 13,color:"#BABABA" ,textAlignVertical: "center"}}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%"}} >

                        {item.Greytext &&
                        <Image style={{resizeMode:"contain",
                            height:20,width:20
                        }}  source={require("../../../../assets/images/Sharered.png")}/>
                        }
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
                        text: "Promote",
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
                <View style={{flexDirection:"column"}}>
                    {this.renderRowProfile({

                        text2:"26SJX3",
                        text1:"Give clients $10 off their next job",
                        Greytext:false
                    })}
                    {this.renderRowProfile({

                        text2:"https://sc.co/john-v--17",
                        text1:"Share your profile with clients",
                        Greytext:true
                    })}


                </View>
            </View>
        )
    }

}