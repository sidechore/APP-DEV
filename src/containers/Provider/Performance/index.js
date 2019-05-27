import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";

export default class Performance extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
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
                        text: "Performance",
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
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",marginBottom:40}} >
                    <View  style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"85%",
                    backgroundColor:"white",marginTop:20,borderRadius:5}}>
                        <View style={{justifyContent:"center",alignItems:'center',width:"100%",marginTop:10,marginBottom:10}}>
                        <Text style={{color:"red",fontSize:17}} >{"April Invoices"}</Text>
                        </View>
                        <View style={{width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA",}}></View>
                            <View style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:25}}  >{"$0"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"AMMOUNT EARNED"}</Text>
                                </View>
                                <View style={{height:"100%",width:0.5 ,backgroundColor: "#DADADA", }}></View>
                                <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:25}} >{"0"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"JOB COUNT"}</Text>
                                </View>
                            </View>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA", }}></View>
                            <View style={{marginTop:10,marginBottom:10,width:"90%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"#646464",fontSize:13}}  >
                                    {"Please note: Funds normally become available 2-3 business days after you complete a job."}
                                </Text>
                            </View>
                        </View>



                    </View>
                    <View  style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"85%",
                        backgroundColor:"white",marginTop:20,borderRadius:5}}>
                        <View style={{justifyContent:"center",alignItems:'center',width:"100%",marginTop:10,marginBottom:10}}>
                            <Text style={{color:"red",fontSize:17}} >{"Performance Summary"}</Text>
                        </View>
                        <View style={{width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA",}}></View>
                            <View style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{flexDirection:"column",width:"33%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"red",fontSize:20}}  >{"22.2%"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"Reschedule"}</Text>
                                </View>
                                <View style={{height:"100%",width:0.5 ,backgroundColor: "#DADADA",}}></View>
                                <View style={{flexDirection:"column",width:"33%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"red",fontSize:20}}  >{"10%"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"Cancellation"}</Text>
                                </View>
                                <View style={{height:"100%",width:0.5 ,backgroundColor: "#DADADA", }}></View>
                                <View style={{flexDirection:"column",width:"33%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"red",fontSize:20}} >{"0%"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"Late Start"}</Text>
                                </View>
                            </View>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA", }}></View>
                            <View style={{marginTop:10,marginBottom:10,width:"70%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"#646464",fontSize:13,justifyContent:"center",alignItems:"center"}}  >
                                    {"Performance Summary allows you to understand if you're meeting our performance expectations."}
                                </Text>
                            </View>
                        </View>



                    </View>
                    <View  style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"85%",
                        backgroundColor:"white",marginTop:20,borderRadius:5}}>
                        <View style={{justifyContent:"center",alignItems:'center',width:"100%",marginTop:10,marginBottom:10}}>
                            <Text style={{color:"red",fontSize:17}} >{"Ratings & Reviews"}</Text>
                        </View>
                        <View style={{width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA", }}></View>
                            <View style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:25}}  >{"100%"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"FEEDBACK RATING"}</Text>
                                </View>
                                <View style={{height:"100%",width:0.5 ,backgroundColor: "#DADADA",}}></View>
                                <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:25}} >{"68"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"RATINGS COUNT"}</Text>
                                </View>
                            </View>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA",}}></View>
                            <View style={{marginTop:10,marginBottom:10,width:"85%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"#646464",fontSize:13}}  >
                                    {"The better the performance the more jobs you can win. Jobs assignment factors the pro's performance from the last 30 days."}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View  style={{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"85%",
                        backgroundColor:"white",marginTop:20,borderRadius:5}}>
                        <View style={{justifyContent:"center",alignItems:'center',width:"100%",marginTop:10,marginBottom:10}}>
                            <Text onPress={()=>this.props.navigation.navigate("ServicesAndRates")} style={{color:"red",fontSize:17}} >{"Services & Rates"}</Text>
                        </View>
                        <View style={{width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA",}}></View>
                            <View style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}}>
                                <View style={{flexDirection:"column",width:"25%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:25}}>{"2"}</Text>
                                    <Text style={{color:"#B8B8B8",fontSize:11,marginTop:5}}  >{"SKILLS"}</Text>
                                </View>
                                <View style={{height:"100%",width:0.5 ,backgroundColor: "#DADADA", }}></View>
                                <View style={{flexDirection:"column",width:"75%",justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:10}} >
                                    <Text style={{color:"#646464",fontSize:14,marginStart:20}} >{"2 of your rates can be optimized to help your business."}</Text>

                                </View>
                            </View>


                        </View>
                    </View>
                    <View  style={{flexDirection:"column",width:"85%",
                        backgroundColor:"white",marginTop:20,borderRadius:5}}>
                        <View style={{justifyContent:"center",alignItems:'center',width:"100%",marginTop:10,marginBottom:10}}>
                            <Text style={{color:"red",fontSize:17}} >{"Best Match Status"}</Text>
                        </View>
                        <View style={{width:"100%",flexDirection:"column",}}>
                            <View style={{height: 0.5,width:"100%" ,backgroundColor: "#DADADA",}}></View>
                            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
                                <View style={{width:"10%",marginEnd:5,justifyContent:"center",alignItems:"center",marginStart:25}} >
                                <Image stle={{resizeMode:"contain",width:35,height:35}}
                                    source={require("../../../assets/images/crown.png")}/>
                                </View>
                                <View style={{width:"70%",marginEnd:5,marginStart:10}} >
                                <Text style={{fontSize:16,color:"#646464"}} >{"You don't qualify this month"}</Text>
                                </View>

                            </View>

                            <View style={{marginTop:10,width:"100%",justifyContent:"center",alignItems:"center",marginBottom:20}}>
                                <View style={{width:"75%",}}>
                                <Text style={{fontSize:12}} >{"Sorry, you did not submit enough invoices this month to qualify for Best Match. You must submit at least 10 invoices each month to qualify."}</Text>
                            </View>
                        </View>






                        </View>
                    </View>



                </View>
                </ScrollView>


            </View>
        )
    }
}

