import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView, FlatList,} from 'react-native';
import {Header, Image} from "react-native-elements";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

export default class EndingAddress extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            places: [],
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false
        };


    }


    renderGooglePlacesInput = () => {
        return (
            <GooglePlacesAutocomplete
                placeholder='Job Location'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='false'    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null,) => { // 'details' is provided when fetchDetails = true
                    console.log("hello" + data, details);

                    this.setState({places: []});

                    this.state.places.push(details);
                    this.setState({places: this.state.places});
                    this.props.onGetSAddress(data, details.formatted_address);
                    console.log("hello2" + JSON.stringify(this.state.places));

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
                        width: '90%',
                        backgroundColor: "#ffffff",
                        borderTopWidth: 0,
                        margin: 15


                    },
                    description: {

                        color: "red"
                    },
                    predefinedPlacesDescription: {
                        color: 'red'
                    },
                    poweredContainer: {color: "red"},
                    powered: {}

                }}


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
                    fields: ["name", 'formatted_address']
                }}


                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities


                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                renderLeftButton={() => <Image source={require('../../../assets/images/searchleft.png')}
                                               style={{
                                                   resizeMode: "contain",
                                                   width: 20,
                                                   height: 20,
                                                   marginTop: 12,
                                                   marginStart: 5
                                               }}


                />}


            />
        );
    };

    render() {
        return (
            <View style={{flexDirection: "column", width: "100%"}}>

                <View style={{flexDirection: "row", width: "100%", backgroundColor: "white",}}>
                    <View style={{flexDirection: "row", width: "100%", alignItems: "center",}}>
                        {this.renderGooglePlacesInput({
                            hintText: "Job Location",
                        })}
                    </View>
                </View>
                <FlatList style={{width: "100%",}}
                          data={this.state.places}
                          showsVerticalScrollIndicator={false}

                          extraData={this.state.places}
                          renderItem={({item}) =>
                              <View style={{alignItems: "center", width: "100%"}}>

                                  <View style={{
                                      flexDirection: "row", width: "85%", marginTop: 20,
                                      backgroundColor: "white",

                                      height: 70,
                                      borderRadius: 5,
                                  }}>
                                      <View style={{
                                          width: "15%",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          height: "100%"
                                      }}>
                                          <Image style={{
                                              flexDirection: "column",
                                              resizeMode: "contain",
                                              width: 25,
                                              height: 25
                                          }}
                                                 source={require("../../../assets/images/pin.png")}/>
                                      </View>
                                      <View style={{flexDirection: "column", width: "80%", justifyContent: "center"}}>
                                          <Text
                                              style={{marginStart: 5, fontSize: 15, color: "black"}}>{item.name}</Text>
                                          <Text style={{marginStart: 5, fontSize: 13}}>{item.formatted_address}</Text>
                                      </View>
                                  </View>
                              </View>

                          }/>


            </View>
        )
    }
}