import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {styles} from './styles';

let getmonth = new Date().getMonth();

export default class TimeSlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
            monthSet: "",
            lastChecked: 0,
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayData: [{id: 0, day: 1, dayColor: "White",daynoC: "black", daymonC: "black"}
                , {id: 1, day: 2, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 2, day: 3, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 3, day: 4, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 4, day: 5, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 5, day: 6, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 6, day: 7, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 7, day: 8, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 8, day: 9, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 9, day: 10, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 10, day: 11, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 11, day: 12, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 12, day: 13, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 13, day: 14, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 14, day: 15, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 15, day: 16, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 16, day: 17, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 17, day: 18, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 18, day: 19, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 19, day: 20, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 20, day: 21, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 21, day: 22, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 22, day: 23, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 23, day: 24, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 24, day: 25, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 25, day: 26, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 26, day: 27, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 28, day: 29, dayColor: "White", daynoC: "black", daymonC: "black"}
                , {id: 29, day: 30, dayColor: "White", daynoC: "black", daymonC: "black"}
            ],
            timeData:[
                {id:0,T:"1 AM"},
                {id:1,T:"2 AM"},
                {id:2,T:"3 AM"},
                {id:3,T:"4 AM"},
                {id:4,T:"5 AM"},
                {id:5,T:"6 AM"},
                {id:6,T:"7 AM"},
                {id:7,T:"8 AM"},
                {id:8,T:"9 AM"},
                {id:9,T:"10 AM"},
                {id:10,T:"11 AM"},
                {id:11,T:"12 AM"},
                {id:12,T:"1 PM"},
                {id:13,T:"2 PM"},
                {id:14,T:"3 PM"},
                {id:15,T:"4 PM"},
                {id:16,T:"5 PM"},
                {id:17,T:"6 PM"},
                {id:18,T:"7 PM"},
                {id:19,T:"8 PM"},
                {id:20,T:"9 PM"},
                {id:21,T:"10 PM"},
                {id:22,T:"11 PM"},
                {id:23,T:"12 PM"},
            ]

        };

    }

    componentDidMount(): void {
        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon})
    }

    Left() {
        if (getmonth === 0) {
            getmonth = 11;
        } else {
            getmonth = getmonth - 1;
        }

        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon})

    }

    Right() {
        if (getmonth === 11) {
            getmonth = 0;
        } else {
            getmonth = getmonth + 1;
        }

        let mon = this.state.month[getmonth];
        this.setState({monthSet: mon})

    }

    selectday(id) {
        this.state.dayData[id].dayColor = "red";
        this.state.dayData[id].daynoC = "white";
        this.state.dayData[id].daymonC = "white";
        let lastID = this.state.lastChecked;
        this.state.dayData[lastID].dayColor = "white";
        this.state.dayData[lastID].daynoC = "black";
        this.state.dayData[lastID].daymonC = "black";
        this.setState({lastChecked: id});
        this.setState({dayData: this.state.dayData});

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
                            <Image source={require("../assets/images/arrowback.png")} style={{
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
                            <View style={{
                                width: "10%",


                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={() => this.Left()}>
                                    <Image source={require("../assets/images/leftArrow.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{
                                width: "80%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                                <Text style={{color: "black", fontSize: 17}}>{this.state.monthSet}</Text>
                            </View>
                            <View style={{
                                width: "10%",

                                justifyContent: 'center',
                                alignItems: "center"
                            }}>
                                <TouchableOpacity onPress={() => this.Right()}>
                                    <Image source={require("../assets/images/rightArrow.png")}
                                           style={{
                                               height: 14, width: 14, resizeMode: "contain"
                                           }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{flexDirection: "row",width:"100%"}}>
                        <View style={{width:"25%"}} >
                        <FlatList

                            data={this.state.dayData}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            numColumns={1}
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
                                        style={{color: item.daynoC, fontWeight: "bold", fontSize: 20}}>{item.day}</Text>
                                    <Text style={{color: item.daymonC}}>{this.state.monthSet}</Text>

                                </TouchableOpacity>
                            </View>
                            }/>
                        </View>

                        <View style={{width:"80%"}} >

                        <FlatList
                                  data={this.state.timeData}
                                  keyExtractor={item => item.id}
                                  numColumns={1}
                                  extraData={this.state.timeData}
                                  removeClippedSubviews={false}
                                  showsVerticalScrollIndicator={true}
                                  renderItem={({item}) =><View style={{

                                  }}>
                                      <View style={{
                                          backgroundColor: item.dayColor, width: "100%",
                                          height: 40,marginStart:10,
                                      }}>

                                          <Text
                                              style={{color:"black",fontSize: 13}}>{item.T}</Text>


                                      </View>
                                  </View>}
                        />
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}