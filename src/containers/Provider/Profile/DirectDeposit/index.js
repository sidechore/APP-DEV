import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";

export default class ProAbout extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state={
            Greytext: true,
            showIconLeftpass1:false,
            Cross1:false,
            showIconLeftpass2:false,
            Cross2:false,
            showIconLeftpass3:false,
            Cross3:false,
            bankAccountNumber:"",
            CnacountNo:"",
            bankRouteNumber:"",
            isConnected:true,
            showLoading:false


        }
    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    moveTo() {
        this.props.navigation.navigate("ProProfile");
    }
    checklength(text) {
        this.setState({accountNo:text});
        if (text.length >= 14) {
            this.setState({ showIconLeftpass1: true });
            this.setState({ Cross1: false });
        } else if (text.length === 0) {
            this.setState({ showIconLeftpass1: false });
            this.setState({ Cross1: true });
        } else {
            this.setState({ showIconLeftpass1: false });
            this.setState({ Cross1: true });
        }
        this.onChangeText('bankAccountNumber', text);
    }
    cnfrLength(text) {
        this.setState({CnacountNo:text});
        if (this.state.accountNo === text) {
            this.setState({ showIconLeftpass2: true });
            this.setState({ Cross2: false });
        } else {
            this.setState({ showIconLeftpass2: false });
            this.setState({ Cross2: true });
        }
    }
    checklength2(text) {
        if (text.length >= 9) {
            this.setState({ showIconLeftpass3: true });
            this.setState({ Cross3: false });
        } else if (text.length === 0) {
            this.setState({ showIconLeftpass3: false });
            this.setState({ Cross3: true });
        } else {
            this.setState({ showIconLeftpass3: false });
            this.setState({ Cross3: true });
        }
        this.onChangeText('bankRouteNumber', text);
    }
    onSubmit = () => {
        if (this.state.isConnected) {
            this.setState({ showLoading: true });
            const { bankAccountNumber,
                bankRouteNumber, } = this.state;
            var details = {
                bankAccountNumber: bankAccountNumber,
                bankRouteNumber: bankRouteNumber,
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            fetch(constants.DirrectDeposit, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
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
                        this.setState({ showLoading: false });
                        Preference.set({

                            userId: response.Data.id,
                            userName:
                                response.Data.firstname + ' ' + response.Data.lastname,
                            userToken: response.Data.token
                        });

                        this.moveTo();
                    } else {
                        this.setState({ showLoading: false });
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
    renderRowAccountNo(item) {
        const {accountNo}=this.state;
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20,marginTop:10 }}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength(text)}
                    value={accountNo}
                    maxLength={14}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftpass1 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/checked.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}
                {this.state.Cross1 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/close.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowCNFAccountNo(item) {
        const {CnacountNo}=this.state;
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20,marginTop:10 }}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.cnfrLength(text)}
                    value={CnacountNo}
                    maxLength={14}
                    placeholder={item.hintText}
                />
                {this.state.showIconLeftpass2 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/checked.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}
                {this.state.Cross2 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/close.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}

            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowRoutingNumber(item) {
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20,marginTop:10 }}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength2(text)}

                    maxLength={9}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftpass3 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/checked.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}
                {this.state.Cross3 && (
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../../assets/images/close.png')}
                        style={{
                            width: 20,
                            height: 20,
                            position: 'absolute',
                            right: 10,
                            top: 15
                        }}
                    />
                )}
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
                        text: "Direct Deposit",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />

                <View style={{flexDirection:"column",width:"86%",marginStart:25,marginTop:20,marginBottom:30}}>
                    <Text style={{color:"black",fontSize:15}} >
                        {"Enter your bank account information to"}
                    </Text>
                    <Text style={{color:"black",fontSize:15}} >
                        {"ensure that your Service Pro earnings are"}
                    </Text>
                    <Text style={{color:"black",fontSize:15}} >
                        {"deposited directly into your account."}
                    </Text>
                </View>
                <View style={{flexDirection:"column",backgroundColor:"white"}}>
                    {this. renderRowAccountNo({
                        hintText: "Bank Account Number",

                    })}
                    {this. renderRowCNFAccountNo({
                        hintText: "Confirm Bank Account Number",

                    })}
                    {this. renderRowRoutingNumber({
                        hintText: "Bank Routing Number",

                    })}
                    <View style={{flexDirection:"row",width:"100%",marginStart:20,marginTop:30}}>
                        <Image source={require("../../../../assets/images/lockRed.png")}
                        style={{resizeMode:"contain",width:18,height:18,marginTop:2}}
                        />
                        <View style={{flexDirection:"column",width:"100%"}} >
                        <Text style={{color:"red",fontSize:15,marginStart:20}} >{"Your personal information is confidential"}</Text>
                        <Text style={{color:"red",fontSize:15,marginStart:20}} >{"and protected in accordance with our"}</Text>
                            <Text style={{color:"red",fontSize:15,marginStart:20}} >{"privacy policy."}</Text>



                        </View>


                    </View>
                <View style={{justifyContent:"center",alignItems:"center"}} >
                    <TouchableOpacity onPress={this.onSubmit}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginTop: 20,
                                          width: "85%",
                                          backgroundColor: "#FA2021",
                                          height: 50,
                                          borderRadius: 7,
                                          marginBottom: 30
                                      }}>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Text style={{color: "white", fontSize: 18}}>{"Save"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                </View>


                {this.state.showLoading && (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            opacity: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../../assets/images/loading.gif')}
                            style={{ width: 100, height: 100, opacity: 1 }}
                        />
                    </View>
                )}

            </View>
        )
    }
}
