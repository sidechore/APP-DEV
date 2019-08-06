import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {FlatList, Keyboard, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {constants} from "../../../utils/constants";
import Preference from "react-native-preference";

let latCircle = 0;
let longCircle = 0;
let description = 0;
let getmonth = new Date().getMonth();
let getyear = new Date().getFullYear();
let getdate = new Date().getDate();
getmonth=parseInt(getmonth+1);
let moment = require("moment");

export default class HomeJobs extends Component {
    constructor(props) {
        super(props);
        this.state={
            isConnected:true,
            showLoading:false,
            ScheduleData:[],
            NoJob:false,
            openJobs:false,
            ProviderName:Preference.get("ProviderName")
        }
    }

    async onPress(item) {
        /*await fetch("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD5YuagFFL0m0IcjCIvbThN25l0m2jMm2w&components=postal_code:27615")
            .then(function (response) {
                return response.json();
            }).then(function (myJson) {
                console.log("LL" + JSON.stringify(myJson));
                latCircle = myJson.results[0].geometry.location.lat;
                longCircle = myJson.results[0].geometry.location.lng;
                description = myJson.results[0].formatted_address;
                //    this.props.navigation.navigate("ScheduledJobDetails",{latCircle,longCircle})
                console.log("longlat" + latCircle);
                console.log("longlat" + longCircle);
                console.log("longlat" + description);
            });*/
        this.props.navigation.navigate("ScheduledJobDetails", {
           item:item
        })

    }
    componentDidMount(): void {
        this.AvailableJobs()
    }

    AvailableJobs() {
        const userId = Preference.get('providerId');
        if(getmonth < 10){
            getmonth = "0" + getmonth
        }
        if(getdate < 10){
            getdate = "0" + getdate
        }
        let dayStr = getyear + "-" + getmonth+ "-" + getdate;
        console.log("getSlots dayy-->", dayStr, userId);
        if (this.state.isConnected) {
            this.setState({showLoading: true});
            var details = {
                provider_id: userId,
                date: dayStr,
            };
            /*var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }*/
           /* formBody = formBody.join("&");*/
            fetch(constants.ProviderGetJobs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(details)
            }).then(response => response.json())
                .then(response => {
                    console.log("getAvailableJobs-->", JSON.stringify(response));
                    this.setState({showLoading: false});
                })
                .catch(error => {
                    this.setState({showLoading: false});
                    console.log('Schedule Error:', error);
                });

        } else {
            alert("Please connect Internet");
        }


    }

    renderrowJobs(item) {

        return <View style={{
            flexDirection: "column", backgroundColor: "white"
            , marginTop: 10, marginBottom: 10
        }}>
            <View style={{
                flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center",
                marginTop: 15,

            }}>
                <View style={{
                    width: "50%", alignItems: "flex-start",
                }}>
                    <Text
                        style={{marginStart: 15, color: "red", fontSize: 17}}
                    >{item.time} </Text>
                </View>
                <View style={{width: "50%", alignItems: "flex-end"}}>
                    <Text style={{marginEnd: 10, color: "#B8B8B8", fontSize: 13}}>{item.date}</Text>
                </View>


            </View>
            <View style={{marginTop: 3}}>
                <Text style={{marginStart: 15, color: "black",}}>{item.ClientName+" "+item.serviceType}</Text>
            </View>
            <View style={{
                flexDirection: "row", width: "100%", justifyContent: "flex-start", alignItems: "flex-start",
                marginStart: 15, marginTop: 3, marginBottom: 15

            }}>
                <Text style={{color: "#B8B8B8", fontSize: 12}}>{"Service Professional:"}</Text>
                <Text style={{color: "black", marginStart: 2, fontSize: 12}}>{item.ProviderName}</Text>
            </View>


        </View>


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
                        text: "Home",
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
                <View style={{
                    flexDirection: "column", width: "100%", backgroundColor: "white",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <View style={{
                        width: "80%",
                        marginTop: 20,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{fontSize: 17, color: "black"}}>
                            {"Hi,"+this.state.ProviderName+"Here's what's going "}</Text>
                        <Text style={{fontSize: 17, color: "black"}}>
                            {"on today."}</Text>
                    </View>
                </View>
                {this.state.openJobs && <ScrollView>
                    <View style={{
                        justifyContent: "center", alignItems: "center", marginTop: 15,
                        marginBottom: 5
                    }}>
                        <TouchableOpacity

                        >
                            <Text
                                style={{
                                    color: "red",
                                    fontSize: 17

                                }}
                            >{"Today's Scheduled Jobs"}</Text>
                        </TouchableOpacity>

                    </View>
                    <FlatList
                        style={{width: "100%", marginBottom: 100, marginTop: 10}}
                        data={this.state.ScheduleData}
                        extraData={this.state.ScheduleData}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={false}
                        renderItem={({item}) =>
                            <View style={{
                                width: "90%",
                                flexDirection: "column", marginStart: 20
                            }}>
                                <TouchableOpacity onPress={() => this.onPress(item)}>
                                    {this.renderrowJobs({
                                        time:moment(item.job_time_from, ["HH"]).format("hh:mm A"),
                                        date:moment(item.job_date).format("M/DD"),
                                        ClientName:item.customer.local.firstName+" "+item.customer.local.lastName,
                                        ProviderName:this.state.ProviderName,
                                        serviceType:item.service_type,



                                    })}
                                </TouchableOpacity>

                            </View>
                        }/>
                </ScrollView> }
                {this.state.NoJob &&  <View>
                    <View
                        style={{
                            flexDirection: "column",
                            width: "100%",
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <View
                            style={{
                                width: "80%",
                                marginTop: 20,
                                marginBottom: 20,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Text style={{ fontSize: 17, color: "black" }}>
                                {"Hi, [First Name] Here's what's going "}
                            </Text>
                            <Text style={{ fontSize: 17, color: "black" }}>
                                {"on today."}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: "red",
                                    fontSize: 17
                                }}
                            >
                                {"Today's Scheduled Jobs"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            width: "85%",
                            marginStart: 25,
                            marginBottom: 20,
                            borderRadius: 5
                        }}
                    >
                        <View
                            style={{
                                width: "100%",

                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text style={{ color: "black" }}>
                                {"No jobs scheduled today."}
                            </Text>
                            <Text style={{ marginTop: 10, color: "#B8B8B8" }}>
                                {"Make sure that your availability is set up date so"}
                            </Text>
                            <Text style={{ color: "#B8B8B8" }}>
                                {"that you can receive new jobs."}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("TimeSlot")}
                            style={{
                                width: "100%",
                                backgroundColor: "red",
                                justifyContent: "center",
                                alignItems: "center",
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                height: 50,
                                marginTop: 20
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 17 }}>
                                {"Set my Availability"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>}
            </View>
        )
    }
}