import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions,ScrollView} from 'react-native';
import {styles} from './styles';
import {isUserWhitespacable} from "@babel/types";
export default class HomeJobs extends Component {
    constructor(props) {
        super(props);
    }


    renderrowJobs(item){

     return<View style={{flexDirection:"column",backgroundColor:"white"
     ,marginTop:10,marginBottom:10
     }}>
            <View  style={{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",
                marginTop:15,

            }}>
                <View style={{width:"50%",alignItems:"flex-start",
                }} >
                <Text
                style={{marginStart:15,color:"red",fontSize:17}}
                >{"9:00"} AM</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}} >
                <Text style={{marginEnd:10,color:"#B8B8B8",fontSize:13}}  >{"4/20"}</Text>
                </View>


            </View>
        <View style={{marginTop:3}} >
            <Text style={{marginStart:15,color:"black",}}>{"Jennifer's Elliptical Assembly"}</Text>
        </View>
         <View  style={{flexDirection:"row",width:"100%",justifyContent:"flex-start",alignItems:"flex-start",
               marginStart:15,marginTop:3,marginBottom:15

         }}>
             <Text style={{color:"#B8B8B8",fontSize:12}} >{"Service Professional:"}</Text>
             <Text style={{color:"black",marginStart:2,fontSize:12}} >{"John Doe"}</Text>
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
                        text: "Home",
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
                <View style={{
                    flexDirection: "column", width: "100%", backgroundColor: "white",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <View style={{
                        width: "80%",
                        marginTop: 20,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{fontSize: 17, color: "black"}}>
                            {"Hi, [First Name] Here's what's going "}</Text>
                        <Text style={{fontSize: 17, color: "black"}}>
                            {"on today."}</Text>
                    </View>
                </View>
      <ScrollView>
                <View style={{
                    justifyContent: "center", alignItems: "center", marginTop: 15,
                    marginBottom: 5
                }}>
                    <TouchableOpacity

                    >
                        <Text
                            style={{
                                color: "red",
                                fontSize: 17

                            }}
                        >{"Today's Scheduled Jobs"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"90%",
                flexDirection:"column",marginStart:20
                }}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate("ScheduledJobDetails")} >
                    {this.renderrowJobs()}
                    </TouchableOpacity>
                    {this.renderrowJobs()}
                    {this.renderrowJobs()}
                    {this.renderrowJobs()}
                </View>
      </ScrollView>

            </View>
        )
    }
}