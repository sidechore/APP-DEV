import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import * as Progress from 'react-native-progress';

import SearchBar from "../../../components/JobDetails/SearchBar/index.js"
import EndingAddress from "../../../components/JobDetails/EndingAddress/index.js"
import JobDate from "../../../components/JobDetails/JobDate/index.js"

let width = Math.round(Dimensions.get('window').width);
console.log("ProgressWidth:-->" + width);

export default class AdditionalJobDetails extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            HeaderText: "Starting Address",
            ProgressStatus: 0.15,
            StartingAddress: true,
            EndingAddress: false,
            JobDate: false,
        }
    }

    NextStep1 = () => {
        if (this.state.ProgressStatus === 0.15) {
            this.setState(prevState => ({
                ProgressStatus: prevState.ProgressStatus + 0.15,
                StartingAddress: false,
                EndingAddress: true,
                JobDate: false,
                HeaderText: "Ending Address"
            }));
        }
        if (this.state.ProgressStatus === 0.3) {
            this.setState(prevState => ({
                ProgressStatus: prevState.ProgressStatus + 0.15,
                StartingAddress: false,
                EndingAddress: false,
                JobDate: true,
                HeaderText: "Job Date"
            }));
        }
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
                        text: this.state.HeaderText,
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
                <Progress.Bar
                    progress={this.state.ProgressStatus}
                    width={width}
                    height={2}
                    color={"red"}
                    borderWidth={0}
                    borderRadius={0}
                    unfilledColor={'white'}
                    //animationType={"timing"}
                />
                {this.state.StartingAddress && <SearchBar/>}
                {this.state.EndingAddress && <EndingAddress/>}
                {this.state.JobDate && <JobDate/>}
                <TouchableOpacity style={{
                    backgroundColor: "red",
                    height: 50,
                    width: "100%",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0
                }} onPress={this.NextStep1}>
                    <View style={{}}>
                        <Text style={{color: "white", fontSize: 15, marginTop: 15}}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}