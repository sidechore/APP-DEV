import React, {Component} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Image} from "react-native-elements";

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
                    imgpath: require("../../../assets/images/listimg2.png"),
                    heading: "Furniture Assembly",
                    value:"FurnitureAssembly",
                    Text1: "Bed | Dresser | Table",
                    Text2: "Grill | Bookcase | Desk"
                },
                {
                    id: 2,

                    imgpath: require("../../../assets/images/listimg3.png"),
                    heading: "Mounting",
                    value:"Mounting",
                    Text1: "TV Mount | Mirror",
                    Text2: "Curtain Rods | Signs"
                },
                {
                    id: 3,

                    imgpath: require("../../../assets/images/listimg4.png"),
                    heading: "Home Repair",
                    value:"HomeRepair",
                    Text1: "Doors | Flooring",
                    Text2: "Light Fixtures"
                },
                {
                    id: 4,
                    imgpath: require("../../../assets/images/listimg1.png"),
                    heading: "Moving",
                    value:"Moving",
                    Text1: "Furniture | Boxes",
                    Text2: "Bedframe"
                },
                {
                    id: 5,

                    imgpath: require("../../../assets/images/listimg6.png"),
                    heading: "Junk Removal",
                    value:"JunkRemoval",
                    Text1: "Haul off boxes",
                    Text2: "Standard pickup load"
                },
                {
                    id: 6,
                    imgpath: require("../../../assets/images/listimg5.png"),
                    heading: "Cleaning",
                    value:"Cleaning",
                    Text1: "Basic or Deep Cleaning",
                    Text2: "Entire House"
                },
            ]
        };
    }

    checkLocation(Text) {
        if (Text.length === 0) {
            this.setState({showIconLeftEmail: false, Cross1: true})
        } else {
            this.setState({showIconLeftEmail: true, Cross1: false});
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
                <View style={{flexDirection: "row", width: "100%", backgroundColor: "white"}}>
                    <View style={{
                        flexDirection: "row",
                        width: "70%",
                        color: "yellow",
                        alignItems: "center",
                        marginTop: 20
                    }}>
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
                    <View style={{
                        flexDirection: "row",
                        width: "30%",
                        color: "red",
                        justifyContent: "center",
                        marginTop: 20
                    }}>
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
                    flexDirection: "column", marginTop: 20, marginBottom: 10
                }}>
                    <Text style={{
                        color: "black",
                        fontSize: 20,
                        marginStart: 20,
                        marginEnd: 20,
                    }}>{"What do you need done?"}</Text>
                    <FlatList
                        style={{width: "100%", marginBottom: 100, marginTop: 10}}
                        data={this.state.ListData}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
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
                                <TouchableOpacity
                                    onPress={() => {
                                        if (item.heading === "Moving")
                                            this.props.navigation.navigate("AdditionalJobDetails", {
                                                item: "Moving",
                                                Servicetype: item.value
                                            });
                                        else
                                            this.props.navigation.navigate("AdditionalJobDetails", {
                                                item: "NotMoving",
                                                Servicetype: item.value
                                            });
                                    }}>
                                    <View style={{
                                        backgroundColor: "white",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%"
                                    }}>
                                        <Image source={item.imgpath} style={{
                                            resizeMode: "contain", width: 90, height: 90, margin: 10,
                                        }}/>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{
                                    color: "black", marginTop: 7, fontWeight: "bold",
                                    fontSize: 15, marginStart: 10
                                }}>{item.heading}</Text>
                                <Text style={{marginTop: 5, marginStart: 10, fontSize: 13}}>{item.Text1}</Text>
                                <Text style={{marginTop: 0, marginStart: 10, fontSize: 13}}>{item.Text2}</Text>
                            </View>
                        }
                    />
                </View>
            </View>


        )
    }

}