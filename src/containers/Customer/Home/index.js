import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";


import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class JobSearch extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false,
            ListData: [
                {
                    id: 1,
                    imgpath: require("../../../assets/images/listimg1.png"),
                    heading: "Moving",
                    Text1: "Furniture | Boxes",
                    Text2: "Bedframe"

                },
                {
                    id: 2,
                    imgpath: require("../../../assets/images/listimg2.png"),
                    heading: "Furniture Assembly",
                    Text1: "Bed | Dresser | Table",
                    Text2: "Grill | Bookcase | Desk"

                },

                {
                    id: 3,
                    imgpath: require("../../../assets/images/listimg3.png"),
                    heading: "Mounting",
                    Text1: "Tv Mount | Mirror",
                    Text2: "Curtain Rods | Signs"

                },
                {
                    id: 4,
                    imgpath: require("../../../assets/images/listimg4.png"),
                    heading: "Home Repair",
                    Text1: "Doors | Flooring",
                    Text2: "Light Fixtures"

                },
                {
                    id: 5,
                    imgpath: require("../../../assets/images/listimg5.png"),
                    heading: "Cleaning",
                    Text1: "Basic or Deep Cleaning",
                    Text2: "Entire House"

                },
                {
                    id: 6,
                    imgpath: require("../../../assets/images/listimg6.png"),
                    heading: "Junk Removal",
                    Text1: "Haul off boxes",
                    Text2: "Standard pickup load"

                },


            ]
        };

    }

    checkLocation(Text) {
        if (Text.length === 0) {
            this.setState({showIconLeftEmail: false})
            this.setState({Cross1: true})
        } else {
            this.setState({showIconLeftEmail: true});
            this.setState({Cross1: false})
        }

    }


    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginEnd: 10,}}>

                <TextInput
                    style={{height: 50, width: "100%", marginStart: 10}}
                    onChangeText={(text) => this.checkLocation(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftEmail &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


            </View>


        </View>;
    }


    render() {
        return (<View style={styles.container}>

                <View style={{flexDirection: "row", width: "100%", backgroundColor: "white",}}>
                    <View style={{flexDirection: "row", width: "70%", color: "yellow", alignItems: "center"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/pin.png")} style={{
                                marginTop: 20,
                                marginBottom: 20,
                                marginStart: 10,
                                height: 20,
                                width: 20,
                                resizeMode: "contain"


                            }}/></TouchableOpacity>
                        {this.renderRowInputEmail({
                            hintText: "Raleigh/Durham",

                        })}

                    </View>
                    <View style={{flexDirection: "row", width: "30%", color: "red", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/search.png")} style={{
                                marginTop: 20,
                                marginBottom: 20,
                                marginStart: 50,
                                height: 20,
                                width: 20,
                                resizeMode: "contain"


                            }}/></TouchableOpacity>
                    </View>

                </View>
                <View style={{
                    flexDirection: "column", marginTop: 20
                }}>
                    <Text style={{color: "black", fontSize: 20, marginStart: 20, marginEnd: 20,}}>What do you need
                        done?</Text>
                    <FlatList
                        style={{width: "100%", marginBottom: 100}}
                        data={this.state.ListData}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={true}
                        numColumns={2}
                        removeClippedSubviews={false}
                        renderItem={({item}) =>
                            <View
                                style={{
                                    flexDirection: "column",
                                    width: "42%",
                                    marginBottom: 10,
                                    marginStart: 20,
                                    marginTop: 10,
                                    justifyContent: "center"
                                }}>
                                <View style={{
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%"
                                }}>
                                    <Image source={item.imgpath} style={{
                                        resizeMode: "contain", width: 100, height: 100, margin: 10,
                                    }}/>
                                </View>
                                <Text style={{color: "black", marginTop: 7}}>{item.heading}</Text>
                                <Text style={{marginTop: 5}}>{item.Text1}</Text>
                                <Text style={{marginTop: 0}}>{item.Text2}</Text>
                            </View>
                        }

                    />


                </View>


            </View>


        )
    }

}