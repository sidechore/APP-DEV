import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";

export default class Vehicles extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state={
         Small:true,
            Medium:false,
            large:false,
            vehicleSize:0,
            isConnected:true,
            showLoading:false

        }
    }
    moveTo() {
        this.props.navigation.navigate("ProProfile");
    }
    ontoggleSmall=(value)=>{
        this.setState({Small:value});
        this.setState({Medium:false});
        this.setState({large:false});
        this.setState({vehicleSize:1})
    };
    ontoggleMedium=(value)=>{
        this.setState({Medium:value});
        this.setState({Small:false});
        this.setState({large:false});
        this.setState({vehicleSize:2});
    };
    ontoggleLarge=(value)=>{
        this.setState({large:value});
        this.setState({Medium:false});
        this.setState({Small:false});
        this.setState({vehicleSize:3});
    };
    onSubmit = () => {
        if (this.state.isConnected) {
            this.setState({ showLoading: true });
            const {vehicleSize} = this.state;
            var details = {
                vehicleSize: vehicleSize,

            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            fetch(constants.vehicleSize, {
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
                           alert("size"+this.state.vehicleSize);
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
    renderRowSmall(item){
        return(
            <View style={{alignItems: "center", width: "100%",}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 100,
                    borderRadius: 5,


                }}>
                    <View style={{flexDirection: "column", width: "80%",marginStart:10,marginTop:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                        <Text
                            style={{marginStart: 5, fontSize: 13, textAlignVertical: "center",
                                color: "black"
                            }}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%",alignItems:"center",marginTop:20}} >


                        <View style={{flexDirection:"column" , width:"100%",justifyContent: "center",
                            alignItems:"center", }}>
                            <Switch
                                onTintColor="red"
                                onValueChange={this.ontoggleSmall}
                                thumbTintColor="white"
                                value={item.valS} style={{
                                position: 'absolute',

                                tintColor: 'red',

                            }}/>
                        </View>
                    </View>


                </View>

            </View>
        )

    }
    renderRowMedium(item){
        return(
            <View style={{alignItems: "center", width: "100%",}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 100,
                    borderRadius: 5,


                }}>
                    <View style={{flexDirection: "column", width: "80%",marginStart:10,marginTop:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                        <Text
                            style={{marginStart: 5, fontSize: 13, textAlignVertical: "center",
                                color: "black"
                            }}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%",alignItems:"center",marginTop:20}} >


                        <View style={{flexDirection:"column" , width:"100%",justifyContent: "center",
                            alignItems:"center", }}>
                            <Switch
                                onTintColor="red"
                                onValueChange={this.ontoggleMedium}
                                thumbTintColor="white"
                                value={item.valS} style={{
                                position: 'absolute',

                                tintColor: 'red',

                            }}/>
                        </View>
                    </View>


                </View>

            </View>
        )

    }
    renderRowlarge(item){
        return(
            <View style={{alignItems: "center", width: "100%",}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 100,
                    borderRadius: 5,


                }}>
                    <View style={{flexDirection: "column", width: "80%",marginStart:10,marginTop:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                        <Text
                            style={{marginStart: 5, fontSize: 13, textAlignVertical: "center",
                                color: "black"
                            }}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%",alignItems:"center",marginTop:20}} >


                        <View style={{flexDirection:"column" , width:"100%",justifyContent: "center",
                            alignItems:"center", }}>
                            <Switch
                                onTintColor="red"
                                onValueChange={this.ontoggleLarge}
                                thumbTintColor="white"
                                value={item.valS} style={{
                                position: 'absolute',

                                tintColor: 'red',

                            }}/>
                        </View>
                    </View>


                </View>

            </View>
        )

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
                        text: "Vehicle Sizes",
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
                <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}} >
                    {this.renderRowSmall({

                        text2:"Car",
                        text1:"For transporting small-sized items.",
                        valS:this.state.Small,
                    })}
                    {this.renderRowMedium({

                        text2:"Minivan / SUV / Van",
                        text1:"For transporting medium-sized items.",
                        valS:this.state.Medium,
                    })}
                    {this.renderRowlarge({

                        text2:"Pickup Truck / Moving Truck",
                        text1:"For transporting large-sized items.",
                        valS:this.state.large,
                    })}

                        <TouchableOpacity onPress={this.onSubmit}
                                          style={{
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 100,
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
    }}
