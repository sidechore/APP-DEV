import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";

export default class Message extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
            MsgData: [
                {
                    id: 1,
                    body: "hello",
                    time: "12:15 am Sun 19 Dec"
                },
                {
                    id: 2,

                    body: "who are you",
                    time: "01:15 am Sun 19 Dec"
                },
                {
                    id: 3,

                    body: "where are you",
                    time: "06:15 am Sun 19 Dec"
                },
                {
                    id: 4,
                    body: "hahaha",
                    time: "07:15 pm Sun 20 Dec"
                },
                {
                    id: 5,

                    body: "what is your name",
                    time: "09:50 am Sun 21 Dec"
                },
                {
                    id: 6,
                    body: "what are you doing?",
                    time: "04:23 pm Sun 22 Dec"
                },
            ]

        }
    }


    renderSentText(item) {
        return <View style={{flexDirection: "row", width: "100%"}}>
            <View style={{
                width: "20%", justifyContent: "center", alignItems: "center",
                marginTop: 20, flexDirection: "row"
            }}>
                <Image source={require("../../../../assets/images/pimg1.png")}
                       style={{resizeMode: "contain", width: 45, height: 45}}
                />

            </View>
            <View style={{
                width: "75%", backgroundColor: "white", flexDirection: "row",
                marginTop: 20, borderRadius: 5, alignItems: "center"
            }}>
                <View style={{
                    flexDirection: "column", marginStart: 10, marginTop: 5, marginBottom: 5,
                    width: "100%"
                }}>
                    <Text style={{color: "black"}}>{item.txt}</Text>
                    <View style={{alignItems: "flex-end", width: "90%"}}>
                        <Text style={{fontSize: 12, marginTop: 10,}}>{item.txt2}</Text>
                    </View>
                </View>
            </View>


        </View>


    }
    checkEmail(){}

    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'row', width: "100%",backgroundColor:"white",}}>
            <View style={{flexDirection: "row", marginStart: 5,width:"84%"}}>
                <TextInput
                    style={{height: 50, width: "90%",}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={"Type a Message"}
                    keyboardType={"email-address"}
                />
                <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}} >
                <Image source={require("../../../../assets/images/paper-clips.png")}
                style={{resizeMode:"contain",width:25,height:25}}

                />
                </View>
            </View>
            <TouchableOpacity style={{flexDirection:"row",width:"15%",marginEnd:10,backgroundColor:"red",
            justifyContent:"center",alignItems:"center"
            }} >
                <Image source={require("../../../../assets/images/mailred.png")}
                style={{resizeMode:"contain",width:25,height:25}}
                />
            </TouchableOpacity>

        </View>;
    }

    renderreceiveText(item) {
        return <View style={{flexDirection: "row", width: "100%"}}>

            <View style={{
                width: "75%", backgroundColor: "red", flexDirection: "row",
                marginTop: 20, borderRadius: 5, alignItems: "center", marginStart: 20
            }}>
                <View style={{
                    flexDirection: "column", marginStart: 10, marginTop: 5, marginBottom: 5,
                    width: "100%"
                }}>
                    <Text style={{color: "white"}}>{item.txt}</Text>
                    <View style={{alignItems: "flex-end", width: "90%"}}>
                        <Text style={{fontSize: 12, marginTop: 10, color: "white"}}>{item.txt2}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: "20%", justifyContent: "center", alignItems: "center",
                marginTop: 20, flexDirection: "row"
            }}>
                <Image source={require("../../../../assets/images/pimp2.png")}
                       style={{resizeMode: "contain", width: 45, height: 45}}
                />

            </View>
        </View>
    }

    renderImagetext(item) {

        return <View style={{flexDirection: "row", width: "100%"}}>
            <View style={{
                width: "20%", justifyContent: "center", alignItems: "center",
                marginTop: 20, flexDirection: "row"
            }}>
                <Image source={require("../../../../assets/images/pimg1.png")}
                       style={{resizeMode: "contain", width: 45, height: 45}}
                />

            </View>
            <View style={{
                flexDirection: "column", width: "75%", backgroundColor: "white",
                marginTop: 20, marginBottom: 20, marginStart: 5, marginEnd: 10, justifyContent: "center",
                alignItems: "center"

            }}>
                <Image source={require("../../../../assets/images/listimg4.png")}
                       style={{width: 80, height: 80, margin: 10}}
                />
                <View style={{alignItems: "flex-end", width: "90%", marginBottom: 5, marginEnd: 20}}>
                    <Text style={{fontSize: 12, marginTop: 10,}}>{item.txt2}</Text>
                </View>
            </View>
        </View>
    }

    render() {
        return (

            <View style={{
                flexDirection: "column", width: "100%", marginBottom: 40
            }}>

                <FlatList style={{width: "100%", marginBottom: 10, marginTop: 10}}
                          data={this.state.MsgData}
                          keyExtractor={item => item.id}
                          showsVerticalScrollIndicator={false}
                          numColumns={1}
                          removeClippedSubviews={false}
                          renderItem={({item}) =>
                              <View>
                                  {this.renderSentText({
                                      txt: item.body,
                                      txt2:item.time
                                  })}

                                  {this.renderImagetext({
                                      txt2:item.time}
                                      )}

                                  {this.renderreceiveText({
                                      txt: item.body,
                                      txt2:item.time

                                  })}

                              </View>

                          }
                />
                <View style={{position:"absolute",flexDirection:"row",bottom:99}} >
                    {this.renderRowInputEmail()}
                </View>

            </View>


        )
    }

}
