import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";
let getmonth = new Date().getMonth();
let moment = require("moment");
export default class Invoice extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            monthSet: "",
            lastChecked: 0,
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            
        }

    }

    Left() {
        if (getmonth === 0) {
            getmonth = 11;
        } else {
            getmonth = getmonth - 1;
        }
        const input = getmonth + 1 + "-19";
        const output = moment(input, "MM-YY");
        let lastDay = output.endOf('month').format('DD');
        let daysData = [];
        for (let i = 0; i < lastDay; i++) {
            daysData.push({id: i, day: i + 1, dayColor: "White", daynoC: "black", daymonC: "black"})
        }
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon, dayData: daysData})
    }

    Right() {
        if (getmonth === 11) {
            getmonth = 0;
        } else {
            getmonth = getmonth + 1;
        }
        const input = getmonth + 1 + "-19";
        const output = moment(input, "MM-YY");
        let lastDay = output.endOf('month').format('DD');
        let daysData = [];
        for (let i = 0; i < lastDay; i++) {
            daysData.push({id: i, day: i + 1, dayColor: "White", daynoC: "black", daymonC: "black"})
        }
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon, dayData: daysData})
    }
    render() {
        return (
            <View style={[styles.container,{alignItems:"center"}]}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "Invoice",
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
                    rightComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/download.png")} style={{
                                marginStart: 10, height: 17, width: 17, resizeMode: "contain"


                            }}/></TouchableOpacity>}
                />
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"}}  >
 
                        <View style={{marginBottom: 20, flexDirection: "row", width: "95%",marginTop:20}}>
                            <TouchableOpacity style={{
                                width: "10%",
                                justifyContent: 'center',
                                alignItems: "center"
                            }} onPress={() => this.Left()}>
                                <View>
                                    <Image source={require("../../../assets/images/arrowback.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                width: "80%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }}><TouchableOpacity onPress={() => this.props.navigation.navigate("ServiceArea")}>
                                <Text style={{color: "red", fontSize: 17}}>{this.state.monthSet}</Text>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{
                                width: "10%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }} onPress={() => this.Right()}>
                                <View>

                                    <Image source={require("../../../assets/images/arrowforward.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />

                                </View>
                            </TouchableOpacity>
                        </View>
                      

                   </View>
                   <View style={{flexDirection:"row",width:"85%",backgroundColor:"white",borderRadius:5,justifyContent:"center",alignItems:"center"}} > 
                        <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center"}}>
                        <View style={{marginBottom:20,marginTop:30,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Text style={{fontWeight:"200",color:"",fontSize:25,marginBottom:10}} >{"$0"}</Text>
                        <Text style={{fontWeight:"200",color:"#B8B8B8",fontSize:12}} >{"TOTAL EARNED"}</Text>
                        </View>
                        <View style={{marginBottom:20,marginTop:10,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Text style={{fontWeight:"200",color:"black",fontSize:20,marginBottom:10}} >{"$0"}</Text>
                        <Text style={{fontWeight:"200",color:"#B8B8B8",fontSize:11,}} >{"DISBURSED"}</Text>
                        </View>
                        
                        </View>
                        <View style={{height:"75%",width:1 ,backgroundColor: "#DADADA", }}></View>
                        <View style={{flexDirection:"column",width:"50%",justifyContent:"center",alignItems:"center"}}>
                        <View style={{marginBottom:20,marginTop:30,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Text style={{fontWeight:"200",color:"",fontSize:18,marginBottom:10}} >{"0"}</Text>
                        <Text style={{fontWeight:"200",color:"#B8B8B8",fontSize:12}} >{"JOB COUNT"}</Text>
                        </View>
                        <View style={{width:"90%",height:1 ,backgroundColor: "#DADADA", }}></View>
                        <View style={{marginBottom:20,marginTop:10,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Text style={{fontWeight:"200",color:"black",fontSize:18,marginBottom:10}} >{"0"}</Text>
                        <Text style={{fontWeight:"200",color:"#B8B8B8",fontSize:12,}} >{"DISBURSED"}</Text>
                        </View>
                        </View>


                        </View>
                </View>
        )
                }
            }