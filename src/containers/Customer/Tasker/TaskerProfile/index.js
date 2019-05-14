import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Rating, AirbnbRating} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";



export default class TaskerProfile extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    renderrowProfile(item){
        return<View style={{ width:"100%",flexDirection:"row",backgroundColor:"white",}}>
            <View style={{marginTop:10,flexDirection:"row"}}  >
            <View  style={{flexDirection:"row",width:"15%", marginStart:30 }}>
                <Image source={require("../../../../assets/images/user.png")}
                style={{resizeMode:"contain",width:45,height:45,}}

                />
            </View>
            <View  style={{ flexDirection:"column",width:"50%", marginBottom:20}}  >

                <Text style={{color:"black"}}  >{item.text1}</Text>
                <Text style={{color:"#B8B8B8"}}>{item.text2}</Text>
                <Text style={{color:"black",marginTop:10,}}   >{item.text3}</Text>
            </View>
            <View style={{flexDirection:"row",width:"30%"}}>
                <Rating
                    type='custom'


                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10, }}
                    imageSize={15}
                    ratingBackgroundColor="transparent"
                    ratingColor={"red"}

                />
            </View>
            </View>
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
                        text: "Tasker Profile",
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
                <ScrollView>
                    <View style={{
                        width: "100%", justifyContent: "center", alignItems: "center",
                        marginTop: 20
                    }}>

                        <Image source={require("../../../../assets/images/pimp2.png")}
                               style={{resizeMode: "contain", height: 110, width: 110}}

                        />
                        <Text style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 15,
                            marginTop: 10
                        }}>{"John Doe"}</Text>
                        <Text>{"Onboard since 2017 "}</Text>
                    </View>
                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <View style={{
                            flexDirection: "row", width: "80%",
                            backgroundColor: "white", height: 60, marginTop: 30, borderRadius: 5
                        }}>
                            <View style={{
                                flexDirection: "column", width: "50%", justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{color: "red", fontSize: 18}}>{"97%"}</Text>
                                <Text style={{color: "#B8B8B8", fontSize: 11}}>{"Feedback Rating"}</Text>
                            </View>
                            <View style={{
                                flexDirection: "column",
                                height: 50,
                                marginTop: 5,
                                width: 0.5,
                                backgroundColor: "#DADADA"
                            }}></View>
                            <View style={{
                                flexDirection: "column", width: "50%", justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "red", fontSize: 18}}>
                                    {"13"}
                                </Text>
                                <Text style={{fontSize: 11, color: "#B8B8B8"}}>
                                    {"Completed Moving Jobs"}
                                </Text>
                            </View>

                        </View>
                    </View>
                    <View  style={{width:"100%",backgroundColor:"white", flexDirection:"column",marginTop:20,
                        justifyContent:"center",alignItems:"center"
                    }}>
                        <View style={{width:"81%",}}>

                        <Text style={{color:"black",fontSize:16,marginTop:15,marginBottom:10}}  >{"How Can I Help"}</Text>
                            <Text style={{color:"#646464",marginBottom:15}}>{"I have a 2006 F150 and retchet straps. I am skilled loading uhuai trucks to maximize space. "}</Text>
                        </View>
                    </View>


                    <View  style={{width:"100%",backgroundColor:"white", flexDirection:"column",marginTop:20,
                        justifyContent:"center",alignItems:"center"
                    }}>
                        <View style={{width:"81%",}}>

                            <Text style={{color:"black",fontSize:15,marginTop:15,}}  >{"Show Reviews & Ratings"}</Text>
                            <Text style={{color:"red",marginBottom:15,fontSize:16,marginTop:10}}>{"All Jobs "}</Text>
                        </View>

                    </View>
                    <View style={{height: 1, backgroundColor: "#DADADA"}}></View>
                    <View  style={{width:"100%",backgroundColor:"white", flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}>
                        <View style={{width:"80%",marginTop:10,marginStart:10}}>


                            <Text style={{color:"red",marginBottom:15,fontSize:15}}>{"Moving Help "}</Text>
                        </View>
                        <View  style={{width:"5%"}}>
                           <Image source={require("../../../../assets/images/arrowdownred.png")}
                           style={{resizeMode:"contain",width:14,height:14}}
                           />
                        </View>

                    </View>
                    <View  style={{width:"100%",justifyContent:"center",alignItems:"center"}} >
                        {this.renderrowProfile({
                            text1:"Sarah M",
                            text2:"Tuesday-January, 1",
                            text3:"Quick and Great. Thanks! "



                        })}
                        <View style={{height: 1, backgroundColor: "#DADADA",width:"90%"}}></View>
                        {this.renderrowProfile({
                            text1:"Sarah M",
                            text2:"Tuesday-January, 1",
                            text3:"Quick and Great. Thanks! "



                        })}
                        <View style={{height: 1, backgroundColor: "#DADADA",width:'100%'}}></View>

                    </View>
                    <View  style={{width:"100%",backgroundColor:"white", flexDirection:"column",
                        justifyContent:"center",alignItems:"center",marginBottom:20
                    }}>
                        <View style={{width:"81%",}}>

                            <Text style={{color:"red",marginTop:10,marginBottom:10,fontSize:16}}>{"Mounting"}</Text>
                        </View>

                    </View>

                    <TouchableOpacity
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",

                                          marginBottom: 50
                                      }}>
                        <View style={{
                            backgroundColor: "red",
                            height: 50,
                            width: 320,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7


                        }}>
                            <Text style={{color: "white", fontSize: 15}}>{"Select for 24$ / hr"}</Text>


                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>


        )
    }

}