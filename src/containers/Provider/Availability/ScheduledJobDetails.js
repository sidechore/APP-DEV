import React, {Component} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import MapView, {Marker} from 'react-native-maps';
import Redmarker from '../../../assets/images/markerred.png';

const {width, height} = Dimensions.get('window');
const RADIUS = 2609.34;

const ASPECT_RATIO = width / height;
const LATITUDE = 35.8861371;
const LONGITUDE = -78.64554749999999;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;


export default class ScheduledJobDetails extends Component {
    constructor(props) {

        super(props);
        const {navigation} = this.props;
        const item = navigation.getParam('item');
        console.log("item123"+JSON.stringify(item));

        console.disableYellowBox = true;
        this.state = {
            descr: "",

            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            LatCrcl: null,
            LongCrcl: null,

            LATLNG: {
                latitude: Latci,
                longitude: Longci
            },
            markers: [],
        };

        this.onMapPress = this.onMapPress.bind(this);


    }

    componentDidMount() {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: this.state.LATLNG,
                    key: `foo${id++}`,
                },
            ],
        });
        this.mapRef.fitToSuppliedMarkers(
            this.state.markers,
            true,
        );

    }


    onMapPress(e) {

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
                    <View style={{flexDirection: "column", width: "100%"}}>
                        <View style={{flexDirection: "row", width: "100%", marginTop: 15, marginStart: 20}}>
                            <Image source={require("../../../assets/images/pimg1.png")}
                                   style={{resizeMode: "contain", width: 60, height: 60,}}
                            />
                            <View style={{
                                flexDirection: "column", width: "100%",
                                marginStart: 10, marginTop: 15
                            }}>
                                <Text style={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    marginBottom: 10
                                }}>{"John Doe"}</Text>
                                <Text style={{color: "#787878", fontSize: 15}}>{"7800 Alison CT"}</Text>
                                <Text style={{
                                    color: "#787878",
                                    fontSize: 15,
                                    marginBottom: 10
                                }}>{"Raleigh NC 27615"}</Text>
                                <Text style={{color: "#787878", fontSize: 12}}>{"Scheduled 2/20"}</Text>
                                <Text style={{color: "red", fontSize: 13}}>{"02:00 PM - 05:00 PM"}</Text>
                            </View>

                        </View>


                    </View>
                    <View style={{
                        width: "100%",
                        height: 200,
                        marginTop: 30,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>


                        <MapView
                            provider={this.props.provider}
                            style={styles.map}
                            initialRegion={this.state.region}
                            onPress={this.onMapPress}
                            ref={(ref) => {
                                this.mapRef = ref
                            }}

                        >
                            {this.state.markers.map(marker => (
                                <Marker
                                    title={this.state.descr}
                                    description={"1.5 MILES AROUND"}
                                    image={Redmarker}
                                    key={marker.key}
                                    coordinate={this.state.LATLNG}
                                />


                            ))}
                            <MapView.Circle
                                key={(this.state.longitude + this.state.latitude).toString()}
                                center={this.state.LATLNG}
                                radius={RADIUS}
                                strokeWidth={2}
                                strokeColor={'red'}
                                fillColor={'rgba(255,0,0,0.2)'}

                            />
                        </MapView>

                    </View>
                    <View style={{
                        backgroundColor: "white", justifyContent: "center", alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <View style={{
                            width: "50%",
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Text
                                style={{fontSize: 15, fontWeight: "bold", color: "black"}}
                            >{"Furniture Assembly"}</Text>
                        </View>
                        <View style={{
                            width: "35%",
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10,
                            marginStart: 40
                        }}>
                            <Text
                                style={{fontSize: 16, fontWeight: "bold", color: "black"}}
                            >{"$25 / hr"}</Text>
                        </View>

                    </View>
                    <View style={{
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("TimeSlot")}
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
                    <View style={{
                        justifyContent: "center", alignItems: "center"
                    }}>
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
        )
    }
}