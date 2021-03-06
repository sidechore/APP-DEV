import React, {Component} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from 'react-native-elements';

export default class VerifyPhoneNo extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.params = this.props.navigation.state.params;
    this.state = {
      text: 'Useless Placeholder',
      Cross1: false,
      showIconLeftpass1: false
    };
    const { navigation } = this.props;
    const itemId = navigation.getParam('User', 'NO-ID');
    console.log('gettingUSerVerify--->' + itemId);
    this.state.userName = itemId;
  }
  onVerify = () => {
    this.props.navigation.navigate('EnableNotfi', {
      User: this.params.User
    });
  };

  renderRowInputCode(item) {
    return (
      <View style={{ flexDirection: 'column', width: '100%' }}>
        <View style={{ flexDirection: 'row', marginStart: 20, marginEnd: 20 }}>
          <TextInput
            style={{ height: 50, width: '100%' }}
            onChangeText={text => this.checkCode(text)}
            textContentType={'Email'}
            placeholder={item.hintText}
            keyboardType={'email-address'}
          />

          {this.state.showIconLeftpass1 && (
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/images/checked.png')}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 10,
                top: 15
              }}
            />
          )}

          {this.state.Cross1 && (
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/images/close.png')}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 10,
                top: 15
              }}
            />
          )}
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: '#52525D',
            marginStart: 25,
            marginEnd: 25
          }}
        />
      </View>
    );
  }
  checkCode(text) {
    if (text.length === 5) {
      this.setState({ showIconLeftpass1: true });
      this.setState({ Cross1: false });
    } else if (text.length === 0 || text.length < 5 || text.length > 5) {
      this.setState({ showIconLeftpass1: false });
      this.setState({ Cross1: true });
    } else {
      this.setState({ showIconLeftpass1: false });
      this.setState({ Cross1: true });
    }
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
            text: 'Get Verified',
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
              height: 200,
              backgroundColor: '#F3F3F3',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/images/logo3x.png')}
              style={{ width: 180, height: 150 }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginBottom: 40,
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <Text style={{ color: 'black' }}>
                {'Enter 5 digit code you received'}
              </Text>
              <Text style={{ color: 'black' }}>{' via text'}</Text>
            </View>
          </View>
          <View
            style={{ width: '100%', height: 250, backgroundColor: 'white' }}
          >
            {this.renderRowInputCode({
              hintText: 'Code'
            })}

            <TouchableOpacity
              onPress={this.onVerify}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#FA2021',
                  width: '85%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 7
                }}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>{'Verify'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: 'black',
                  width: '85%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 7
                }}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>
                  {'Resend Code'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ width: '100%', height: 200, backgroundColor: '#F3F3F3' }}
          />
        </ScrollView>
      </View>
    );
  }
}
