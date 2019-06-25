import React, { Component } from "react";
import { Text, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { CheckBox, Image } from "react-native-elements";

export default class Vehicle extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: "Useless Placeholder",
            showIconLeftEmail: false,
            Cross1: false,
            date: new Date()
        };
    }
    renderRowWithChecks(item) {
        return (
            <CheckBox
                title={item.title}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={item.checked}
                checkedColor={"red"}
                containerStyle={{
                    backgroundColor: "white",
                    borderWidth: 0,
                    marginStart: 10
                }}
                textStyle={{ fontWeight: "normal", color: "black" }}
            />
        );
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                }}
            >
                <Text style={{ color: "red", fontSize: 18 }}>
                    {"Does this job require a car or truck?"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        marginTop: 20,
                        height: 170,
                        width: "100%",

                        alignItems: "center"
                    }}
                >
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Image
                                source={require("../../../assets/images/radioUN.png")}
                                style={{
                                    resizeMode: "contain",
                                    height: 20,
                                    width: 20
                                }}
                            />
                            <View style={{ flexDirection: "column" }}>
                                <Text
                                    style={{
                                        marginStart: 10,
                                        color: "black",
                                        fontSize: 16
                                    }}
                                >
                                    {"No vehicle needed"}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Image
                                source={require("../../../assets/images/radioCH.png")}
                                style={{
                                    resizeMode: "contain",
                                    height: 20,
                                    width: 20
                                }}
                            />
                            <View style={{ flexDirection: "column" }}>
                                <Text
                                    style={{
                                        marginStart: 10,
                                        color: "black",
                                        fontSize: 16
                                    }}
                                >
                                    {"A car is needed"}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", margin: 15 }}>
                            <Image
                                source={require("../../../assets/images/radioUN.png")}
                                style={{
                                    resizeMode: "contain",
                                    height: 20,
                                    width: 20
                                }}
                            />
                            <View style={{ flexDirection: "column" }}>
                                <Text
                                    style={{
                                        marginStart: 10,
                                        color: "black",
                                        fontSize: 16
                                    }}
                                >
                                    {"A truck is needed"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
