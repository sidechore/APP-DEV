import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
export default class JobDetails extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
        }
    }
componentDidMount() {

    const {navigation} = this.props;
    const Screen = navigation.getParam('Screen', 'NO-ID');
    if (Screen === "payside") {
       this.RBSheet5.open();
    }
}
    togglereview(){
        this.RBSheet5.close();
        this.props.navigation.navigate("Review")

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
                        text: "Job Details",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }
                />
                <ScrollView>

                <View style={{flexDirection:"column",width:"100%",}}>
                    <Text style={{color:"red",fontSize:15,margin:20}}>{"Service Pro"}</Text>
                    <View style={{flexDirection:"row",width:"100%",backgroundColor:"white"}}>
                        <View  style={{width:"30%",justifyContent:"center",alignItems:"center",marginTop:15,
                        marginBottom:15
                        }}>
                            <Image source={require("../../../../assets/images/pimg1.png")}
                            style={{resizeMode:"contain",width:80,height:80}}
                            />

                        </View>
                        <View style={{width:"70%",justifyContent:"center",flexDirection:"column"}}>
                            <Text
                            style={{color:"black",fontSize:18,marginBottom:10}}
                            >{"You've Booked John Brown"}</Text>
                            <Text style={{color:"#646464",fontSize:13}} >{"Thanks for booking. John Brown will"}</Text>
                            <Text  style={{color:"#646464",fontSize:13}} >{"contact you within the next 24 hours"}</Text>

                        </View>
                    </View>
<View style={{justifyContent:"center",alignItems:"center"}} >
                    <TouchableOpacity onPress={()=>this.RBSheet.open()}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginTop: 20,
                                          width: "85%",
                                          backgroundColor: "#FA2021",
                                          height: 50,
                                          borderRadius: 7,

                                      }}>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "white", fontSize: 18}}>{"Contact"}</Text>
                        </View>
                    </TouchableOpacity>

                         </View>
                    <Text style={{color:"red",fontSize:15,margin:20}}>{"Details"}</Text>
                    <View style={{flexDirection:"column",width:"100%",backgroundColor:"white"}}>
                        <View  style={{flexDirection:"row",width:"100%",
                        marginStart:20,
                            marginEnd:20,
                            marginTop:10,
                            marginBottom:10

                        }}>
                            <View style={{width:"40%",flexDirection:"row",alignItems:"center"}}>
                               <Image source={require("../../../../assets/images/date.png")}
                               style={{width:15,height:15,resizeMode:"contain"}}
                               />
                                <Text style={{color:"#646464",marginStart:10,fontSize:15}}>{"Date"}</Text>
                            </View>
                            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end"

                            }}>
                                <Text style={{color:"black"}}  >{"Monday - May 13, 2019 "}</Text>
                            </View>
                        </View>
                        <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                        <View  style={{flexDirection:"row",width:"100%",
                            marginStart:20,
                            marginEnd:20,
                            marginTop:10,
                            marginBottom:10

                        }}>
                            <View style={{width:"40%",flexDirection:"row",alignItems:"center"}}>
                                <Image source={require("../../../../assets/images/time.png")}
                                       style={{width:15,height:15,resizeMode:"contain"}}
                                />
                                <Text style={{color:"#646464",marginStart:10,fontSize:15}}>{"Time"}</Text>
                            </View>
                            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end"

                            }}>
                                <Text style={{color:"black"}}  >{"Mon at 9:30pm"}</Text>
                            </View>
                        </View>
                        <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                        <View  style={{flexDirection:"row",width:"100%",
                            marginStart:20,
                            marginEnd:20,
                            marginTop:10,
                            marginBottom:10

                        }}>
                            <View style={{width:"40%",flexDirection:"row",alignItems:"center"}}>
                                <Image source={require("../../../../assets/images/price.png")}
                                       style={{width:15,height:15,resizeMode:"contain"}}
                                />
                                <Text style={{color:"#646464",marginStart:10,fontSize:15}}>{"Rate"}</Text>
                            </View>
                            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end"

                            }}>
                                <Text style={{color:"black"}}  >{"$24.70/hr"}</Text>
                            </View>
                        </View>
                        <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                        <View  style={{flexDirection:"row",width:"100%",
                            marginStart:20,
                            marginEnd:20,
                            marginTop:10,
                            marginBottom:10

                        }}>
                            <View style={{width:"40%",flexDirection:"row",alignItems:"center"}}>
                                <Image source={require("../../../../assets/images/location.png")}
                                       style={{width:15,height:15,resizeMode:"contain"}}
                                />
                                <Text style={{color:"#646464",marginStart:10,fontSize:15}}>{"Location"}</Text>
                            </View>
                            <View style={{width:"50%",justifyContent:"center",alignItems:"flex-end"

                            }}>
                                <Text style={{color:"black"}}  >{"1214 OakCrest Green Ct"}</Text>
                            </View>
                        </View>
                        <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                        <View  style={{flexDirection:"row",width:"100%",
                            marginStart:20,
                            marginEnd:20,
                            marginTop:10,
                            marginBottom:10

                        }}>
                            <View style={{width:"40%",flexDirection:"row",alignItems:"center"}}>
                                <Image source={require("../../../../assets/images/tasknotes.png")}
                                       style={{width:15,height:15,resizeMode:"contain"}}
                                />
                                <Text style={{color:"#646464",marginStart:10,fontSize:15}}>{"Job Notes"}</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",
                        marginStart:45,marginEnd:30,marginTop:5,marginBottom:10

                        }}>
                            <Text
                            style={{color:"black"}}
                            >{"Lorem Ipsum is a dummy text of printing and typesetting industry. "}</Text>
                        </View>

                        <View style={{height: 1, backgroundColor: "#DADADA",width:"100%"}}></View>
                        <View style={{flexDirection:"column",width:'100%', marginStart:20,
                            marginEnd:20,
                            marginTop:20,
                            marginBottom:20}}>
                            <View>
                                <Text style={{color:"black",fontSize:15}}>{"Job Size:"}</Text>
                                <Text style={{color:"black",fontSize:15}}>{"Small-Est. 1hr"}</Text>
                            </View>
                            <View  style={{marginTop:25}} >
                                <Text style={{color:"black",fontSize:15}}>{"Tools Needed:"}</Text>
                                <Text style={{color:"black",fontSize:15}}>{"Service Pro will bring a Basic Tool Kit."}</Text>
                            </View>
                            <View  style={{marginTop:25,width:"90%"}} >
                                <Text style={{color:"black",fontSize:15}}>{"Address:"}</Text>
                                <Text style={{color:"black",fontSize:15}}>{"1214 OakCrest Green Ct, Morrisville, NC 27560, USA"}</Text>
                            </View>
                        </View>

                    </View>

                </View>
                    <View style={{justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 20,
                                width: "85%",
                                backgroundColor: "#FA2021",
                                height: 50,
                                borderRadius: 7,

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Book Again"}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.RBSheet4.open()}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 20,
                                marginBottom:40,
                                width: "85%",
                                backgroundColor: "black",
                                height: 50,
                                borderRadius: 7,

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Cancel Job"}</Text>
                            </View>
                        </TouchableOpacity>


                    </View>


                </ScrollView>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    animationType="fade"
                    duration={500}
                    height={200}
                    customStyles={{container: {alignItems: "center"}}}>
                    <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",
                    backgroundColor:"red",height:200

                    }}>
                        <Text
                        style={{fontSize:15,color:"white",fontWeight:"bold"}}
                        >{"Contact Service Pro "}</Text>

                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("Contact")}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Message"}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Call"}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </RBSheet>
                <RBSheet
                ref={ref => {
                    this.RBSheet4 = ref;
                }}
                animationType="fade"
                duration={500}
                height={200}
                customStyles={{container: {alignItems: "center"}}}>
                <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",
                    backgroundColor:"White",height:200

                }}>
                    <Text
                        style={{color:"black",fontSize:20,marginBottom:15}}
                    >{"Cancel Job"}</Text>
                    <Text style={{color:"#646464"}} >{"Are you sure you would like to cancel?"}</Text>

                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Review")}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                            marginBottom:10,
                            width: "85%",
                            backgroundColor: "red",
                            height: 50,
                            borderRadius: 7,
                            borderWidth:1,
                            borderColor:"white"

                        }}>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "white", fontSize: 18}}>{"Cancel Job"}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:"#646464"}} >{"Do not cancel"}</Text>

                </View>
            </RBSheet>
                <RBSheet
                    ref={ref => {
                        this.RBSheet5 = ref;
                    }}
                    animationType="fade"
                    duration={500}
                    height={250}
                    customStyles={{container: {alignItems: "center"}}}>
                    <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",
                        backgroundColor:"White",height:200,marginTop:20

                    }}>
                        <Image source={require("../../../../assets/images/StarCircled.png")}
                               style={{resizeMode:"contain",height:70,width:70,marginBottom:20}}
                        />

                        <Text style={{color:"black",fontSize:20}} >{"How would you rate our app?"}</Text>

                        <TouchableOpacity
                            onPress={()=>this.togglereview()}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Like It!"}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{color:"#646464",fontSize:15}} >{"Improvement is needed"}</Text>

                    </View>
                </RBSheet>
            </View>

        )
    }
}