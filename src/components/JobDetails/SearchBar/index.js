import React, {Component} from 'react';
import { Text, View, TextInput} from 'react-native';
import {Image} from "react-native-elements";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false
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
                    <View style={{flexDirection: "row", width: "100%", color: "yellow", alignItems: "center",}}>
                        {this.renderRowInputEmail({
                            hintText: "Job Location",
                        })}
                    </View>
                </View>
                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 40,
                    backgroundColor: "white",
                    marginStart: 30,
                    height: 70,
                    borderRadius: 5,
                }}>
                    <View style={{width: "15%", alignItems: "center", justifyContent: "center", height: "100%"}}>
                        <Image style={{flexDirection: "column", resizeMode: "contain", width: 25, height: 25}}
                               source={require("../../../assets/images/pin.png")}/>
                    </View>
                    <View style={{flexDirection: "column", width: "80%", justifyContent: "center"}}>
                        <Text style={{marginStart: 5, fontSize: 15, color: "black"}}>{"Atlanta, GA, USA"}</Text>
                        <Text style={{marginStart: 5, fontSize: 13}}>{"Atlanta, GA, USA"}</Text>
                    </View></View>
            </View>

        )
    }
}