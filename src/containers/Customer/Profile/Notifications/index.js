import React, {Component} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
export default class Notifications extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            Val1:false,
            Val2:false,
            Val3:false,
            Val4:false
        };
    }
    renderRownotify(item) {
        return <View style={{alignItems: "center", width: "100%"}}>

            <View style={{
                flexDirection: "row", width: "85%", marginTop: 20,
                backgroundColor: "white",

                height: 50,
                borderRadius: 5,
                alignItems: "center"
            }}>
                <View style={{width: "90%"}}>

                    <Text
                        style={{
                            marginStart: 15,
                            fontSize: 13, color: "black", marginBottom: 5
                        }}>{item.text}</Text>
                </View>

                <View style={{width: "10%", justifyContent: "center", alignItems: "center"}}>


                    <Switch
                        onTintColor="red"
                        thumbTintColor="white"
                        onValueChange={item.valchange}
                        value={item.val} style={{
                        position: 'absolute',
                        right: 15,
                        tintColor: 'red',

                    }}/>
                </View>
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
                        text: "Notifications",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }
                />
                {this.renderRownotify({
                    text: "Job Push Notifications",
                    val: this.state.Val1

                })}
                {this.renderRownotify({
                    text: "Job SMS Notifications",
                    val: this.state.Val2

                })}
                {this.renderRownotify({
                    text: "Promotional Push Notifications",
                    val: this.state.Val3

                })}
                <View style={{alignItems: "center", width: "100%", flexDirection: "column"}}>
                    <View style={{
                        flexDirection: "row",
                        width: "85%",
                        marginTop: 20,
                        backgroundColor: "white",
                        height: 70,
                        borderRadius: 5,
                        alignItems: "center"
                    }}>
                        <View style={{width: "90%", flexDirection: "column"}}>
                            <Text
                                style={{
                                    marginStart: 15,
                                    fontSize: 13, color: "black", marginBottom: 5
                                }}>{"Promotional SMS Notifications"}</Text>
                            <Text style={{
                                marginStart: 15, width: "50%", fontSize: 12,
                                color: "#B9B9B9"
                            }}>{"Recommendations and Promotional Offers"}</Text>
                        </View>
                        <View style={{width: "10%", justifyContent: "center", alignItems: "center"}}>
                            <Switch
                                onTintColor="red"
                                thumbTintColor="white"
                                value={this.state.Val4} style={{
                                position: 'absolute',
                                right: 15,
                                tintColor: 'red',

                            }}/>
                        </View>
                    </View>
                </View>
            </View>)
    }
}