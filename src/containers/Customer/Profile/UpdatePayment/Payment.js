import React, {Component} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";

export default class Payment extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder', isConnected: true, showLoading: false,
            card_number: null, expiration_date: null,
            cvc: null, card_holder_name: null, postal_code: null, AuthToken:Preference.get("userToken")
        };
    }

    onSave = () => {
        if (this.state.isConnected) {
            this.setState({showLoading: true});
            const {card_number,expiration_date,cvc,card_holder_name,postal_code} = this.state;
            var details = {
                card_number: card_number,
                expiration_date: expiration_date,
                cvc: cvc,
                card_holder_name: card_holder_name,
                postal_code: postal_code
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            fetch(constants.Payment, {
                method: 'PUT',
                headers: {
                    "x-auth-token":this.state.AuthToken,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
                .then(response => response.json())
                .then(response => {
                    console.log(
                        'responseClientlogin-->',
                        '-' + JSON.stringify(response)
                    );
                    if (response.ResultType === 1) {
                        this.setState({showLoading: false});
                        Preference.set({
                            clientlogin: true,
                            userEmail: response.Data.email,
                            userId: response.Data.id,
                            userName:
                                response.Data.firstname + ' ' + response.Data.lastname,
                            userToken: response.Data.token
                        });

                        alert("payment Updated")
                    } else {
                        this.setState({showLoading: false});
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }
                })
                .catch(error => {
                    //console.error('Errorr:', error);
                    console.log('Error:', error);
                    alert('Error: ' + error);
                });

            //Keyboard.dismiss();
        } else {
            alert('Please connect Internet');
        }
    };

    renderRowCardNumber(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) =>  this.onChangeText('card_number', text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"number-pad"}
                />

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    renderExpiryDate(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) => this.onChangeText('expiration_date', text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderCCV(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) => this.onChangeText('cvc', text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderCardHolder(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) =>  this.onChangeText('card_holder_name', text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }

    renderPostalCode(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 70, width: "100%"}}
                    onChangeText={(text) =>  this.onChangeText('postal_code', text)}
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
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }
                />
                <ScrollView>
                    <View style={{width: "100%", backgroundColor: "white"}}>
                        <View style={{marginStart: 10, marginEnd: 10, marginTop: 30, marginBottom: 20}}>
                            {this.renderRowCardNumber({
                                hintText: "Card Number",
                            })}
                            {this.renderExpiryDate({
                                hintText: "Expiry Date",
                            })}
                            {this.renderCCV({
                                hintText: "CCV / CVC",
                            })}
                            {this.renderCardHolder({
                                hintText: "Cardholder's Name",
                            })}
                            {this.renderPostalCode({
                                hintText: "Postal Code",
                            })}

                            <TouchableOpacity onPress={this.onSave} style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
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
                            </TouchableOpacity>


                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}
