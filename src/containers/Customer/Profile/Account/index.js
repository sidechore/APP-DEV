import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

export default class Account extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    renderRowProfile(item){
        return(
        <View style={{alignItems: "center", width: "100%"}}>

            <View style={{
                flexDirection: "row", width: "85%", marginTop: 20,
                backgroundColor: "white",

                height: 70,
                borderRadius: 5,
            }}>

                <View style={{flexDirection: "column", width: "80%", justifyContent: "center",marginStart:10}}>
                    <Text
                        style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>
                    <Text style={{marginStart: 5, fontSize: 13}}>{item.text1}</Text>
                </View>
            </View>
        </View>
        )

    }
    renderRowInputSheet(item) {
        return <View style={{flexDirection: "column", width: "100%"}}>
            <View style={{height: 1.5, width: "100%", backgroundColor: "#DADADA", marginTop: 15}}></View>
            <TouchableOpacity style={{marginTop: 10,}} onPress={() => {
                this.RBSheet.close();
            }}>
                <Text style={{color: "black", fontSize: 15, marginStart:30}}>
                    {item.text}
                </Text></TouchableOpacity>
        </View>
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
                        text: "Account",
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
                rightComponent={

                    <TouchableOpacity style={{marginEnd:20}} >

                        <Text style={{color:"black",fontWeight:"bold"}} >{"Edit"}</Text>

                    </TouchableOpacity>

                }

                />


                <ScrollView>
                    <View style={{width:"100%",justifyContent:"center",alignItems:"center",
                    marginTop:20
                    }}>
                        <TouchableOpacity onPress={() => {
                            this.RBSheet.open();
                        }}  >
                        <Image source={require("../../../../assets/images/pimp2.png")}
                        style={{resizeMode:"contain",height:110,width:110}}

                        />
                        </TouchableOpacity>
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            animationType="fade"
                            duration={500}
                            height={250}
                            customStyles={{container: {alignItems: "center"}}}>
                            <View style={{
                                flexDirection: "column", width: "100%", alignItems: "center",
                                marginTop: 30,
                                marginBottom: 30
                            }}>

                                <Text style={{fontSize: 16, color: "black",fontWeight:"bold"}}>{"Select a Photo"}</Text>
                                {this.renderRowInputSheet({
                                    text: "Select from camera",
                                })}
                                {this.renderRowInputSheet({
                                    text: "Select from library ",
                                })}

                                <TouchableOpacity onPress={() => this.RBSheet.close()}
                                                  style={{
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      marginTop: 30,
                                                      width: "85%",
                                                      backgroundColor: "#FA2021",
                                                      height: 50,
                                                      borderRadius: 7,
                                                      marginBottom: 20
                                                  }}>
                                    <View style={{
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <Text style={{color: "white", fontSize: 18}}>{"Cancel"}</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </RBSheet>
                        <Image source={require("../../../../assets/images/camera.png")}
                               style={{resizeMode:"contain",height:39,width:39,position:"absolute",bottom:45,left:30}}

                        />
                        <Text style={{color:"black",fontSize:20,marginTop:20}}  >
                            {"John Doe"}

                        </Text>

                    </View>
                    <View style={{marginBottom:40  }}  >

                        {this.renderRowProfile({
                            text1:"John Doe",
                            text2:"Name"
                        })}
                        {this.renderRowProfile({
                            text1:"JohnDoe@gmail.com",
                            text2:"Email"
                        })}
                        {this.renderRowProfile({
                            text1:"(123) 456-7890",
                            text2:"Mobile"
                        })}
                        {this.renderRowProfile({
                            text1:"12345",
                            text2:"Zip Code"
                        })}
                        {this.renderRowProfile({
                            text1:"US",
                            text2:"Country"
                        })}
                    </View>

                </ScrollView>

            </View>)}
}