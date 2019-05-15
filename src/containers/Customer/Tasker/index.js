import React, {Component} from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    TouchableHighlight
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";


import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class Tasker extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isModalVisible: false,

            ListData: [
                {
                    id: 1,
                    imgpath: require("../../../assets/images/pimg1.png"),
                    heading: "Frances Z.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed ",
                    Crown: false,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",
                },
                {
                    id: 2,
                    imgpath: require("../../../assets/images/pimp2.png"),
                    heading: "Morgan G",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                    Crown: true,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",
                },
                {
                    id: 3,
                    imgpath: require("../../../assets/images/pimp3.png"),
                    heading: "Terrance B.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                    Crown: false,
                    para: "Working as maintainanc Technician for several year I have assissted clients in residential properties with putting together furniture shelving units and appliances ",
                },

            ]
        }
        this.toggleModal2=this.toggleModal2.bind(this);
    }

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});

    };
    toggleModal2  () {
        this.props.navigation.navigate("PaymentUpdate")
      this.setState({isModalVisible:false});
      this.RBSheet.close();


    };


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
            <ScrollView>
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
                <FlatList data={this.state.ListData}
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
                                  <View style={{marginStart: 30, flexDirection: "row", marginTop: 20}}>
                                      <Image source={item.imgpath}
                                             style={{width: 70, height: 70, resizeMode: "contain"}}/>
                                      <View style={{flexDirection: "column", marginStart: 7}}>
                                          <TouchableOpacity
                                              onPress={() => this.props.navigation.navigate("TaskerProfile")}>
                                              <Text style={{
                                                  color: "black",
                                                  fontWeight: "bold",
                                                  fontSize: 15
                                              }}>{item.heading}</Text>
                                          </TouchableOpacity>
                                          <View style={{flexDirection: "column",}}>
                                              {item.Crown &&
                                              <View style={{flexDirection: "row", alignItems: "center"}}>
                                                  <Image source={require("../../../assets/images/crown.png")}
                                                         style={{
                                                             resizeMode: "contain",
                                                             height: 14,
                                                             width: 14,
                                                             marginEnd: 5
                                                         }}/>
                                                  <Text style={{color: "red"}}>{"Elite Service Pro"} </Text>

                                              </View>
                                              }
                                              <Text style={{color: "#646464", size: 8}}>{item.Text1}</Text>

                                              <Text style={{color: "#646464", size: 8}}>{item.Text2}</Text>
                                          </View>


                                      </View>


                                  </View>
                                  <View stye={{flexDirection: "column",}}>
                                      <Text style={{
                                          marginStart: 35,
                                          marginEnd: 20,
                                          marginTop: 15,
                                          marginBottom: 15,
                                          color: "black"
                                      }}>{item.para}</Text>

                                      <TouchableOpacity onPress={() => {
                                          this.RBSheet.open();
                                      }}
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
                                              <Text
                                                  style={{color: "white", fontSize: 15}}>{"Select for 24$ / hr"}</Text>


                                          </View>
                                      </TouchableOpacity>

                                  </View>

                              </View>

                          }/>


            </ScrollView>
            <RBSheet
                ref={ref => {
                    this.RBSheet = ref;
                }}
                animationType="fade"
                duration={500}
                height={370}
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
                            <Image source={require("../../../assets/images/pimp2.png")}
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
                <Modal isVisible={this.state.isModalVisible}
                       onBackdropPress={() => this.setState({ isModalVisible: false })}

                >
                    <View style={{justifyContent:"center",alignItems:"center",}} >
                    <View style={{flexDirection:"column",backgroundColor:"white",height:180,borderRadius:5
                        ,width:300,justifyContent:"center",alignItems:"center",
                    }}  >
                        <Text style={{color:"black"}}  >{"There was a problem with you credit card"}</Text>
                        <Text style={{color:"black"}} >{"If this continues, please try setting up a"}</Text>
                        <Text style={{color:"black", marginBottom:50}} >{"new one for your account"}</Text>
                        <TouchableOpacity style={{
                            backgroundColor: "red",
                            height: 50,
                            width: "100%",
                            alignItems: "center",
                            position: "absolute",
                            bottom: 0
                        }} onPress={()=>this.toggleModal2()}>
                            <View style={{}}>
                                <Text style={{color: "white", fontSize: 15, marginTop: 15}}>Update Payment Method</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    </View>

                </Modal>





        </View>)
    }


}