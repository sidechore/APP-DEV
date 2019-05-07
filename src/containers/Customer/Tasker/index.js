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
                    imgpath: require("../../../assets/images/ppp.png"),
                    heading: "Frances Z.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed ",
                    para: "working as maintainanc Technicion for several year" +
                        " i have assissted clients in residential properties" +
                        "with putting together furniture shelving units " +
                        " and appliances "
                },
                {
                    id: 2,
                    imgpath: require("../../../assets/images/ppp.png"),
                    heading: "Morgan G",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                    para: "working as maintainanc Technicion for several year" +
                        " i have assissted clients in residential properties" +
                        "with putting together furniture shelving units " +
                        " and appliances "

                },
                {
                    id: 3,
                    imgpath: require("../../../assets/images/ppp.png"),
                    heading: "Terrance B.",
                    Text1: "93% positive reviews",
                    Text2: "133 Tasks Completed",
                },

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
                                      marginBottom: 25
                                  }}>
                    <View style={{
                        backgroundColor: "black",
                        height: 50,
                        width: 300,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7


                    }}>
                        <Text style={{color: "white", fontSize: 15}}>{"Sort by: Number of Reviews"}</Text>


                    </View>
                </TouchableOpacity>


            </View>
            <FlatList style={{width: "100%",marginTop: 10,backgroundColor:"white"}}
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
                                  marginStart: 20,
                                  marginTop: 10,
                                  justifyContent: "center",
                                  backgroundColor: "white",
                              }}>
                              <Image source={item.imgpath} style={{width:100,height:100,resizeMode:"contain"}}  />
                              <View style={{flexDirection:"row"}}>

                                  <Text>{item.heading}</Text>

                              </View>
                              <View style={{flexDirection:"column"}} >
                                  <Text>{item.Text1}</Text>
                                  <Text>{item.Text2}</Text>
                              </View>

                          </View>
                      }/>


        </View>)
    }


}