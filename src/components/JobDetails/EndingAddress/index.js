import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView, FlatList,} from 'react-native';
import {Header, Image} from "react-native-elements";

export default class EndingAddress extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            places: [],
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false
        };
        this.state.places = [];
        this.getPlaces = this.getPlaces.bind(this);
    }

    getPlaces(txt) {
        fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + txt + '&inputtype=textquery&fields=formatted_address,name,geometry&key=AIzaSyD5YuagFFL0m0IcjCIvbThN25l0m2jMm2w')
            .then(response => response.json())
            .then(response => {
                console.log("Placess----> " + JSON.stringify(response));
                let result = response.candidates;
                this.setState({places: result});
            })

    }



    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%",}}>
            <View style={{flexDirection: "row", width: "80%", marginTop: 5}}>
                <Image source={require("../../../assets/images/searchleft.png")} style={{
                    marginTop: 15,
                    marginStart: 25,
                    height: 20,
                    width: 20,
                    resizeMode: "contain"
                }}/>
                <TextInput
                    style={{height: 50, width: "100%", marginStart: 15}}
                    onChangeText={(text) => this.getPlaces(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />
            </View>
            <View style={{
                height: 1,
                width: "85%",
                backgroundColor: "#DADADA",
                marginStart: 25,
                marginEnd: 20,
                marginBottom: 10
            }}></View>
        </View>;
    }

    render() {
        return (
            <View style={{flexDirection: "column", width: "100%"}}>

                    <View style={{flexDirection: "row", width: "100%", backgroundColor: "white",}}>
                        <View style={{flexDirection: "row", width: "100%", alignItems: "center",}}>
                            {this.renderRowInputEmail({
                                hintText: "Job Location",
                            })}
                        </View>
                    </View>
                <FlatList style={{width: "100%",}}
                          data={this.state.places}
                          showsVerticalScrollIndicator={false}

                          extraData={this.state.places}
                          renderItem={({item}) =>
                              <View style={{alignItems: "center", width: "100%"}}>

                                  <View style={{
                                      flexDirection: "row", width: "85%", marginTop: 20,
                                      backgroundColor: "white",

                                      height: 70,
                                      borderRadius: 5,
                                  }}>
                                      <View style={{
                                          width: "15%",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          height: "100%"
                                      }}>
                                          <Image style={{
                                              flexDirection: "column",
                                              resizeMode: "contain",
                                              width: 25,
                                              height: 25
                                          }}
                                                 source={require("../../../assets/images/pin.png")}/>
                                      </View>
                                      <View style={{flexDirection: "column", width: "80%", justifyContent: "center"}}>
                                          <Text
                                              style={{marginStart: 5, fontSize: 15, color: "black"}}>{item.name}</Text>
                                          <Text style={{marginStart: 5, fontSize: 13}}>{item.formatted_address}</Text>
                                      </View>
                                  </View>
                              </View>

                          }/>


            </View>
        )
    }
}