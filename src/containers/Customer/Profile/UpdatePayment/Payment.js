import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

export default class Payment extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',
        };
    }
    renderRowInputPayment(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) => this.setState({text})}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
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
                        text: "Payment Information",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                            <Image source={require("../../../../assets/images/arrowback.png" )} style={{
                                marginStart:10, height:14,width:14,resizeMode:"contain"


                            }}  /></TouchableOpacity>
                    }
                />
                <ScrollView>
                <View style={{width:"100%",backgroundColor:"white"}}>
                <View style={{marginStart:10,marginEnd:10,marginTop:30,marginBottom:20}}>
                    {this. renderRowInputPayment({
                        hintText: "Card Number",
                    })}
                    {this. renderRowInputPayment({
                        hintText: "Expiry Date",
                    })}
                    {this. renderRowInputPayment({
                        hintText: "CCV / CVC",
                    })}
                    {this. renderRowInputPayment({
                        hintText: "Cardholder's Name" ,
                    })}
                    {this. renderRowInputPayment({
                        hintText: "Postal Code",
                    })}

                    <TouchableOpacity style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
                        <View style={{
                            flexDirection: "column",
                            backgroundColor: "#FA2021",
                            width: "85%",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7


                        }}>
                            <Text style={{color: "white", fontWeight: "bold"}}>{"Save"}</Text>


                        </View>
                    </TouchableOpacity   >


                </View>
                </View>
                </ScrollView>
            </View>
        )}

}
