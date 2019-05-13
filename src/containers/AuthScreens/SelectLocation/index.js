import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class SelectLocation extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false
        };
    }



    renderRowInputSheet(item) {
        return <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <View style={{height: 1.5, width: "100%", backgroundColor: "#DADADA", marginTop: 15}}></View>
            <TouchableOpacity style={{marginTop: 10,}} onPress={() => {
                this.RBSheet.close();
                this.props.navigation.navigate("StayUpToDate")
            }}>
                <Text style={{color: "red", fontSize: 15}}>
                    {item.text}
                </Text></TouchableOpacity>
        </View>
    }
    renderGooglePlacesInput = () => {
        return (
            <GooglePlacesAutocomplete
                placeholder='Enter a Location'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='false'    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null,) => { // 'details' is provided when fetchDetails = true
                    console.log("hello"+data, details);

                    this.setState({places:[]});

                    this.state.places.push(details);
                    this.setState({places:this.state.places});
                    console.log("hello2"+JSON.stringify(this.state.places));
                }}
                getDefaultValue={() => ''}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyD5YuagFFL0m0IcjCIvbThN25l0m2jMm2w',
                    language: 'en', // language of the results
                    types: '(cities)' // default: 'geocode'
                }}
                styles={{

                    textInputContainer: {
                        width: '100%',
                        backgroundColor:"#ffffff",
                        borderTopWidth: 0,},
                    description: {

                        color:"red"
                    },
                    predefinedPlacesDescription: {
                        color: 'red'
                    },
                    poweredContainer:{color:"red"},
                    powered:{
                    }}}
                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food'
                }}
                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: ["name",'formatted_address']}}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                renderLeftButton={()  => <Image source={require('../../../assets/images/searchleft.png')}
                                                style={{resizeMode:"contain",width:20,height:20,marginTop:12,marginStart:5}}/>}


            />
        );
    };



    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}
                    centerComponent={{
                        text: "Select a Location",
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
                    }
                />
                <ScrollView>
                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 120, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color: "red",
                            marginBottom: 20,
                            marginTop: 60,
                            fontSize: 20
                        }}>{"Service Location"}</Text>
                        <View style={{
                            flexDirection: "column", marginBottom: 80, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "black"}}>{"To provide you with services available in your"}</Text>
                            <Text style={{color: "black"}}>{"area, please select a service location."}
                            </Text>
                        </View>
                    </View>

                    <View style={{width: "100%", backgroundColor: "white",}}>
                        <View style={{width:"100%",flexDirection:"column"}} >
                        <View style={{width:"80%", backgroundColor:"white",marginStart:20,
                            flexDirection:"row",marginEnd:20,
                        marginTop:20}} >
                            {this.renderGooglePlacesInput()}
                        <View style={{width:"20%",marginTop:15,left:25,
                          flexDirection:"row"}} >
                                <Text style={{fontSize:16,color:"red",}}  >
                                    {"Cancel"}
                                </Text>
                        </View>
                        </View>



                        </View>
                        <View style={{
                            flexDirection: "row", width: "100%",marginStart:25,marginTop:40

                        }}>
                            <Image source={require("../../../assets/images/pin.png")}
                                   style={{resizeMode: "contain", width: 19, height: 19}}
                            />
                            <TouchableOpacity onPress={() => {
                                this.RBSheet.open();
                            }}>
                                <Text style={{
                                    color: "red",
                                    marginStart: 10,
                                    fontSize: 18
                                }}>{"Use Current Location"}</Text>
                            </TouchableOpacity>
                            <RBSheet
                                ref={ref => {
                                    this.RBSheet = ref;
                                }}
                                animationType="fade"
                                duration={500}
                                height={310}
                                customStyles={{container: {alignItems: "center"}}}>
                                <View style={{
                                    flexDirection: "column", width: "100%", alignItems: "center",
                                    marginTop: 20,
                                    marginBottom: 20
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"We do not have any service providers"}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"availaible in this area. Would you like us to"}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        color: "black"
                                    }}>{"notify you when SideChore becomes"}</Text>
                                    <Text style={{fontSize: 16, color: "black"}}>{"availaible?"}</Text>
                                    {this.renderRowInputSheet({
                                        text: "Notify me",
                                    })}
                                    {this.renderRowInputSheet({
                                        text: "Browse the app",
                                    })}
                                    {this.renderRowInputSheet({
                                        text: "Select another location",
                                    })}
                                </View>
                            </RBSheet>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ResetPassword")}
                                          style={{justifyContent: "center", alignItems: "center", marginTop: 35}}>
                            <View style={{
                                flexDirection: "column",
                                backgroundColor: "#FA2021",
                                width: "85%",
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7,
                                marginBottom:20
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Select"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )


    }


}