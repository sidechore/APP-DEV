import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from "react-native-elements";
import Preference from "react-native-preference";
import {constants} from "../../../../utils/constants";
import moment from "../Completed";

export default class Current extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: true,
            JobClose: false,
            isConnected: true,
            showLoading: false,
            auth_token: Preference.get("userToken"),
            CurrentJobs: []


        };
    }

    onPrss() {

        this.props.navigation.navigate("TaskerProfile")

    }

    callCurrentJobApi = () => {
        if (this.state.isConnected) {
            this.setState({showLoading: true});
            fetch(constants.CustomerCurrentJobs, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'x-auth-token': this.state.auth_token
                }
            })
                .then(response => response.json())
                .then(
                    response => {
                        this.setState({showLoading: false});
                        console.log('Current Jobs Providers ' + JSON.stringify(response));
                        if (response.ResultType === 1) {
                            let data = response.Data;
                            if (data) {
                                this.setState({
                                    showLoading: false,
                                    completedJobs: data

                                });
                            }


                        } else {
                            alert(response.Message);
                        }
                    },
                    err => {
                        console.warn(' Current Jobs Providers: error', err);
                    }
                )
                .catch(error => {
                    this.setState({showLoading: false});
                    console.error('Current Jobs Providers: ', error);
                });
        } else {
            alert('Please connect Internet');
        }
    };
    componentDidMount = () => {
        this.callCurrentJobApi();
    };

    renderJobsOpen(item) {

        return <View style={{flexDirection: "column"}}>
            <View style={{flexDirection: "row", width: "100%", backgroundColor: "white", marginTop: 20}}>
                <View style={{
                    flexDirection: "column", width: "40%", justifyContent: "center",
                    alignItems: "center", marginTop: 20, marginBottom: 30
                }}>
                    <TouchableOpacity onPress={() => this.onPrss()}>

                        <Image
                            source={require('../../../../assets/images/pimg1.png')}
                            style={{resizeMode: "contain", width: 70, height: 70}}
                        />
                    </TouchableOpacity>


                    <Text style={{color: "black", marginTop: 5, fontSize: 15}}>{item.fName + item.sName}</Text>

                </View>
                <View style={{
                    flexDirection: "column", width: "60%", marginTop: 20, marginBottom: 30

                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("JobDetails")}>
                        <Text style={{color: "black", fontSize: 17,}}> {item.JobTitle}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: "row", alignItems: 'center', marginTop: 25}}>
                        <Image
                            source={require("../../../../assets/images/calendargrey.png")}
                            style={{resizeMode: "contain", width: 13, height: 13, marginEnd: 10}}
                        />
                        <Text style={{color: "#606366"}}>{item.date}</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: 'center', marginTop: 5}}>
                        <Image
                            source={require("../../../../assets/images/pingrey.png")}
                            style={{resizeMode: "contain", width: 13, height: 13, marginEnd: 10}}
                        />
                        <Text style={{color: "#606366"}}>{item.address}</Text>
                    </View>

                </View>

            </View>
            {item.Tip &&
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Tip")}
                              style={{
                                  flexDirection: "column",
                                  width: "100%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "red",
                                  height: 50,
                                  borderBottomEndRadius: 5,
                                  borderBottomStartRadius: 5
                              }}>
                <Text
                    style={{color: "white", fontSize: 17, fontWeight: "bold"}}
                >{"Add a Tip"}</Text>
            </TouchableOpacity>
            }

        </View>


    }

    jobOpen() {
        this.setState({JobsOpen: true});
        this.setState({JobClose: false});

    }


    render() {
        return (


            <View style={{flexDirection: "column", width: "100%",}}>

                {this.state.JobClose &&
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
                    <TouchableOpacity onPress={() => this.jobOpen()}>

                        <Image source={require("../../../../assets/images/Currenticon.png")}
                               style={{resizeMode: "contain", height: 80, width: 80}}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{color: "black", marginTop: 20, fontSize: 20}}
                    >{"You have no current jobs."}</Text>
                    <Text
                        style={{color: "black", marginTop: 10}}
                    >{"SideChore can get the job done."}</Text>
                    <Text style={{color: "black"}}>{"Book a job and see it here."}</Text>
                </View>
                }

                {this.state.JobsOpen &&

                <FlatList style={{width: "100%"}}
                          data={this.state.completedJobs}
                          showsVerticalScrollIndicator={false}
                          extraData={this.state.completedJobs}
                          renderItem={({item}) =>
                              <View
                                  style={{
                                      marginTop: 15,
                                      marginStart: 20,
                                      marginEnd: 20,
                                      marginBottom: 20
                                  }}
                              >
                                  <Text style={{color: 'red', fontSize: 15}}>{moment(item.job_date).format("MMM YYYY")}</Text>

                                  {this.renderJobsOpen({
                                      fName: item.customer.local.firstName,
                                      sName: item.customer.local.lastName,
                                      JobTitle: item.additional_job_details,
                                      date: moment(item.job_date).format('ll'),
                                      address: item.starting_address,
                                      Tip:true
                                  })}


                              </View>}/>

                }
            </View>


        )
    }
}