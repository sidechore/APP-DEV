import React, { Component } from 'react';
import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';
import { Header, Image } from 'react-native-elements';
import Preference from 'react-native-preference';
import { constants } from '../../../utils/constants';

export default class EnableNotfi extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.params = this.props.navigation.state.params;
    this.state = {
      text: 'Useless Placeholder',
      NProvider: false,
      NClient: false,
      isConnected: true,
      userName: undefined
    };
    const { navigation } = this.props;
    const itemId = navigation.getParam('User', 'NO-ID');
    console.log('gettingUSer--->' + itemId);
    // this.params.User = itemId;
  }
  onVerify = () => {
    //console.log('Notification', Preference.get('userId'));

    if (this.params.User === 'Client') {
      console.log(this.params.User);
      this.props.navigation.navigate('SelectLocation', {
        User: this.params.User
      });
    } else if (this.params.User === 'Provider') {
      console.log(this.params.User);
      this.props.navigation.navigate('ProviderTab', {
        User: this.params.User
      });
    }
  };

  onEnableNotification = async () => {
    if (this.state.isConnected) {
      this.setState({ showLoading: true });
      let userId = await Preference.get('userId');
      var details = {
        user_id: userId,
        enableNotifications: 'true'
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');

      console.log('Enable Notification ' + JSON.stringify(formBody));

      fetch(constants.EnableNotification, {
        method: 'POST',
        body: formBody,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(
          response => {
            console.log('Enable Notification ' + JSON.stringify(response));
            //debugger;

            if (response.ResultType === 1) {
              this.setState({ showLoading: false });

              if (this.params.User === 'Client') {
                console.log(this.params.User);
                this.props.navigation.navigate('SelectLocation', {
                  User: this.params.User
                });
              } else if (this.params.User === 'Provider') {
                console.log(this.params.User);
                this.props.navigation.navigate('ProviderTab', {
                  User: this.params.User
                });
              }
              //this.onVerify();
            } else {
              this.setState({ showLoading: false });
              if (response.ResultType === 0) {
                alert(response.Message);
              }
            }
          },
          err => {
            this.setState({ showLoading: false });
            console.warn(' Enable Notification: error', err);
          }
        )
        .catch(error => {
          debugger;
          this.setState({ showLoading: false });
          console.error('Enable Notification: ', error);
        });
    } else {
      alert('Please connect Internet');
    }
    /*    if (this.params.User === 'Client') {
      console.log(this.params.User);
      this.props.navigation.navigate('SelectLocation', {
        User: this.params.User
      });
    } else if (this.params.User === 'Provider') {
      console.log(this.params.User);
      this.props.navigation.navigate('ProviderTab', {
        User: this.params.User
      });
    }*/
  };
  componentDidMount() {
    if (this.params.User === 'Client') {
      this.setState({ NClient: true });
      this.setState({ NProvider: false });
    } else if (this.params.User === 'Provider') {
      this.setState({ NClient: false });
      this.setState({ NProvider: true });
    }
  }

  renderRow(item) {
    return (
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Image
          style={{ width: 6, height: 6, resizeMode: 'contain' }}
          source={require('../../../assets/images/square_bulets.png')}
        />
        <Text style={{ marginStart: 15, color: 'black', fontsize: 15 }}>
          {item.hintText}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          style={{ backgroundColor: 'white' }}
          outerContainerStyles={{ backgroundColor: 'white' }}
          centerComponent={{
            text: 'Enable Notifications',
            style: { fontWeight: 'bold', color: 'black', fontSize: 18 }
          }}
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around'
          }}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../../assets/images/arrowback.png')}
                style={{
                  marginStart: 10,
                  height: 14,
                  width: 14,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          }
        />

        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              backgroundColor: '#F3F3F3',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/images/logo3x.png')}
              style={{ width: 180, height: 150, marginBottom: 20 }}
            />
          </View>
          {this.state.NProvider && (
            <View
              style={{
                width: '100%',
                height: 280,
                marginStart: 35,
                marginEnd: 20,
                backgroundColor: 'white',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  fontsize: 15
                }}
              >
                {'Whoops! It looks like notifications are not'}
              </Text>
              <Text style={{ color: 'black', fontsize: 15 }}>
                {'enabled. please enable notifications in '}
              </Text>
              <Text style={{ color: 'black', fontsize: 15 }}>
                {'settings.'}
              </Text>

              {this.renderRow({
                hintText: 'When new jobs are available'
              })}
              {this.renderRow({
                hintText: 'When a customer confirms you for a job.'
              })}
              {this.renderRow({
                hintText: 'When you have an upcoming job'
              })}
              {this.renderRow({
                hintText: 'A Chore is complete'
              })}
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  fontsize: 15
                }}
              >
                {'Communication with our customers is an'}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontsize: 15,
                  marginBottom: 30
                }}
              >
                {'important part of SideChore.'}
              </Text>
            </View>
          )}
          {this.state.NClient && (
            <View
              style={{
                width: '100%',
                height: 280,
                marginStart: 35,
                marginEnd: 20,
                backgroundColor: 'white',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  fontsize: 15
                }}
              >
                {'SideCore uses notifications to update you on'}
              </Text>
              <Text style={{ color: 'black', fontsize: 15 }}>
                {'the status of your order when:'}
              </Text>

              {this.renderRow({
                hintText: 'Providers are available'
              })}
              {this.renderRow({
                hintText: 'Your provider is enroute'
              })}
              {this.renderRow({
                hintText: 'Your provider arrives'
              })}
              {this.renderRow({
                hintText: 'A Chore is complete'
              })}
              <Text
                style={{
                  marginTop: 20,
                  color: 'black',
                  fontsize: 15
                }}
              >
                {'Communication is a vital part of SideChore.'}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontsize: 15
                }}
              >
                {'Please allow notification when prompted.'}
              </Text>
            </View>
          )}

          <View
            style={{ width: '100%', height: 100, backgroundColor: '#F3F3F3' }}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#F3F3F3'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                onPress={this.onVerify}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 25,
                  marginBottom: 25
                }}
              >
                <View
                  style={{
                    backgroundColor: 'black',
                    height: 50,
                    width: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>
                    {'Not Now'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                onPress={this.onEnableNotification}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 25,
                  marginBottom: 25
                }}
              >
                <View
                  style={{
                    backgroundColor: '#FA2021',

                    height: 50,
                    width: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>{'OK'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
              style={{ width: 100, height: 100, opacity: 1 }}
            />
          </View>
        )}
      </View>
    );
  }
}
