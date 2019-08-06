import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {FlatList, PanResponder, Text, TouchableOpacity, View, Keyboard} from 'react-native';
import {styles} from './styles';
import {constants} from "../../../utils/constants";
import Preference from 'react-native-preference';

let getmonth = new Date().getMonth();
let getyear = new Date().getFullYear();
let getdate = new Date().getDate();
let moment = require("moment");
getmonth = parseInt(getmonth) + 1;
if (getmonth < 10)
    getmonth = "0" + getmonth;
if (getdate < 10)
    getdate = "0" + getdate;

export default class TimeSlot extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isConnected: true,
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
            monthSet: "",
            lastChecked: 0,
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayData: [],
            time: false,
            //timeData: SLOTS,
            timeData: [],
            dayColor: "",
            color: "grey",
            showLoading: false,
            bookedClientName: "",
            bookedServicetype: "",

        };
        //{...this._panResponder.panHandlers}
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log('onPanResponderMove:', gestureState.dx, gestureState.dy)
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
        this.selectHour = this.selectHour.bind(this)
    }

    componentDidMount() {
        const input = getmonth + 1 + "-19";
        const output = moment(input, "MM-YY");
        let lastDay = output.endOf('month').format('DD');
        let daysData = [];
        for (let i = 0; i < lastDay; i++) {
            daysData.push({id: i, day: i + 1, dayColor: "White", daynoC: "black", daymonC: "black"})
        }
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon, dayData: daysData});

        this.getSlots()
        //this.setAvailableSlots()

    }

    hoursTo24(hours) {
        let H = +hours;
        let h = (H % 12) || 12;
        h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
        let ampm = H < 12 ? " AM" : " PM";
        return h + ampm;
    };

    AvailableJobs() {
        const userId = Preference.get('providerId')
        let day = getdate;
        if (this.state.lastChecked > 0 && this.state.dayData.length > 0) {
            day = this.state.dayData[this.state.lastChecked].day;
            if (parseInt(day) < 10)
                day = "0" + day;
        }

        let dayStr = getyear + "-" + getmonth + "-" + day;
        console.log("getSlots dayy-->", dayStr, userId);
        if (this.state.isConnected) {
            Keyboard.dismiss();
            this.setState({showLoading: true});
            var details = {
                provider_id: userId,
                date: dayStr,
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(constants.ProviderGetJobs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            }).then(response => response.json())
                .then(response => {
                    console.log("getAvailableJobs-->", JSON.stringify(response));
                    let jobs = response.Data;
                    let slots = this.state.timeData;
                    console.log("getAvailableJobs-slotlength->", slots.length);
                    let jobSlotsbooked = [];
                    if (response.ResultType === 1) {
                        console.log("getAvailableJobs-mainresult->", JSON.stringify(slots));
                    } else {
                    }
                    this.setState({showLoading: false});
                })
                .catch(error => {
                    this.setState({showLoading: false});
                    //console.error('Errorr:', error);
                    console.log('getSlots Error:', error);
                    //alert("Error: " + error);
                });

        } else {
            alert("Please connect Internet");
        }


    }

    getSlots() {
        const userId = Preference.get('providerId')
        let day = getdate;
        if (this.state.lastChecked > 0 && this.state.dayData.length > 0) {
            day = this.state.dayData[this.state.lastChecked].day;
            if (parseInt(day) < 10)
                day = "0" + day;
        }
        this.setState({timeData:[]})

        let dayStr = getyear + "-" + getmonth + "-" + day;
        console.log("getSlots day-->", dayStr, userId);
        if (this.state.isConnected) {
            Keyboard.dismiss();
            this.setState({showLoading: true});
            var details = {
                user_id: userId,
                date: dayStr,
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(constants.ProviderSlots, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            }).then(response => response.json())
                .then(response => {
                    console.log("getSlots-->", JSON.stringify(response));
                    if (response.ResultType === 1) {
                        console.log("getSlots new-->", JSON.stringify(slots));
                    } else {
                    }
                    this.setState({showLoading: false});
                })
                .catch(error => {
                    this.setState({showLoading: false});
                    //console.error('Errorr:', error);
                    console.log('getSlots Error:', error);
                    //alert("Error: " + error);
                });

        } else {
            alert("Please connect Internet");
        }
    }

    setAvailableSlots() {

        if (this.state.isConnected) {
            Keyboard.dismiss();
            this.setState({showLoading: true});
            let slots = []

            this.state.timeData.map((item, index) => {
                if (item.selected) {
                    slots.push(item._id)
                }
            })

            let requestBody = JSON.stringify({
                slot_id: slots
            })


            console.log('setAvailableSlots: ', JSON.stringify(requestBody))

            fetch(constants.ProviderSetAvailability, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: requestBody
            }).then(response => response.json())
                .then(response => {
                    console.log("setAvailableSlots-->", JSON.stringify(response));
                    if (response.ResultType === 1) {

                    } else {
                    }
                    this.setState({showLoading: false});
                })
                .catch(error => {
                    this.setState({showLoading: false});
                    //console.error('Errorr:', error);
                    console.log('setAvailableSlots Error:', error);
                    //alert("Error: " + error);
                });

        } else {
            alert("Please connect Internet");
        }
    }


    getDragPanResponder(index) {
        let timeDataTemp = null;
        let slots = 0;
        return PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => {
                console.log("onStartShouldSetPanResponder:", index)
                return false
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (event, gestureState) => {
                console.log('onPanResponderGrant:', event.pageX)
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log('onPanResponderMove:', gestureState.dx, gestureState.dy)


                if (timeDataTemp == null) {
                    timeDataTemp = this.state.timeData
                }

            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                console.log('onPanResponderRelease:', gestureState.dx, gestureState.dy)

                if (timeDataTemp) {
                    slots = Math.abs(Math.floor(gestureState.dy / 30))
                    console.log('onPanResponderRelease-slots:', slots)
                    let slotIndex = index;
                    for (let i = 0; i < slots; i++) {
                        if (gestureState.dy > 0) {
                            if (slotIndex < timeDataTemp.length) {
                                timeDataTemp[slotIndex].selected = !timeDataTemp[slotIndex].selected;
                                slotIndex++
                            }
                        } else {
                            if (slotIndex >= 0) {
                                timeDataTemp[slotIndex].selected = !timeDataTemp[slotIndex].selected;
                                slotIndex--
                            }
                        }
                    }

                    this.setState({
                        timeData: timeDataTemp
                    }, () => {
                        this.setAvailableSlots()
                    })

                    timeDataTemp == null
                    slots = 0
                }
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        })
    }

    selectHour(index) {
        console.log("Selected hour index: ", index)
        let timeDataTemp = this.state.timeData

        timeDataTemp[index].selected = !timeDataTemp[index].selected

        this.setState({
            timeData: timeDataTemp
        })
    }

    renderHourRow(item, index) {

        console.log("renderHourRow-" + index, JSON.stringify(item))

        let previous = null
        let next = null
        if ((index - 1) >= 0) {
            previous = this.state.timeData[index - 1]
        }
        if ((index + 1) < this.state.timeData.length) {
            next = this.state.timeData[index + 1]
        }
        console.log("renderHourRow-previous", JSON.stringify(previous))
        console.log("renderHourRow-next", JSON.stringify(next))

        let backgroundColor = item.selected ? 'rgba(0,53,255,0.6)' : null
        let showMessage = false

        if (previous) {
            if (next) {
                if (!previous.selected && next.selected && item.selected) {
                    showMessage = true
                }
                if (!previous.selected && !next.selected && item.selected) {
                    showMessage = true
                }
            } else {
                if (!previous.selected && item.selected) {
                    showMessage = true
                }
            }
        } else {
            if (item.selected && next.selected) {
                showMessage = true
            }
            if (item.selected && !next.selected) {
                showMessage = true
            }
        }
        console.log("getAvailableJobs showBookedSlots-", item.booked)
        if (item.booked) {
            return <View style={{
                width: "100%", height: 40, flexDirection: "row",
            }}>

                <View style={{width: "20%", height: 40}}>
                    <Text
                        style={{marginStart: 10, color: "black", fontSize: 13}}>{this.hoursTo24(item.time_from)}</Text>
                </View>

                <View style={{
                    height: 40,
                    width: "80%",
                    backgroundColor: "grey",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                      activeOpacity={1.0}
                >
                    <View style={{position: 'absolute', top: 10, left: 10}}>
                        <Text style={{
                            color: "black",
                            fontSize: 13,
                        }}>{item.serviceType + " by " + item.clientName}</Text>
                    </View>

                </View>

            </View>
        } else {
            return <View style={{
                width: "100%", height: 40, flexDirection: "row"
            }}>

                <View style={{width: "20%", height: 40}}>
                    <Text
                        style={{marginStart: 10, color: "black", fontSize: 13}}>{this.hoursTo24(item.time_from)}</Text>
                </View>

                <View
                    {...this.getDragPanResponder(index).panHandlers}
                    onPress={() => {
                        this.selectHour(index)
                    }}
                    style={{
                        height: 40,
                        width: "80%",
                        backgroundColor: backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    activeOpacity={1.0}
                >
                    {showMessage &&
                    <View style={{position: 'absolute', top: 10, left: 10}}>
                        <Text style={{color: "black", fontSize: 13,}}>{"Available"}</Text>
                    </View>
                    }

                </View>

            </View>
        }

    }

    Left() {
        if (getmonth === 0) {
            getmonth = 11;
        } else {
            getmonth = getmonth - 1;
        }
        const input = getmonth + 1 + "-19";
        const output = moment(input, "MM-YY");
        let lastDay = output.endOf('month').format('DD');
        let daysData = [];
        for (let i = 0; i < lastDay; i++) {
            daysData.push({id: i, day: i + 1, dayColor: "White", daynoC: "black", daymonC: "black"})
        }
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon, dayData: daysData})
    }

    Right() {
        if (getmonth === 11) {
            getmonth = 0;
        } else {
            getmonth = getmonth + 1;
        }
        const input = getmonth + 1 + "-19";
        const output = moment(input, "MM-YY");
        let lastDay = output.endOf('month').format('DD');
        let daysData = [];
        for (let i = 0; i < lastDay; i++) {
            daysData.push({id: i, day: i + 1, dayColor: "White", daynoC: "black", daymonC: "black"})
        }
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon, dayData: daysData})
    }

    selectday(id) {
        this.setState({time: true});
        this.state.dayData[id].dayColor = "red";
        this.state.dayData[id].daynoC = "white";
        this.state.dayData[id].daymonC = "white";
        let lastID = this.state.lastChecked;
        this.state.dayData[lastID].dayColor = "white";
        this.state.dayData[lastID].daynoC = "black";
        this.state.dayData[lastID].daymonC = "black";

        this.setState({time: true, lastChecked: id, dayData: this.state.dayData, Slot1: true}, () => {
            console.log('this.state.dayData', JSON.stringify(this.state.dayData[this.state.lastChecked]))
            this.getSlots()
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
                        text: "Availability",
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
                <View style={{width: "100%",}}>
                    <View style={{
                        flexDirection: "row", justifyContent: 'center', alignItems: "center",
                        backgroundColor: "white", width: "100%"
                    }}>
                        <View style={{marginBottom: 20, flexDirection: "row", width: "95%"}}>
                            <TouchableOpacity style={{
                                width: "10%",
                                justifyContent: 'center',
                                alignItems: "center"
                            }} onPress={() => {
                                // this.Left()
                            }}>
                                <View>
                                    <Image source={require("../../../assets/images/leftArrow.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                width: "80%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }}><TouchableOpacity onPress={() => this.props.navigation.navigate("ServiceArea")}>
                                <Text style={{color: "black", fontSize: 17}}>{this.state.monthSet}</Text>
                            </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{
                                width: "10%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }} onPress={() => {
                                // this.Right()
                            }}>
                                <View>

                                    <Image source={require("../../../assets/images/rightArrow.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />

                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{flexDirection: "row", width: "100%"}}>
                        <View style={{width: "25%", height: "100%"}}>
                            <FlatList
                                data={this.state.dayData}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                numColumns={1}
                                style={{marginBottom: 170}}
                                extraData={this.state.dayData}
                                removeClippedSubviews={false}
                                renderItem={({item}) => <View style={{
                                    backgroundColor: "white", justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: item.dayColor, width: "100%", justifyContent: "center",
                                        alignItems: "center", height: 60,
                                    }} onPress={() => this.selectday(item.id)}>

                                        <Text
                                            style={{
                                                color: item.daynoC,
                                                fontWeight: "bold",
                                                fontSize: 20
                                            }}>{item.day}</Text>
                                        <Text style={{color: item.daymonC}}>{this.state.monthSet}</Text>

                                    </TouchableOpacity>
                                </View>
                                }/>
                        </View>

                        <View style={{width: "80%"}}>

                            <FlatList
                                data={this.state.timeData}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={1}
                                style={{marginBottom: 170}}
                                extraData={this.state.timeData}
                                removeClippedSubviews={false}
                                showsVerticalScrollIndicator={true}
                                renderItem={({item, index}) => this.renderHourRow(item, index)}
                            />
                        </View>
                    </View>

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
                    <Image resizeMode={"contain"} source={require("../../../assets/images/loading.gif")}
                           style={{width: 100, height: 100, opacity: 1,}}/>
                </View>}
            </View>
        )
    }
}

const SLOTS = [
    {
        "time_from": 8,
        "time_to": 9,
        "selected": false
    },
    {
        "time_from": 9,
        "time_to": 10,
        "selected": false
    },
    {
        "time_from": 10,
        "time_to": 11,
        "selected": false
    },
    {
        "time_from": 11,
        "time_to": 12,
        "selected": false
    },
    {
        "time_from": 12,
        "time_to": 13,
        "selected": false
    },
    {
        "time_from": 13,
        "time_to": 14,
        "selected": false
    },
    {
        "time_from": 14,
        "time_to": 15,
        "selected": false
    },
    {
        "time_from": 15,
        "time_to": 16,
        "selected": false
    },
    {
        "time_from": 16,
        "time_to": 17,
        "selected": false
    },
    {
        "time_from": 17,
        "time_to": 18,
        "selected": false
    },
    {
        "time_from": 18,
        "time_to": 19,
        "selected": false
    },
    {
        "time_from": 19,
        "time_to": 20,
        "selected": false
    },
    {
        "time_from": 20,
        "time_to": 21,
        "selected": false
    },
    {
        "time_from": 21,
        "time_to": 22,
        "selected": false
    },
    {
        "time_from": 22,
        "time_to": 23,
        "selected": false
    }
]