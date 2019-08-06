import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import * as Progress from 'react-native-progress';
import SearchBar from "../../../components/JobDetails/SearchBar/index.js"
import EndingAddress from "../../../components/JobDetails/EndingAddress/index.js"
import JobDate from "../../../components/JobDetails/JobDate/index.js"
import Vehicle from "../../../components/JobDetails/Vehicle/index.js"
import JobSize from "../../../components/JobDetails/JobSize/index.js"
import AddJob from "../../../components/JobDetails/AddJobDetails/index.js"
let width = Math.round(Dimensions.get('window').width);
console.log("ProgressWidth:-->" + width);

export default class AdditionalJobDetails extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        const item = navigation.getParam('item', "NO-ID");
        const Servicetype = navigation.getParam("Servicetype", "NO-SERVICE");
        console.log("itempassed--" + item);
        console.disableYellowBox = true;
        this.state = {
            HeaderText: "Starting Address",
            ProgressStatus: 0.15,
            StartingAddress: true,
            EndingAddress: false,
            JobDate: false,
            Vehicle: false,
            JobSize: false,
            AddJob: false,
            JobItem: item,
            addressDetail: null,
            addressSDetail: null,
            jobDate: null,
            vehicleSize: null,
            jobSize: null,
            addJob: null,
            Service_Type: Servicetype,
            isConnected: true,
            showLoading: false
        };
        if (this.state.JobItem === "Moving") {
            console.log("itempassed--" + item);
            this.setState({ProgresStatus: 0.15})
        } else {
            console.log("itempassed--" + item);
            this.setState({ProgresStatus: 0.16})
        }


    }


    NextStep1 = () => {
        if (this.state.JobItem === "Moving") {
            if (this.state.StartingAddress === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.14,
                    StartingAddress: false,
                    EndingAddress: true,
                    JobDate: false,
                    HeaderText: "Ending Address",
                    Vehicle: false,
                    JobSize: false,
                }));
            } else if (this.state.EndingAddress === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.14,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: true,
                    HeaderText: "Job Date",
                    Vehicle: false,
                    JobSize: false,
                }));
            } else if (this.state.JobDate === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.14,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    HeaderText: "Job Size",
                    Vehicle: false,
                    JobSize: true,
                }));
            } else if (this.state.JobSize === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.14,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    Vehicle: true,
                    HeaderText: "Vehicle",
                    JobSize: false
                }));
            } else if (this.state.Vehicle === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.14,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    Vehicle: false,
                    HeaderText: "Additional Job Details",
                    JobSize: false,
                    AddJob: true
                }));
            } else {

                this.props.navigation.navigate("Tasker");
            }
        } else {
            if (this.state.StartingAddress === true) {
                //console.log("itempassed--notmoving" + item);
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.16,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: true,
                    HeaderText: "Job Date",
                    Vehicle: false,
                    JobSize: false,
                }));
            } else if (this.state.JobDate === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.16,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    HeaderText: "Job Size",
                    Vehicle: false,
                    JobSize: true,
                }));


            } else if (this.state.JobSize === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.16,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    Vehicle: true,
                    HeaderText: "Vehicle",
                    JobSize: false


                }));
            } else if (this.state.Vehicle === true) {
                this.setState(prevState => ({
                    ProgressStatus: prevState.ProgressStatus + 0.16,
                    StartingAddress: false,
                    EndingAddress: false,
                    JobDate: false,
                    Vehicle: false,
                    HeaderText: "Additional Job Details",
                    JobSize: false,
                    AddJob: true
                }));
            } else {

                this.props.navigation.navigate("Tasker", {
                    addressDetail: this.state.addressDetail,
                    addressSDetail: this.state.addressSDetail,
                    jobDate: this.state.jobDate,
                    vehicleSize: this.state.vehicleSize,
                    jobSize: this.state.jobSize,
                    addJob: this.state.addJob,
                    Service_Type: this.state.Service_Type,
                });
            }
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
                {this.state.StartingAddress &&
                <SearchBar
                    onGetAddress={(data, details = null,) => {
                        this.state.addressDetail = details;
                        console.log("dataADD", this.state.addressDetail)
                    }}
                />
                }
                {this.state.EndingAddress && <EndingAddress
                    onGetSAddress={(data, details = null,) => {
                        this.state.addressSDetail = details;
                        console.log("dataADD", this.state.addressSDetail)
                    }}
                />}
                {this.state.JobDate && <JobDate
                    onGetDate={(date) => {
                        this.state.jobDate = date;
                        console.log("dataADD", this.state.jobDate)
                    }}
                />}
                {this.state.Vehicle && <Vehicle
                    onVehicle={(size) => {
                        this.state.vehicleSize = size;
                        console.log("dataADD", this.state.vehicleSize)
                    }}


                />}
                {this.state.JobSize && <JobSize
                    onJobSize={(size) => {
                        this.state.jobSize = size;
                        console.log("dataADD", this.state.jobSize)
                    }}
                />}
                {this.state.AddJob && <AddJob
                    onAddJob={(text) => {
                        this.state.addJob = text;
                        console.log("dataADD", this.state.addJob)
                    }}
                />}

                <TouchableOpacity style={{
                    backgroundColor: "red",
                    height: 50,
                    width: "100%",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0
                }} onPress={this.NextStep1}>
                    <View
                    >
                        <Text style={{color: "white", fontSize: 15, marginTop: 15}}>NEXT</Text>
                    </View>
                </TouchableOpacity>
                {this.state.showLoading && (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            opacity: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/loading.gif')}
                            style={{width: 100, height: 100, opacity: 1}}
                        />
                    </View>
                )}
            </View>
        )
    }
}