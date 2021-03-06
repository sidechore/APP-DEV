import MapView, {Marker, Polygon, ProviderPropType,} from 'react-native-maps';
import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";

const {width, height} = Dimensions.get('window');

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
            polygons: [],
            polyCords: [],
            markers: [],
            editing: null,
            showLoading:false,

            creatingHole: false,
            isConnected:true,
            User_id:Preference.get("userId")
        };
    }

    finish() {
        const {polygons, editing} = this.state;

        this.setState({

            polygons: [...polygons, editing],

            editing: null,

            creatingHole: false,

        });
    }
    onSubmit(){
        if (this.state.isConnected) {
                this.setState({showLoading: true});
                const {markers,User_id} = this.state;

                const workArea = markers.map((item, index) => {
                    return item.coordinate
                })

                var details = {
                    workArea:workArea,
                    user_id:User_id,
                };


                fetch(constants.ServiceArea, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(details)
                }).then(response => {


                    return response.json()
                })
                    .then(response => {
                        this.setState({showLoading: false});
                        if (response.ResultType === 1) {

                            this.props.navigation.goBack();
                        } else {
                            if (response.ResultType === 0) {
                                alert(response.Message);
                            }
                        }
                    })
                    .catch(error => {
                        alert("Error: " + error);
                    });
                //Keyboard.dismiss();

        } else {
            alert("Please connect Internet");
        }
    }

    createHole() {

        const {editing, creatingHole} = this.state;
        if (!creatingHole) {
            this.setState({
                creatingHole: true,
                editing: {
                    ...editing,
                    holes: [...editing.holes, []],
                },
            });
        } else {
            const holes = [...editing.holes];
            if (holes[holes.length - 1].length === 0) {
                holes.pop();
                this.setState({
                    editing: {
                        ...editing,
                        holes,
                    },

                });

            }
            this.setState({creatingHole: false});

        }

    }


    onPress(e) {
        let arryCords = this.state.polyCords;

        if (arryCords.length < 6) {

            arryCords.push(e.nativeEvent.coordinate);
            this.setState({polyCords: arryCords});
        }

        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: `${id++}`,
                },
            ],
        });

        // this.setState({
        //     markers: [
        //         ...this.state.markers,
        //         e.nativeEvent.coordinate
        //     ],
        // });


    }


    render() {
        const mapOptions = {

            scrollEnabled: true,

        };


        if (this.state.editing) {

            mapOptions.scrollEnabled = false;

            mapOptions.onPanDrag = e => this.onPress(e);

        }
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

                <View style={{flexDirection: "column", width: "100%", height: 400}}>
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        initialRegion={this.state.region}
                        scrollEnabled={false}
                        onPress={e => this.onPress(e)}
                        {...mapOptions}
                    >

                        {this.state.polyCords.length === 6 && <Polygon
                            coordinates={this.state.polyCords}
                            strokeColor="#F00"
                            fillColor="rgba(255,0,0,0.5)"
                            strokeWidth={1}
                        />}

                        {this.state.markers.map(marker => (
                            <Marker
                                title={marker.key}
                                key={marker.key}
                                coordinate={marker.coordinate}
                            />
                        ))}

                    </MapView>
                    <View style={styles.buttonContainer}>

                        {this.state.editing && (
                            <TouchableOpacity
                                onPress={() => this.createHole()}
                                style={[styles.bubble, styles.button]}
                            >
                                <Text>
                                    {this.state.creatingHole ? 'Finish Hole' : 'Create Hole'}

                                </Text>

                            </TouchableOpacity>

                        )}

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
                <View style={{justifyContent: "center", alignItems: "center",}}>
                    <TouchableOpacity onPress={() => this.onSubmit()}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginTop: 10,
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
                {this.state.showLoading && <View style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    opacity: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image resizeMode={"contain"} source={require("../../../../assets/images/loading.gif")}
                           style={{width: 100, height: 100, opacity: 1,}}/>
                </View>}

            </View>
        )
    }
}
ServiceArea.propTypes = {

    provider: ProviderPropType,

};