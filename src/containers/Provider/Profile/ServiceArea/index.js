import MapView, { Polyline, ProviderPropType } from 'react-native-maps';
import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, Dimensions,TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import RBSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class ServiceArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            polylines: [],
            editing: null,
        };
    }

    finish() {
        const { polylines, editing } = this.state;
        this.setState({
            polylines: [...polylines, editing],
            editing: null,
        });
    }

    onPanDrag(e) {
        const { editing } = this.state;
        if (!editing) {
            this.setState({
                editing: {
                    id: id++,
                    coordinates: [e.nativeEvent.coordinate],
                },
            });
        } else {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
                },
            });
        }
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
                        text: "Service Area",
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

                <View style={{flexDirection:"column",width:"100%",height:350}} >
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        initialRegion={this.state.region}
                        scrollEnabled={false}
                        onPanDrag={e => this.onPanDrag(e)}
                    >
                        {this.state.polylines.map(polyline => (
                            <Polyline
                                key={polyline.id}
                                coordinates={polyline.coordinates}
                                strokeColor="#000"
                                fillColor="rgba(255,0,0,0.5)"
                                strokeWidth={1}
                            />
                        ))}
                        {this.state.editing && (
                            <Polyline
                                key="editingPolyline"
                                coordinates={this.state.editing.coordinates}
                                strokeColor="#F00"
                                fillColor="rgba(255,0,0,0.5)"
                                strokeWidth={1}
                            />
                        )}
                    </MapView>
                    <View style={styles.buttonContainer}>
                        {this.state.editing && (
                            <TouchableOpacity
                                onPress={() => this.finish()}
                                style={[styles.bubble, styles.button]}
                            >
                                <Text>Finish</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:40}}  >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                  style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                      marginTop: 20,
                                      width: "85%",
                                      backgroundColor: "#FA2021",
                                      height: 50,
                                      borderRadius: 7,
                                      marginBottom: 20
                                  }}>
                    <View style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{color: "white", fontSize: 18}}>{"Submit"}</Text>
                    </View>
                </TouchableOpacity>
            </View>


            </View>
        )}}
