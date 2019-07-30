import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";


export default class PaymentUpdate extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',
            isModalVisible: false,
        };
    }

    renderRowInputPhone(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPhone(text)}
                    placeholder={item.hintText}

                />

                {this.state.showIconLeftpass1 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 1, backgroundColor: "#DADADA", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    checkPhone(text) {
        if (text.length >=11 && text.length <= 13) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1:false})
        }else if(text.length===0 ||text.length>13){
            this.setState({showIconLeftpass1: false});
            this.setState({Cross1:true})
        }
        else{
            this.setState({showIconLeftpass1: false});
            this.setState({Cross1:true})


        }
    }
    toggleModal2  () {
        this.RBSheet.close();
        this.props.navigation.navigate("JobDetails",{Screen:"payside"});
        this.setState({isModalVisible:false});



    };
    toggleModal = () => {
        this.RBSheet.close();
        this.setState({isModalVisible: !this.state.isModalVisible});

    };



    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "Payment Update",
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
                <ScrollView>
                    <View style={{flexDirection:"column",width:"100%",backgroundColor:"white"}}>
                        <View style={{width: "100%", height: 250, backgroundColor: "white",marginTop:20,

                        }}>
                            {this.renderRowInputPhone({
                                hintText: "Phone Number",

                            })}

                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Payment")} >

                                <View style={{
                                    flexDirection: "row", width: "100%", marginTop: 20,
                                    backgroundColor: "white",
                                    marginStart:10,

                                    height: 50,
                                    borderRadius: 5,
                                    alignItems:"center"

                                }}>
                                    <View style={{width:"10%"}} >
                                        <Image source={require("../../../../assets/images/mscard.png")}
                                               style={{resizeMode:"contain",width:35,height:35,
                                                   marginStart:15
                                               }}

                                        />
                                    </View>

                                    <View style={{width:"75%"}} >

                                        <Text
                                            style={{marginStart: 35, fontSize: 15, color: "#646464",marginBottom:5}}>{"Ending in 2458"}</Text>
                                    </View>

                                    <View style={{width:"10%"}} >


                                        <Image style={{resizeMode:"contain",
                                            height:14,width:14,
                                        }}  source={require("../../../../assets/images/arrowforward.png")}/>
                                    </View>


                                </View>
                            </TouchableOpacity>
                            <View style={{height: 1, backgroundColor: "#DADADA", marginStart: 25, marginEnd: 25,}}></View>
                            <View style={{justifyContent:"center",alignItems:"center",width:"100%",marginTop:10}}  >
                                <Text style={{color:"#646464"}} >{"Final amount will be charged once your Job"} </Text>
                                <Text  style={{color:"#646464"}}  >{"is completed."}</Text>
                            </View>

                        </View>

                        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <Text style={{color:"red",marginEnd:5}} >{"Cancellation"}</Text>
                            <Text>{"&"}</Text>
                            <Text style={{color:"red",marginStart:5}}>{"Support Fee"}</Text>
                        </View>

                         <TouchableOpacity onPress={() => {
                            this.RBSheet.open();
                        }}
                                          style={{
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop:20,

                                              marginBottom: 20
                                          }}>
                            <View style={{
                                backgroundColor: "red",
                                height: 50,
                                width: 320,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text
                                    style={{color: "white", fontSize: 15}}>{"Continue"}</Text>


                            </View>
                        </TouchableOpacity>


                    </View>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        animationType="fade"
                        duration={500}
                        height={450}
                        customStyles={{container: {alignItems: "center"}}}>
                        <View style={{
                            flexDirection: "column",
                            backgroundColor: "white",
                            bottom:0,

                            width:"100%",


                        }}>
                            <View style={{ flexDirection:"row",width:"100%" ,marginTop:20,marginBottom:20,}}>
                                <View style={{width:"30%",justifyContent:"center",
                                    alignItems:"center"}}>
                                    <Image source={require("../../../../assets/images/pimp2.png")}
                                           style={{width: 60, height: 60, resizeMode: "contain"}}
                                    />
                                </View>
                                <View style={{width:"70%",justifyContent:"center",flexDirection:"column"}}>
                                    <Text style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: 15
                                    }}>{"Furniture Assembly"}</Text>
                                    <Text style={{color:"#646464"}} >{"Morgan G"}</Text>

                                </View>


                            </View>
                            <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                            <View style={{flexDirection:"row",width:"100%", alignItems:"center",marginTop:20,marginBottom:20,marginStart:20,marginEnd:20,}}>
                                <View style={{width:"30%",}} >
                                    <Text style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: 15
                                    }}>{"Date & Time"}</Text>
                                </View>
                                <View style={{width:"70%",alignItems:"center"}} >
                                    <Text style={{color:"black"}}>{"Fri, Feb 22, 2019 at 3:30 PM"}</Text>
                                </View>
                            </View>
                            <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                            <View style={{flexDirection:"row",width:"100%",
                                alignItems:"center",marginTop:20,marginBottom:20,marginStart:20,marginEnd:20}}>
                                <View style={{width:"75%",}} >
                                    <Text style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: 15
                                    }}>{"Rate"}</Text>
                                </View>
                                <View style={{width:"20%",}} >
                                    <Text style={{color:"black"}} >{"$24 / hr"}</Text>
                                </View>
                            </View>
                            <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                            <View  style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:20}}>

                                <Text style={{color:"black",fontSize:12}} >{"You will not charged until your job is completed."}</Text>
                                <Text style={{color:"black",fontSize:12}} >{"A 7.5% Trust & Support fee will be added to your subtotal"}</Text>

                            </View>

                            <View style={{width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#EAEAEA"}}>
                                <Text style={{color:"black",fontSize:18,margin:15}} >{"Add Promo Code"}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>this.toggleModal()}
                                              style={{
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  marginTop:20,

                                                  marginBottom: 20
                                              }}>
                                <View style={{
                                    backgroundColor: "red",
                                    height: 50,
                                    width: 320,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 7


                                }}>
                                    <Text
                                        style={{color: "white", fontSize: 15}}>{"Confirm"}</Text>


                                </View>
                            </TouchableOpacity>

                        </View>
                    </RBSheet>


                </ScrollView>

                <Modal isVisible={this.state.isModalVisible}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}
                       style={{zIndex:9999}}>
                    <View style={{justifyContent:"center",alignItems:"center",}} >
                        <View style={{flexDirection:"column",backgroundColor:"white",height:220,borderRadius:5
                            ,width:250,justifyContent:"center",alignItems:"center",
                        }}  >
                            <Image source={require("../../../../assets/images/pimg1.png")}
                            style={{width:60,height:60}}
                            />
                            <Text style={{color:"black",fontWeight:"bold",marginBottom:15}}  >{"You have booked John Brown"}</Text>
                            <Text style={{color:"black",fontSize:13}} >{"Thanks for booking. John will contact"}</Text>
                            <Text style={{color:"black",fontSize:13 ,marginBottom:50}} >{"you within next 24 hours."}</Text>
                            <TouchableOpacity style={{
                                backgroundColor: "red",
                                height: 50,
                                width: "100%",
                                alignItems: "center",
                                position: "absolute",
                                borderBottomLeftRadius:5,
                                borderBottomRightRadius:5,
                                bottom: 0,
                            }} onPress={()=>this.toggleModal2()}>
                                <View style={{}}>
                                    <Text style={{color: "white", fontSize: 15, marginTop: 15}}>{"Great!"}</Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>

                </Modal>

            </View>
        )}

}