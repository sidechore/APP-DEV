import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";


import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class Tasker extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            ListData: [
                {
                    id: 1,
                    imgpath: require("../../../assets/images/pimg1.png"),
                    heading: "Frances Z.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed ",
                    Crown:false,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",
                },
                {
                    id: 2,
                    imgpath: require("../../../assets/images/pimp2.png"),
                    heading: "Morgan G",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                    Crown:true,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",
                },
                {
                    id: 3,
                    imgpath: require("../../../assets/images/pimp3.png"),
                    heading: "Terrance B.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                    Crown:false,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",                },

            ]
        }
    }

    render() {
        return (<View style={styles.container}>
            <Header
                statusBarProps={{barStyle: "light-content"}}
                barStyle="light-content" // or directly
                style={{backgroundColor: "white"}}
                outerContainerStyles={{backgroundColor: "white"}}

                centerComponent={{
                    text: "Select a Professional",
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


                        }}/></TouchableOpacity>}/>
            <View style={{
                flexDirection: "column", width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20

            }}>
                <Text style={{color: "black"}}>{"Browse through the list of Best Pick"}</Text>
                <Text style={{color: "black"}}>{"Professionals that serve your area. "}</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectLocation")}
                                  style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                      marginTop: 25,
                                      marginBottom: 10
                                  }}>
                    <View style={{
                        backgroundColor: "black",
                        height: 50,
                        width: 320,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7
                    }}>
                        <Text style={{color: "white", fontSize: 15}}>{"Sort by: Number of Reviews"}</Text>
                    </View>
                </TouchableOpacity>


            </View>
            <FlatList style={{width: "100%",}}
                      data={this.state.ListData}
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator={false}
                      numColumns={1}
                      removeClippedSubviews={false}
                      renderItem={({item}) =>
                          <View
                              style={{
                                  flexDirection: "column",
                                  width: "100%",
                                  marginBottom: 10,

                                  marginTop: 5,

                                  backgroundColor: "white",
                              }}>
                              <View style={{marginStart:30,flexDirection:"row",marginTop:20}}  >
                              <Image source={item.imgpath} style={{width:70,height:70,resizeMode:"contain"}}  />
                              <View style={{flexDirection:"column",marginStart:7}}>

                                  <Text style={{color:"black",fontWeight:"bold",fontSize:15}}  >{item.heading}</Text>
                                  <View style={{flexDirection:"column",}} >
                                      {item.Crown &&
                                      <View style={{flexDirection: "row", alignItems: "center"}}>
                                          <Image source={require("../../../assets/images/crown.png")}
                                                 style={{resizeMode: "contain", height: 14, width: 14, marginEnd: 5}}/>
                                          <Text style={{color: "red"}}>{"Elite Tasker"} </Text>

                                      </View>
                                      }
                                      <Text style={{color:"#646464",size:8}}>{item.Text1}</Text>

                                      <Text style={{color:"#646464",size:8}} >{item.Text2}</Text>
                                  </View>


                              </View>


                              </View>
                              <View stye={{flexDirection:"column",}} >
                                  <Text style={{marginStart:35,marginEnd:20,marginTop:15,marginBottom:15,color:"black"}}   >{item.para}</Text>

                                  <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectLocation")}
                                                    style={{
                                                        justifyContent: "center",
                                                        alignItems: "center",

                                                        marginBottom: 25
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

                              </View>

                          </View>

                      }/>


        </View>)
    }


}