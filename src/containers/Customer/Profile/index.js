import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";


export default class Profile extends Component {
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
                    backgroundColor: "white", height: 50,
                    borderRadius: 5,
                    alignItems:"center"

                }}>
                    <View style={{width:"90%"}} >
                        <Text
                            style={{marginStart: 15, fontSize: 15, color: "black",marginBottom:5}}>{item.text}</Text>
                    </View>
                    <View style={{width:"10%"}} >


                    <Image style={{resizeMode:"contain",
                        height:14,width:14
                    }}  source={require("../../../assets/images/arrowforward.png")}/>
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
                    text: "Profile",
                    style: {fontWeight: "bold", color: "black", fontSize: 18}
                }}
                containerStyle={{
                    backgroundColor: "white",
                    justifyContent: "space-around"
                }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />
                <ScrollView>

                <View style={{width:"100%",marginBottom:20,alignItems:"center"}} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Account")} >
                    {this.renderRowProfile({
                        text:"Account",



                    })}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ChangePassword")}  >
                    {this.renderRowProfile({
                        text:"Change Password",


                    })}
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=> this.props.navigation.navigate("UpdatePayment")} >
                    {this.renderRowProfile({
                        text:"Update Payment",



                    })}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.RBSheet.open()}  >
                    {this.renderRowProfile({
                        text:"Location",



                    })}
                    </TouchableOpacity>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        animationType="fade"
                        duration={500}
                        height={350}
                        customStyles={{container: {alignItems: "center"}}}>
                        <View style={{
                            flexDirection: "column", width: "100%", alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20,

                        }}>
                            <Image source={require("../../../assets/images/bigPin.png")}
                            style={{resizeMode:"contain"
                            ,width:60,
                                height:60
                            }}

                            />

                            <Text style={{fontSize: 16, color: "black",fontWeight:"bold",marginTop:20,marginBottom:20}}>{"Allow Location"}</Text>
                            <Text style={{marginStart:40,
                                marginEnd:40,color:"black"}}>{"To match you with local service professional, we need to first know what city you are in."}</Text>


                            <TouchableOpacity onPress={() => this.RBSheet.close()}
                                                                  style={{
                                                                      justifyContent: "center",
                                                                      alignItems: "center",
                                                                      marginTop: 30,
                                                                      width: "85%",
                                                                      backgroundColor: "#FA2021",
                                                                      height: 50,
                                                                      borderRadius: 7,
                                                                      marginBottom: 10
                                                                  }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 15}}>{"Allow Location"}</Text>
                            </View>
                        </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.RBSheet.close()}
                                              style={{
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  marginTop: 10,
                                                  width: "85%",
                                                  backgroundColor: "black",
                                                  height: 50,
                                                  borderRadius: 7,
                                                  marginBottom: 20
                                              }}>
                                <View style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Text style={{color: "white", fontSize: 15}}>{"Not Now"}</Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </RBSheet>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Promotions") } >
                    {this.renderRowProfile({
                        text:"Promotions",



                    })}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Notifications")}>
                    {this.renderRowProfile({
                        text:"Notification",



                    })}</TouchableOpacity   >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Help")}>
                    {this.renderRowProfile({
                        text:"Help",



                    })}
                        </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("TabNavigator")}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginTop: 20,
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
                            <Text style={{color: "white", fontSize: 18}}>{"Sign Out"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>

            </View>
        )
    }




}