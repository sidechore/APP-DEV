import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class SelectLocation extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false
        };

    }

    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20, marginTop: 10}}>
                <Image source={require("../../../assets/images/search.png")}
                       style={{resizeMode: "contain", width: 15, height: 15, marginTop: 20, marginStart: 10}}/>
                <TextInput
                    style={{height: 50, width: "60%", marginStart: 10}}
                    onChangeText={(text) => this.checkLocation(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftEmail &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}

                <TouchableOpacity style={{
                    flexDirection: "row", justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                    width: "30%"
                }}>

                    <Text style={{color: "red", fontSize: 15}}>Cancel</Text>

                </TouchableOpacity>

            </View>
            <View
                style={{height: 0.5, width: "60%", backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>


        </View>;
    }

    renderRowInputSheet(item) {
        return <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <View style={{height: 1.5, width: "100%", backgroundColor: "#DADADA", marginTop: 15}}></View>
            <TouchableOpacity style={{marginTop: 10,}} onPress={() => this.props.navigation.navigate("StayUpToDate")}>
                <Text style={{color: "red", fontSize: 15}}>
                    {item.text}
                </Text></TouchableOpacity>
        </View>
    }

    checkLocation(Text) {
        if (Text.length === 0) {
            this.setState({showIconLeftEmail: false})
            this.setState({Cross1: true})
        } else {
            this.setState({showIconLeftEmail: true});
            this.setState({Cross1: false})
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
                        text: "Select a Location",
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

                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 120, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color: "red",
                            marginBottom: 20,
                            marginTop: 60,
                            fontSize: 18
                        }}>{"Service Location"}</Text>
                        <View style={{
                            flexDirection: "column", marginBottom: 80, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"To provide you with services available in your"}</Text>
                            <Text style={{color: "black"}}>{"area, please select a service location."}
                            </Text>
                        </View>
                    </View>
                    <View style={{width: "100%", height: 250, backgroundColor: "white",}}>
                        {this.renderRowInputEmail({
                            hintText: "Enter a Location",

                        })}

                        <View style={{
                            flexDirection: "row", width: "100%",
                            marginStart: 30, marginTop: 40
                        }}>
                            <Image source={require("../../../assets/images/pin.png")}
                                   style={{resizeMode: "contain", width: 19, height: 19}}

                            />
                            <TouchableOpacity onPress={() => {
                                this.RBSheet.open();
                            }}>
                                <Text style={{
                                    color: "red",
                                    marginStart: 10,
                                    fontSize: 15
                                }}>{"Use Current Location"}</Text>
                            </TouchableOpacity>

                            <RBSheet
                                ref={ref => {
                                    this.RBSheet = ref;
                                }}
                                animationType="fade"
                                duration={500}
                                height={310}
                                customStyles={{container: {alignItems: "center"}}}>
                                <View style={{
                                    flexDirection: "column", width: "100%", alignItems: "center",
                                    marginTop: 20,
                                    marginBottom: 20
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"We do not have any service providers"}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"availaible in this area. Would you like us to"}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"notify you when SideChore becomes"}</Text>
                                    <Text style={{fontSize: 16, color: "black"}}>{"availaible?"}</Text>
                                    {this.renderRowInputSheet({
                                        text: "Notify me",
                                    })}
                                    {this.renderRowInputSheet({
                                        text: "Browse the app",
                                    })}
                                    {this.renderRowInputSheet({
                                        text: "Select another location",
                                    })}
                                </View>
                            </RBSheet>


                        </View>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ResetPassword")}
                                          style={{justifyContent: "center", alignItems: "center", marginTop: 35}}>
                            <View style={{
                                flexDirection: "column",
                                backgroundColor: "#FA2021",
                                width: "85%",
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Select"}</Text>


                            </View>
                        </TouchableOpacity>
                    </View>



                </ScrollView>


            </View>

        )


    }


}