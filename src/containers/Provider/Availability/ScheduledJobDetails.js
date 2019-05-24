import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput,Dimensions,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import Redmarker from '../../../assets/images/markerred.png';
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
export default class ScheduledJobDetails extends Component {
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
                        text: "Scheduled Job Details",
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
                    <View style={{flexDirection:"column",width:"100%"}}>
                        <View style={{flexDirection:"row",width:"100%",marginTop:15,marginStart:20}}>
                            <Image source={require("../../../assets/images/pimg1.png")}
                                   style={{resizeMode:"contain",width:60,height:60,}}
                            />
                            <View style={{flexDirection:"column",width:"100%",
                                marginStart:10,marginTop:15
                            }}>
                                <Text style={{color:"black",fontWeight:"bold",fontSize:15,marginBottom:10}} >{"John Doe"}</Text>
                                <Text  style={{color:"#787878",fontSize:15}} >{"7800 Alison CT"}</Text>
                                <Text style={{color:"#787878",fontSize:15,marginBottom:10}} >{"Raleigh NC 27615"}</Text>
                                <Text style={{color:"#787878",fontSize:12}} >{"Scheduled 2/20"}</Text>
                                <Text style={{color:"red",fontSize:13}} >{"02:00 PM - 05:00 PM"}</Text>
                            </View>

                        </View>


                    </View>
                    <View style={{width:"100%",height:150,marginTop:30}}>



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
                        <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",
                            flexDirection:"row",}} >
                            <View style={{width:"50%",justifyContent:"center",alignItems:'center',marginTop:10,marginBottom:10}}>
                                <Text
                                    style={{fontSize:15,fontWeight:"bold",color:"black"}}
                                >{"Furniture Assembly"}</Text>
                            </View>
                            <View style={{width:"35%",justifyContent:"center",alignItems:'center',marginTop:10,marginBottom:10,
                                marginStart:40
                            }}>
                                <Text
                                    style={{fontSize:16,fontWeight:"bold",color:"black"}}
                                >{"$25 / hr"}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"
                    }} >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("TimeSlot")}
                                          style={{
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 20,
                                              width: "85%",
                                              backgroundColor: "red",
                                              height: 50,
                                              borderRadius: 7,

                                          }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Accept"}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{justifyContent:"center",alignItems:"center"
                    }} >
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 20,
                                width: "85%",
                                backgroundColor: "black",
                                height: 50,
                                borderRadius: 7,

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"I'm Busy"}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        )}}