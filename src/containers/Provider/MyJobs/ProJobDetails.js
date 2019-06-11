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
const RADIUS = 1609.34;

const ASPECT_RATIO = width / height;
const LATITUDE =  35.8861371;
const LONGITUDE = -78.64554749999999;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class ProJobsDetails extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        const Latci = navigation.getParam('latCi');
        const Longci = navigation.getParam('longCi');
        console.log("latlong"+Latci);
        console.log("latlong"+Longci);


        console.disableYellowBox = true;
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,},
                LATLNG: {
                    latitude: 35.8861371,
                    longitude:-78.64554749999999
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
    renderRowProfile(item){
        return(

            <View style={{alignItems: "center", width: "100%"}}>
                <View style={{height: 1, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>

                <View style={{
                    flexDirection: "row",width:"85%",
                    backgroundColor: "white", height: 70,

                    alignItems:"center"

                }}>
                    <View style={{flexDirection: "column", width: "60%", justifyContent: "center",marginStart:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15,fontWeight:"bold" ,color: "black",marginBottom:5}}>{item.text2}</Text>
                        {item.Greytext &&
                        <Text
                            style={{marginStart: 5, fontSize: 13, textAlignVertical: "center"}}>{item.text1}</Text>
                        }
                    </View>
                    <View style={{width:"50%",justifyContent:"center",alignItems:"center"}} >

                        {item.red &&
                        <Image style={{
                            resizeMode: "contain",
                            height: 30, width: 30
                        }} source={require("../../../assets/images/tickred.png")}/>
                        }
                        {item.grey &&
                        <Image style={{
                            resizeMode: "contain",
                            height: 30, width: 30
                        }} source={require("../../../assets/images/tickgrey.png")}/>
                        }
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
                    <View style={{justifyContent:"center",alignItems:"center"
                    }} >
                        <TouchableOpacity onPress={()=>this.RBSheet.open()}
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
                                <Text style={{color: "white", fontSize: 18}}>{"Contact"}</Text>
                            </View>
                        </TouchableOpacity>

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
                                style={{fontSize:16,fontWeight:"bold",color:"red"}}
                            >{"$100"}</Text>
                        </View>

                    </View>
                    <View style={{alignItems: "center", width: "100%",marginBottom:20}}>

                        <View style={{
                            flexDirection: "row", width: "85%", marginTop: 20,
                            backgroundColor: "white", height: 40,
                            borderRadius: 5,
                            alignItems:"center"}}>
                            <View style={{width:"90%"}} >
                                <Text
                                    style={{marginStart: 15, fontWeight:"bold", fontSize: 15, color: "black",marginBottom:5}}>{"Notes"}</Text>
                            </View>
                            <View style={{width:"10%"}} >
                                <Image style={{resizeMode:"contain",
                                    height:14,width:14
                                }}  source={require("../../../assets/images/arrowforward.png")}/>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: "center", width: "100%"}}>

                        <View style={{
                            flexDirection: "row", width: "85%",
                            backgroundColor: "white", height: 40,
                            borderTopLeftRadius:5,
                            borderTopRightRadius:5,

                            alignItems:"center"}}>
                            <View style={{width:"90%"}} >
                                <Text
                                    style={{marginStart: 15,color:"#787878" ,fontWeight:"bold", fontSize: 15,marginBottom:5}}>{"REQUIRED STEPS"}</Text>
                            </View>
                            <View style={{width:"10%"}} >
                                <Image style={{resizeMode:"contain",
                                    height:14,width:14
                                }}  source={require("../../../assets/images/arrowupred.png")}/>
                            </View>
                        </View>
                        <View style={{width:"100%",marginBottom:20}} >
                        <TouchableOpacity >
                            {this.renderRowProfile({
                                text2:"Send ETA",
                                text1:"Let the customer know when you will arrive.",
                                Greytext:true,
                                red:true


                            })}
                        </TouchableOpacity>
                            <TouchableOpacity>
                            {this.renderRowProfile({
                                text2:"Start Job",
                                text1:"Begins when you arrive onsite.",
                                Greytext:true,
                                grey:true


                            })}
                            </TouchableOpacity>
                            <TouchableOpacity>
                            {this.renderRowProfile({
                                text2:"Complete Job",
                                text1:"Ends once job is completed.",
                                Greytext:true,
                                grey:true


                            })}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProJobsDetailsInvoice")} >
                            {this.renderRowProfile({
                                text2:"Send Invoice",
                                text1:"Sends once job is completed.",
                                Greytext:true,
                                grey:true


                            })}
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    animationType="fade"
                    duration={500}
                    height={270}
                    customStyles={{container: {alignItems: "center"}}}>
                    <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",
                        backgroundColor:"red",height:270

                    }}>
                        <Text
                            style={{fontSize:17,color:"white",fontWeight:"bold",marginTop:10,marginBottom:20}}
                        >{"Contact Customer "}</Text>

                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate("Contact")}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",

                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Message"}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Call Customer"}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom:10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth:1,
                                borderColor:"white"

                            }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Call Corporate"}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </RBSheet>
            </View>
        )
    }
}

