import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Header, Image } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import Preference from 'react-native-preference';
import { constants } from '../../../../utils/constants';

export default class Completed extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      text: 'Useless Placeholder',
      JobsCOpen: false,
      JobCClose: true,
      Cancelled: true,
      isConnected: true,
      showLoading: false,
      Cost: true
    };
  }

  callCompletedJobApi = () => {
    let userToken = Preference.get('userToken');
    /*var details = {
      user_id: userId,
      enableNotifications: 'true'
    };
    // console.log('User Token', Preference.get('userToken'));

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    console.log('Enable Notification ' + JSON.stringify(formBody));*/

    if (this.state.isConnected) {
      this.setState({ showLoading: true });
      fetch(constants.ProviderCompletedJobs, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'x-auth-token': userToken
        }
      })
        .then(response => response.json())
        .then(
          response => {
            this.setState({ showLoading: false });
            console.log('Completed Jobs Providers ' + JSON.stringify(response));
            if (response.ResultType === 1) {
              console.log('Completed Jobs Providers: Success', response);
            } else {
              alert(response.Message);
              // console.error('Current Jobs Providers: Failed ', response);
            }
          },
          err => {
            this.setState({ showLoading: false });
            console.warn(' Completed Jobs Providers: error', err);
          }
        )
        .catch(error => {
          this.setState({ showLoading: false });
          console.error('Completed Jobs Providers: ', error);
        });
    } else {
      alert('Please connect Internet');
    }
  };

  componentDidMount = () => {
    this.callCompletedJobApi();
  };

  renderJobsOpen(item) {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          backgroundColor: 'white',
          marginTop: 20
        }}
      >
        <View style={{ flexDirection: 'row' }}>
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
              style={{ resizeMode: 'contain', width: 70, height: 70 }}
            />

            <Text style={{ color: 'black', marginTop: 5, fontSize: 15 }}>
              {'John Brown'}
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
            <Text style={{ color: 'red', fontSize: 17 }}>
              {'Furniture Assembly'}
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
              <Text style={{ color: '#606366' }}>{'Mar 29, 2019'}</Text>
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
              <Text style={{ color: '#606366' }}>{'Carpenter Village'}</Text>
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
                <Text style={{ color: '#606366' }}>{'Total Cost $50'}</Text>
              </View>
            )}
          </View>
        </View>
        {item.cancelled && (
          <View>
            <View
              style={{ height: 1, backgroundColor: '#DADADA', width: '100%' }}
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
    this.setState({ JobsCOpen: true });
    this.setState({ JobCClose: false });
  }

  render() {
    return (
      <View style={{ flexDirection: 'column', width: '100%' }}>
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
                style={{ resizeMode: 'contain', height: 80, width: 80 }}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', marginTop: 20, fontSize: 20 }}>
              {'You have no completed jobs.'}
            </Text>
            <Text style={{ color: 'black', marginTop: 10 }}>
              {'Book a job today.'}
            </Text>
            <Text style={{ color: 'black' }}>
              {"When a job is completed, you'll see it here."}
            </Text>
          </View>
        )}
        {this.state.JobsCOpen && (
          <View
            style={{
              marginTop: 15,
              marginStart: 20,
              marginEnd: 20,
              marginBottom: 20
            }}
          >
            <Text style={{ color: 'red', fontSize: 15 }}>March 2019</Text>

            {this.renderJobsOpen({
              cancelled: true,
              cost: true
            })}
            {this.renderJobsOpen({
              cancelled: false,
              cost: false
            })}
            <Text style={{ color: 'red', fontSize: 15, marginTop: 15 }}>
              November 2018
            </Text>

            {this.renderJobsOpen({
              cancelled: false,
              cost: false
            })}
            {this.renderJobsOpen({
              cancelled: false,
              cost: false
            })}
            {this.renderJobsOpen({
              cancelled: false,
              cost: false
            })}
          </View>
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
              style={{ width: 100, height: 100, opacity: 1 }}
            />
          </View>
        )}
      </View>
    );
  }
}
