import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, Dimensions, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import Redmarker from '../../../assets/images/markerred.png';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
export default class ProJobsDetailsInvoice extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };

        this.onMapPress = this.onMapPress.bind(this);
    }

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: `foo${id++}`,
                },
            ],
        });
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
                        text: "Job Details",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }/>
                <ScrollView>
                    <View style={{flexDirection: "column", width: "100%"}}>
                        <View style={{
                            flexDirection: "row", width: "40%", marginTop: 15, marginStart: 20, alignItems: "center"
                        }}>
                            <Image source={require("../../../assets/images/pimg1.png")}
                                   style={{resizeMode: "contain", width: 60, height: 60,}}
                            />
                            <View style={{
                                flexDirection: "column", width: "80%",
                                marginStart: 10, marginTop: 10
                            }}>
                                <Text style={{color: "#787878", fontSize: 12}}>{"Client"}</Text>
                                <Text style={{color: "black", fontWeight: "bold", fontSize: 15}}>{"John Doe"}</Text>


                            </View>
                            <View style={{
                                width: "90%", justifyContent: "center", alignItems: "center", borderWidth: 1,
                                borderColor: "red", borderRadius: 10, height: 30
                            }}>
                                <Text
                                    style={{fontSize: 12, color: "red"}}
                                >{"First job with client"}</Text>
                            </View>


                        </View>
                        <View style={{
                            flexDirection: "column", width: "100%", marginBottom: 20,
                            backgroundColor: "white", marginTop: 20
                        }}>
                            <View style={{marginTop: 10, marginBottom: 10, marginStart: 20}}>
                                <Text
                                    style={{fontSize: 17, color: "red", fontWeight: "bold"}}
                                >{"Furniture Assembly"}</Text>
                                <View style={{marginTop: 10}}>
                                    <Text
                                        style={{color: "black", fontWeight: "bold", fontSize: 15}}
                                    >{"Details"}</Text>
                                    <Text
                                        style={{color: "black", marginTop: 5, fontSize: 13}}
                                    >{"I have a bed and a desk that needs to be assembled."}</Text>
                                    <Text
                                        style={{color: "black", marginTop: 5, fontSize: 13}}
                                    >{"Thank you."}</Text>
                                </View>

                            </View>
                            <View style={{height: 1, width: "100%", backgroundColor: "#DEDEDE",}}></View>
                            <View style={{marginTop: 10, marginStart: 20, marginBottom: 20}}>
                                <Text
                                    style={{color: "black", fontWeight: "bold", fontSize: 15}}
                                >{"Address"}</Text>
                                <Text
                                    style={{color: "#686868", marginTop: 5, fontSize: 13}}
                                >{"Raleigh, NC 27605"}</Text>

                            </View>
                            <View style={{height: 1, width: "100%", backgroundColor: "#DEDEDE",}}></View>
                            <View style={{marginTop: 10, marginStart: 20, marginBottom: 20}}>
                                <Text
                                    style={{color: "black", fontWeight: "bold", fontSize: 15}}
                                >{"Job Size"}</Text>
                                <Text
                                    style={{color: "#686868", marginTop: 5, fontSize: 13}}
                                >{"Medium - Est. 2 - 3 hrs"}</Text>

                            </View>
                            <View style={{width: "100%", height: 150, marginTop: 5}}>


                                <MapView
                                    provider={this.props.provider}
                                    style={styles.map}
                                    initialRegion={this.state.region}
                                    onPress={this.onMapPress}
                                >
                                    {this.state.markers.map(marker => (
                                        <Marker
                                            title={marker.key}
                                            image={Redmarker}
                                            key={marker.key}
                                            coordinate={marker.coordinate}
                                        />
                                    ))}
                                </MapView>
                            </View>
                            <View style={{
                                marginTop: 15, marginStart: 20, marginBottom: 15, flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <Image source={require("../../../assets/images/pin.png")}
                                       style={{resizeMode: "contain", width: 20, height: 20}}
                                />
                                <Text
                                    style={{color: "black", fontWeight: "bold", fontSize: 15, marginStart: 15}}
                                >{"Raleigh"}</Text>


                            </View>
                            <View style={{height: 1, width: "100%", backgroundColor: "#DEDEDE",}}></View>
                            <View style={{
                                marginTop: 15, marginStart: 20, marginBottom: 15, flexDirection: "row",
                                alignItems: "center", width: "100%"
                            }}>

                                <Text
                                    style={{color: "black", fontWeight: "bold", fontSize: 15,}}
                                >{"Your Job Rate"}</Text>
                                <Image source={require("../../../assets/images/information.png")}
                                       style={{resizeMode: "contain", width: 15, height: 15, marginStart: 20}}
                                />
                                <View style={{alignItems: "flex-end", width: "50%", marginStart: 10}}>
                                    <Text
                                        style={{color: "black", fontWeight: "bold"}}
                                    >{"$25 / hr"}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:"100%",justifyContent:"center",alignItems:"center",marginBottom:20}}>
                            <Text style={{color:"#686868",fontSize:14,fontWeight:"bold"}} >{"Your invoice has been submitted"}</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>


        )
    }
}