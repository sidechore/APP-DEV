import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {styles} from './styles';

let getmonth = new Date().getMonth();
let moment = require("moment");

export default class TimeSlot extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox=true;
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
            monthSet: "",
            lastChecked: 0,
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayData: [],
            time: false,
            timeData: [
                {id: 0, T: 1, bit: 0},
                {id: 1, T: 2, bit: 99},
                {id: 2, T: 3, bit: 1},
                {id: 3, T: 5, bit: 99},
                {id: 4, T: 6, bit: 2},
                {id: 5, T: 9, bit: 99},
                {id: 6, T: 10, bit: 102},
                {id: 7, T: 1, bit: 101},
                {id: 8, T: 2, bit: 101},
                {id: 9, T: 3, bit: 101},
                {id: 10, T: 4, bit: 101},
                {id: 11, T: 5, bit: 101},
                {id: 12, T: 6, bit: 101},
                {id: 13, T: 7, bit: 101},
                {id: 14, T: 8, bit: 101},
                {id: 15, T: 9, bit: 101},
                {id: 16, T: 10, bit: 101},
                {id: 17, T: 11, bit: 101},
                {id: 18, T: 12, bit: 101},


            ],
            dayColor: ""
        };


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
        this.setState({monthSet: mon, dayData: daysData})

    }

    renderHourrow(item) {
        if (item.bit === 0) {
            return <View style={{
                width: "100%", height: 40, flexDirection: "row"
            }}>

                <View style={{width: "20%", height: 40}}>
                    <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                </View>

                <View style={{height: 40, width: "80%",}}>
                    <View style={{flexDirection: "column", backgroundColor: "#DDDDDD",marginTop:10}}>
                        <View style={{flexDirection: "column", marginStart: 20, height: 40, width: "100%"

                        }}><TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeJobs")} >
                            <Text style={{color: "black",marginTop:10,fontSize:13,}}>{"+ Tap to add new time slots"}</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        } else if (item.bit === 1) {
            return <View style={{width: "100%", height: 80, flexDirection: "row"}}>
                <View style={{flex: 1, flexDirection: "column", height: "100%"}}>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                    </View>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + 1 + " AM"}</Text>
                    </View>
                </View>
                <View style={{height: 80, width: "80%", backgroundColor: "#90D0B5",marginTop:10}}>
                    <View style={{flexDirection: "column",}}>
                        <View style={{flexDirection: "column", marginStart: 20, height: 40, width: "100%",}}>
                            <Text style={{color: "black",marginTop:10,fontSize:13}}>{"Furniture Assembly of Jenifer"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        } else if (item.bit === 2) {
            return <View style={{width: "100%", height: 120, flexDirection: "row"}}>
                <View style={{flex: 1, flexDirection: "column", height: "100%"}}>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                    </View>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + 1 + " AM"}</Text>
                    </View>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + 2 + " AM"}</Text>
                    </View>
                </View>
                <View style={{height: 120, width: "80%", backgroundColor: "#DDDDDD",marginTop:10}}>
                    <View style={{flexDirection: "column",}}>
                        <View style={{flexDirection: "column", marginStart: 20, height: 40, width: "100%",}}>
                            <Text style={{color: "black",marginTop:10,fontSize:13}}>{"Availaible"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        } else if (item.bit === 99) {
            return <View style={{width: "100%", height: 40, flexDirection: "row"}}>
                <View style={{width: "20%", height: 40}}>
                    <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                </View>
            </View>
        }
        else if (item.bit === 100) {
            return <View style={{width: "100%", height: 40, flexDirection: "row",}}>
                <View style={{width: "20%", height: 40}}>
                    <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                </View>
                <View style={{height: 0.8,width:"100%", backgroundColor: "#DADADA",marginTop:10}}></View>
            </View>


        }
        else if (item.bit === 101) {
            return <View style={{width: "100%", height: 40, flexDirection: "row",}}>
                <View style={{width: "20%", height: 40}}>
                    <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " PM"}</Text>
                </View>
                <View style={{height: 0.8,width:"100%", backgroundColor: "#DADADA",marginTop:10}}></View>
            </View>


        }
        else if (item.bit === 102) {
            return <View style={{width: "100%", height: 120, flexDirection: "row"}}>
                <View style={{flex: 1, flexDirection: "column", height: "100%"}}>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + " AM"}</Text>
                    </View>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + 1 + " AM"}</Text>
                    </View>
                    <View style={{width: "100%", height: 40}}>
                        <Text style={{marginStart: 10, color: "black", fontSize: 13}}>{item.T + 2 + " AM"}</Text>
                    </View>
                </View>
                <View style={{height: 120, width: "80%", backgroundColor: "#6985C1",marginTop:10}}>
                    <View style={{flexDirection: "column",}}>
                        <View style={{flexDirection: "column", marginStart: 20, height: 40, width: "100%",}}>
                            <Text style={{color: "black",marginTop:10,fontSize:13}}>{"Furniure Assembly of Sarah"}</Text>
                        </View>
                    </View>
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

        this.setState({time: true, lastChecked: id, dayData: this.state.dayData, Slot1: true});
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
                            }} onPress={() => this.Left()}>
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
                            }} onPress={() => this.Right()}>
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
                                keyExtractor={item => item.id}
                                numColumns={1}
                                style={{marginBottom: 170}}
                                extraData={this.state.timeData}
                                removeClippedSubviews={false}
                                showsVerticalScrollIndicator={true}
                                renderItem={({item}) => this.renderHourrow(item)}
                            />
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}