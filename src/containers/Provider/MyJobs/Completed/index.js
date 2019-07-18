import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import Preference from 'react-native-preference';
import {constants} from '../../../../utils/constants';
import moment from "moment";

export default class Completed extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            JobsCOpen: true,
            JobCClose: false,
            isConnected: true,
            showLoading: false,
            auth_token: Preference.get("userToken"),
            completedJobs: []
        };
    }
    callCompletedJobApi = () => {

        if (this.state.isConnected) {
            this.setState({showLoading: true});
            fetch(constants.ProviderCompletedJobs, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-auth-token': this.state.auth_token
                },
            }).then(response => response.json())
                .then(response => {
                    this.setState({showLoading: false});
                    console.log("responseClientlogin-->", "-" + JSON.stringify(response));
                    if (response.ResultType === 1) {
                        let data = response.Data;
                        if (data) {
                            this.setState({
                                showLoading: false,
                                completedJobs: data

                            });
                        }


                    } else {
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }
                })
                .catch(error => {
                    //console.error('Errorr:', error);
                    console.log('Error:', error);
                    alert("Error: " + error);
                });
            //Keyboard.dismiss();


        } else {
            alert("Please connect Internet");
        }
    };

    componentDidMount = () => {
        this.callCompletedJobApi();
    };

    renderJobsCompleted(item) {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: 'white',
                    marginTop: 20
                }}
            >
                <View style={{flexDirection: 'row'}}>
                    <View
                        style={{
                            flexDirection: 'column',
                            width: '40%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            marginBottom: 30
                        }}
                    >
                        <Image
                            source={require('../../../../assets/images/pimg1.png')}
                            style={{resizeMode: 'contain', width: 70, height: 70}}
                        />

                        <Text style={{color: 'black', marginTop: 5, fontSize: 15}}>
                            {item.fName + item.sName}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            width: '60%',
                            marginTop: 20,
                            marginBottom: 30
                        }}
                    >
                        <Text style={{color: 'red', fontSize: 17}}>
                            {item.JobTitle}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 25
                            }}
                        >
                            <Image
                                source={require('../../../../assets/images/calendargrey.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 13,
                                    height: 13,
                                    marginEnd: 10
                                }}
                            />
                            <Text style={{color: '#606366'}}>{item.date}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5
                            }}
                        >
                            <Image
                                source={require('../../../../assets/images/pingrey.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 13,
                                    height: 13,
                                    marginEnd: 10
                                }}
                            />
                            <Text style={{color: '#606366'}}>{item.address}</Text>
                        </View>
                        {item.cost && (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5
                                }}
                            >
                                <Image
                                    source={require('../../../../assets/images/Cash.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: 13,
                                        height: 13,
                                        marginEnd: 10
                                    }}
                                />
                                <Text style={{color: '#606366'}}>{'Total Cost $50'}</Text>
                            </View>
                        )}
                    </View>
                </View>
                {item.cancelled && (
                    <View>
                        <View
                            style={{height: 1, backgroundColor: '#DADADA', width: '100%'}}
                        />
                        <Text
                            style={{
                                marginStart: 25,
                                fontSize: 15,
                                marginTop: 15,
                                marginBottom: 15,
                                color: '#606366'
                            }}
                        >
                            {'This job has been cancelled '}
                        </Text>
                    </View>
                )}
            </View>
        );
    }

    jobOpen() {
        this.setState({JobsCOpen: true});
        this.setState({JobCClose: false});
    }

    render() {
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                {this.state.JobCClose && (
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50
                        }}
                    >
                        <TouchableOpacity onPress={() => this.jobOpen()}>
                            <Image
                                source={require('../../../../assets/images/Currenticon.png')}
                                style={{resizeMode: 'contain', height: 80, width: 80}}
                            />
                        </TouchableOpacity>
                        <Text style={{color: 'black', marginTop: 20, fontSize: 20}}>
                            {'You have no completed jobs.'}
                        </Text>
                        <Text style={{color: 'black', marginTop: 10}}>
                            {'Book a job today.'}
                        </Text>
                        <Text style={{color: 'black'}}>
                            {"When a job is completed, you'll see it here."}
                        </Text>
                    </View>
                )}
                {this.state.JobsCOpen && (
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

                                      {this.renderJobsCompleted({
                                          fName: item.customer.local.firstName,
                                          sName: item.customer.local.lastName,
                                          JobTitle: item.additional_job_details,
                                          date: moment(item.job_date).format('ll'),
                                          address: item.starting_address,
                                          cancelled: item.is_cancelled,
                                          cost: true
                                      })}


                                  </View>}/>
                )}
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
                            source={require('../../../../assets/images/loading.gif')}
                            style={{width: 100, height: 100, opacity: 1}}
                        />
                    </View>
                )}
            </View>
        );
    }
}
