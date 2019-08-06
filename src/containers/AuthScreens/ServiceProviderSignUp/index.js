import React, {Component} from 'react';
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {styles} from './styles';
import {CheckBox, Header, Image} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../../../themes/colors';
import {constants} from '../../../utils/constants';
import Preference from 'react-native-preference';

const BType = [
    {
        label: 'Freelancer',
        value: 'Freelancer'
    },
    {
        label: 'Registered Business',
        value: 'Registered Business'
    }
];
const BType2 = [
    {
        label: 'Furniture Assembly',
        value: 'FurnitureAssembly'
    },
    {
        label: 'Mounting',
        value: 'Mounting'
    },
    {
        label: "Home Repair",
        value: 'HomeRepair'
    },
    {
        label: "Moving",
        value: 'Moving'
    },
    {
        label: "Junk Removal",
        value: 'JunkRemoval'
    },
    {
        label: "Cleaning",
        value: 'Cleaning'
    },


];
const FBSDK = require('react-native-fbsdk');
const {LoginManager, AccessToken, GraphRequest, GraphRequestManager} = FBSDK;

export default class ServiceProviderSignUp extends Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            favSport1: undefined,
            freeLancer: false,
            checked: false,
            checked2: false
        };
        const {navigation} = this.props;
        const itemId = navigation.getParam('User', 'NO-ID');
        this.state.userName = itemId;
        console.log('gettingUSerSignUp--->' + this.state.userName);

        this.inputRefs = {
            favSport1: null,
            serviceType:null
        };
        this.state = {
            text: 'Useless Placeholder',

            showIconLeftpass1: false,
            showIconLeftpass2: false,
            showIconLeftpass3: false,
            showIconLeftpass4: false,
            showIconLeftpass5: false,
            showIconLeftpass6: false,
            showIconLeftpass7: false,
            showIconLeftpass8: false,
            showIconLeftpass9: false,
            showIconLeftpass10: false,
            showIconLeftpass11: false,
            showIconLeftpass12: false,
            showIconLeftpass13: false,
            showIconLeftpass14: false,
            showIconLeftpass15: false,
            showIconLeftpass16: false,
            Cross1: false,
            Cross2: false,
            Cross3: false,
            Cross4: false,
            Cross5: false,
            Cross6: false,
            Cross7: false,
            Cross8: false,
            Cross9: false,
            Cross10: false,
            Cross11: false,
            Cross12: false,
            Cross13: false,
            Cross14: false,
            Cross15: false,
            Cross16: false,
            Password1: '',
            Cpassword: '',
            showLoading: false,
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            Password: '',
            serviceType: '',
            serviceCost: "",
            companyName: '',
            streetAdrress: '',
            city: '',
            state: '',
            zipcode: '',
            onlineReviewLink: '',
            companyWebsite: '',
            yearsInBusiness: '',
            numOfEmployees: '',
            generalLiabilityInsurance: '',
            isConnected: true
        };
    }

    onSignUpWithFBClick = async () => {
        try {
            const result = await LoginManager.logInWithPermissions([
                'public_profile',
                'email'
            ]);

            if (result.isCancelled) {
                alert('Login was cancelled');
                return;
            } else {
                this.FBGraphRequest(
                    'id, email, first_name, last_name',
                    this.FBLoginCallback
                );
            }
        } catch (e) {
            alert('error: ' + e);
        }
    };

    async FBGraphRequest(fields, callback) {
        const accessData = await AccessToken.getCurrentAccessToken();
        // Create a graph request asking for user information
        const infoRequest = new GraphRequest(
            '/me',
            {
                accessToken: accessData.accessToken,
                parameters: {
                    fields: {
                        string: fields
                    }
                }
            },
            callback.bind(this)
        );
        // Execute the graph request created above
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    async FBLoginCallback(error, result) {
        if (error) {
            alert(JSON.stringify(error));
        } else {
            console.log('FBLoginCallback: ' + JSON.stringify(result));
            this.socialSignUp(
                result.id,
                'facebook',
                result.email,
                result.first_name,
                result.last_name
            );
        }
    }

    socialSignUp(authId, authType, email, firsyName, lastName) {
        var details = {
            authId: authId,
            authType: authType,
            email: email,
            firstName: firsyName,
            lastName: lastName
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        // hide keyboard if open
        Keyboard.dismiss();

        if (this.state.isConnected) {
            // show loading
            this.setState({
                showLoading: true
            });

            // call api
            fetch(constants.ProviderSocialLogin, {
                method: 'POST',
                body: formBody,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
                .then(response => response.json())
                .then(response => {
                    this.setState({showLoading: false});
                    console.log('Social Login response: ' + JSON.stringify(response));

                    if (response.ResultType === 1) {
                        this.setState({showLoading: false});
                        Preference.set({
                            clientlogin: true,
                            userEmail: response.Data.email,
                            ProviderId: response.Data.id,
                            ProviderName: response.Data.firstname + ' ' + response.Data.lastname,
                            userToken: response.Data.token
                        });

                        this.moveTo();
                    } else {
                        this.setState({showLoading: false});
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }
                })
                .catch(error => {
                    this.setState({showLoading: false});
                    console.error('Social Login api error: ', error);
                });
        } else {
            alert('Please connect Internet');
        }
    }

    serviceCost(text) {
        this.setState({ServiceCost: text})
        this.onChangeText('serviceCost', text);

    }

    renderRowCompanyName(item) {
        const {companyName} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.CompanyOnPress(text)}
                        value={companyName}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass2 && (
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

                    {this.state.Cross2 && (
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

    renderRowServiceCost(item) {
        const {serviceCost} = this.state;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.serviceCost(text)}
                        value={serviceCost}
                        maxLength={12}
                        placeholder={item.hintText}
                        keyboardType={"number-pad"}/>

                    {this.state.showIconLeftpass2 && (
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

                    {this.state.Cross2 && (
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


    renderRowStreetAddress(item) {
        const {streetAdrress} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.StreetAddressOnPress(text)}
                        value={streetAdrress}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass3 && (
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

                    {this.state.Cross3 && (
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

    renderCity(item) {
        const {city} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.CityOnPress(text)}
                        value={city}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass4 && (
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

                    {this.state.Cross4 && (
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

    renderState(item) {
        const {state} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.StateOnPress(text)}
                        value={state}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass5 && (
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

                    {this.state.Cross5 && (
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

    renderZipCode(item) {
        const {zipcode} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.ZipCodeOnPress(text)}
                        value={zipcode}
                        maxLength={12}
                        placeholder={item.hintText}
                        keyboardType={"number-pad"}
                    />

                    {this.state.showIconLeftpass6 && (
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

                    {this.state.Cross6 && (
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

    renderOnlineReview(item) {
        const {onlineReviewLink} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.OnlineReviewOnPress(text)}
                        value={onlineReviewLink}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass7 && (
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

                    {this.state.Cross7 && (
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

    renderRowWithChecks(item) {
        return (
            <View>
                <CheckBox
                    center
                    title={item.title}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                    checkedColor={'red'}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderWidth: 0,
                        marginStart: 10
                    }}
                    textStyle={{fontWeight: 'normal'}}
                />
            </View>
        );
    }

    renderRowWithChecks1(item) {
        return (
            <View>
                <CheckBox
                    center
                    title={item.title}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.checked2}
                    onPress={() => this.setState({checked2: !this.state.checked2})}
                    checkedColor={'red'}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderWidth: 0,
                        marginStart: 10
                    }}
                    textStyle={{fontWeight: 'normal'}}
                />
            </View>
        );
    }

    renderCompanyWebsite(item) {
        const {companyWebsite} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.CompanyWebsiteOnPress(text)}
                        value={companyWebsite}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass8 && (
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

                    {this.state.Cross8 && (
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

    renderYearsInBusiness(item) {
        const {yearsInBusiness} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.YearsInBusinessOnPress(text)}
                        value={yearsInBusiness}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass9 && (
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

                    {this.state.Cross9 && (
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

    renderNoOfEmployees(item) {
        const {numOfEmployees} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.NoOfEmployeesOnPress(text)}
                        value={numOfEmployees}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass10 && (
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

                    {this.state.Cross10 && (
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

    renderFirstName(item) {
        const {firstName} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.FirstNameOnPress(text)}
                        value={firstName}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass11 && (
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

                    {this.state.Cross11 && (
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

    renderLastName(item) {
        const {lastName} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.LastNameOnPress(text)}
                        value={lastName}
                        maxLength={12}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass12 && (
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

                    {this.state.Cross12 && (
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

    renderEmail(item) {
        const {email} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.EmailOnPress(text)}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        placeholder={item.hintText}
                        value={email}
                    />

                    {this.state.showIconLeftpass13 && (
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

                    {this.state.Cross13 && (
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

    renderPhone(item) {
        const {phone} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.PhoneOnPress(text)}
                        keyboardType={'phone-pad'}
                        placeholder={item.hintText}
                        value={phone}
                    />

                    {this.state.showIconLeftpass14 && (
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

                    {this.state.Cross14 && (
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

    renderPassword(item) {
        const {password} = this.props;
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.PasswordOnPress(text)}
                        secureTextEntry={true}
                        placeholder={item.hintText}
                        value={password}
                    />

                    {this.state.showIconLeftpass15 && (
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

                    {this.state.Cross15 && (
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

    renderConfirmPassword(item) {
        return (
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
                    <TextInput
                        style={{height: 50, width: '100%'}}
                        onChangeText={text => this.ConfirmPasswordOnPress(text)}
                        secureTextEntry={true}
                        placeholder={item.hintText}
                    />

                    {this.state.showIconLeftpass16 && (
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

                    {this.state.Cross16 && (
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

    SelectVal(value) {
        this.setState({favSport1: value});
        if (value === 'Freelancer') {
            this.setState({freeLancer: false});
            this.onChangeText('businessType', value);
        } else if (value === 'Registered Business') {
            this.setState({freeLancer: true});
        }
    }

    SelectVal2(value) {
        this.setState({serviceType: value})
    }

    renderRowSelect(item) {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                <View style={{flexDirection: 'column'}}>
                    <View style={{marginStart: 10}}>
                        <RNPickerSelect
                            placeholder={item.placeholder}
                            items={BType}
                            onValueChange={value => this.SelectVal(value)}
                            onUpArrow={() => {
                                this.inputRefs.favSport1.focus();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.favSport1.togglePicker();
                            }}
                            style={pickerSelectStyles}
                            value={this.state.favSport1}
                            useNativeAndroidPickerStyle={false}
                            ref={el => {
                                this.inputRefs.favSport1 = el;
                            }}
                        />
                    </View>

                    {item.showIC && (
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/arrowup.png')}
                            style={{
                                width: 10,
                                height: 10,
                                position: 'absolute',
                                right: 30,
                                bottom: 10,
                                visibility: 'hidden'
                            }}
                        />
                    )}

                    {item.showIC2 && (
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/arrowdown.png')}
                            style={{
                                width: 10,
                                height: 10,
                                position: 'absolute',
                                right: 30,
                                bottom: 25,
                                visibility: 'hidden'
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

    renderRowSelect2(item) {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                <View style={{flexDirection: 'column'}}>
                    <View style={{marginStart: 10}}>
                        <RNPickerSelect
                            placeholder={item.placeholder}
                            items={BType2}
                            onValueChange={value => this.SelectVal2(value)}
                            onUpArrow={() => {
                                this.inputRefs.serviceType.focus();
                            }}
                            onDownArrow={() => {
                                this.inputRefs.serviceType.togglePicker();
                            }}
                            style={pickerSelectStyles}
                            value={this.state.serviceType}
                            useNativeAndroidPickerStyle={false}
                            ref={el => {
                                this.inputRefs.serviceType = el;
                            }}
                        />
                    </View>

                    {item.showIC && (
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/arrowup.png')}
                            style={{
                                width: 10,
                                height: 10,
                                position: 'absolute',
                                right: 30,
                                bottom: 10,
                                visibility: 'hidden'
                            }}
                        />
                    )}

                    {item.showIC2 && (
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/arrowdown.png')}
                            style={{
                                width: 10,
                                height: 10,
                                position: 'absolute',
                                right: 30,
                                bottom: 25,
                                visibility: 'hidden'
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


    CompanyOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass2: true});
            this.setState({Cross2: false});
        } else if (text.length === 0) {
            this.setState({showIconLeftpass2: false});
            this.setState({Cross2: true});
        } else {
            this.setState({showIconLeftpass2: false});
            this.setState({Cross2: true});
        }
        this.onChangeText('companyName', text);
    }

    StreetAddressOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass3: true});
            this.setState({Cross3: false});
        } else if (text.length === 0) {
            this.setState({showIconLeftpass3: false});
            this.setState({Cross3: true});
        } else {
            this.setState({showIconLeftpass3: false});
            this.setState({Cross3: true});
        }
        this.onChangeText('streetAdrress', text);
    }

    CityOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass4: true});
            this.setState({Cross4: false});
        } else if (text.length === 0) {
            this.setState({showIconLeftpass4: false});
            this.setState({Cross4: true});
        } else {
            this.setState({showIconLeftpass4: false});
            this.setState({Cross4: true});
        }
        this.onChangeText('city', text);
    }

    StateOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass5: true});
            this.setState({Cross5: false});
        } else {
            this.setState({showIconLeftpass5: false});
            this.setState({Cross5: true});
        }
        this.onChangeText('state', text);
    }

    ZipCodeOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass6: true});
            this.setState({Cross6: false});
        } else {
            this.setState({showIconLeftpass6: false});
            this.setState({Cross6: true});
        }
        this.onChangeText('zipcode', text);
    }

    OnlineReviewOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass7: true});
            this.setState({Cross7: false});
        } else {
            this.setState({showIconLeftpass7: false});
            this.setState({Cross7: true});
        }
        this.onChangeText('onlineReviewLink', text);
    }

    CompanyWebsiteOnPress(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass8: true});
            this.setState({Cross8: false});
        } else {
            this.setState({showIconLeftpass8: false});
            this.setState({Cross8: true});
        }
        this.onChangeText('companyWebsite', text);
    }

    YearsInBusinessOnPress(text) {
        if (text.length >= 1) {
            this.setState({showIconLeftpass9: true});
            this.setState({Cross9: false});
        } else {
            this.setState({showIconLeftpass9: false});
            this.setState({Cross9: true});
        }
        this.onChangeText('yearsInBusiness', text);
    }

    NoOfEmployeesOnPress(text) {
        if (text.length >= 1) {
            this.setState({showIconLeftpass10: true});
            this.setState({Cross10: false});
        } else {
            this.setState({showIconLeftpass10: false});
            this.setState({Cross10: true});
        }
        this.onChangeText('numOfEmployees', text);
    }

    FirstNameOnPress(text) {
        if (text.length >= 1) {
            this.setState({showIconLeftpass11: true});
            this.setState({Cross11: false});
        } else {
            this.setState({showIconLeftpass11: false});
            this.setState({Cross11: true});
        }
        this.onChangeText('firstName', text);
    }

    LastNameOnPress(text) {
        if (text.length >= 1) {
            this.setState({showIconLeftpass12: true});
            this.setState({Cross12: false});
        } else {
            this.setState({showIconLeftpass12: false});
            this.setState({Cross12: true});
        }
        this.onChangeText('lastName', text);
    }

    EmailOnPress(text) {
        if (this.validate(text)) {
            this.setState({showIconLeftpass13: true});
            this.setState({Cross13: false});
        } else if (text.length === 0) {
            this.setState({showIconLeftpass13: false});
            this.setState({Cross13: true});
        } else {
            this.setState({showIconLeftEmail13: false});
            this.setState({Cross13: true});
        }
        this.onChangeText('email', text);
    }

    validate = text => {
        console.log(text);
        let reg = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
        if (reg.test(text) === false) {
            console.log('Email is Not Correct');
            this.setState({email: text});
            return false;
        } else {
            this.setState({email: text});
            console.log('Email is Correct');
            return true;
        }
    };

    PhoneOnPress(text) {
        if (text.length >= 11 && text.length <= 13) {
            this.setState({showIconLeftpass14: true});
            this.setState({Cross14: false});
        } else if (text.length === 0 || text.length > 13) {
            this.setState({showIconLeftpass14: false});
            this.setState({Cross14: true});
        } else {
            this.setState({showIconLeftpass14: false});
            this.setState({Cross14: true});
        }
        this.onChangeText('phone', text);
    }

    PasswordOnPress(text) {
        this.setState({Password1: text});
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass15: true});
            this.setState({Cross15: false});
        } else {
            this.setState({showIconLeftpass15: false});
            this.setState({Cross15: true});
        }
        this.onChangeText('password', text);
    }

    ConfirmPasswordOnPress(text) {
        this.setState({Cpassword: text});
        if (this.state.Password1 === text) {
            this.setState({showIconLeftpass16: true});
            this.setState({Cross16: false});
        } else {
            this.setState({showIconLeftpass16: false});
            this.setState({Cross16: true});
        }
    }

    moveTo() {
        this.props.navigation.navigate('PhoneNumber', {
            User: this.params.User
        });
    }

    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };
    onSignUp1 = () => {
        if (this.state.isConnected) {
            this.setState({showLoading: true});
            const {
                email,
                password,
                phone,
                firstName,
                lastName,
                businessType,
                serviceType,
                companyName,
                streetAdrress,
                serviceCost,
                city,
                state,
                zipcode,
                onlineReviewLink,
                companyWebsite,
                yearsInBusiness,
                numOfEmployees,
                generalLiabilityInsurance
            } = this.state;
            var details = {
                email: email,
                password: password,
                phone: phone,
                firstName: firstName,
                lastName: lastName,
                businessType: businessType,
                serviceType: serviceType,
                serviceCost:serviceCost,
                companyName: companyName,
                streetAdrress: streetAdrress,
                city: city,
                state: state,
                zipcode: zipcode,
                onlineReviewLink: onlineReviewLink,
                companyWebsite: companyWebsite,
                yearsInBusiness: yearsInBusiness,
                numOfEmployees: numOfEmployees,
                generalLiabilityInsurance: generalLiabilityInsurance
            };
            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            fetch(constants.ProviderSignUp, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
                .then(response => response.json())
                .then(response => {
                    console.log('responseClientlogin-->', '-' + JSON.stringify(response));
                    if (response.ResultType === 1) {
                        this.setState({showLoading: false});
                        Preference.set({
                            clientlogin: true,
                            userEmail: response.Data.email,
                            userId: response.Data.id,
                            userName: response.Data.firstname + ' ' + response.Data.lastname,
                        });

                        this.moveTo();
                    } else {
                        this.setState({showLoading: false});
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }
                })
                .catch(error => {
                    //console.error('Errorr:', error);
                    console.log('Error:', error);
                    alert('Error: ' + error);
                });
            //Keyboard.dismiss();
        } else {
            alert('Please connect Internet');
        }
    };

    render() {
        const placeholder = {
            label: 'Select Business Type',
            value: null,
            color: '#646464'
        };
        const placeholder2 = {
            label: 'Select Service Type',
            value: null,
            color: '#646464'
        };

        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: 'light-content'}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: 'white'}}
                    outerContainerStyles={{backgroundColor: 'white'}}
                    centerComponent={{
                        text: 'Sign up',

                        style: {fontWeight: 'bold', color: 'black', fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around'
                    }}
                />

                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'column',
                            width: '100%',
                            height: 250,
                            backgroundColor: '#F3F3F3',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/images/logo3x.png')}
                            style={{width: 200, height: 200, marginTop: 40}}
                        />
                        <View
                            style={{
                                flexDirection: 'column',
                                marginBottom: 80,
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'black'
                            }}
                        >
                            <Text style={{color: 'red', fontSize: 20}}>
                                {'Profession Information'}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{backgroundColor: 'white', width: '100%', height: 170}}
                    >
                        {this.renderRowSelect({
                            placeholder: placeholder
                        })}
                        {this.renderRowSelect2({
                            placeholder: placeholder2
                        })}
                        {this.renderRowServiceCost({
                            hintText: 'Service Cost '
                        })}

                    </View>
                    {this.state.freeLancer && (
                        <View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20,
                                    marginBottom: 20,
                                    width: '100%',
                                    height: 40
                                }}
                            >
                                <Text
                                    style={{
                                        textAlignVertical: 'center',
                                        color: 'red',
                                        fontSize: 20
                                    }}
                                >
                                    {'Company Information'}
                                </Text>
                            </View>
                            <View style={{backgroundColor: 'white', width: '100%'}}>
                                {this.renderRowCompanyName({
                                    hintText: 'Company Name'
                                })}
                                {this.renderRowStreetAddress({
                                    hintText: 'Street Address'
                                })}
                                {this.renderCity({
                                    hintText: 'City'
                                })}
                                {this.renderState({
                                    hintText: 'State'
                                })}
                                {this.renderZipCode({
                                    hintText: 'Zip Code'
                                })}
                                {this.renderOnlineReview({
                                    hintText: 'Online Review Link (yelp, google, facebook, etc)'
                                })}
                                {this.renderCompanyWebsite({
                                    hintText: 'Company Website'
                                })}
                                {this.renderYearsInBusiness({
                                    hintText: 'Years in business'
                                })}
                                {this.renderNoOfEmployees({
                                    hintText: 'Number of Employees'
                                })}

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        width: '100%',
                                        marginStart: 25,
                                        marginEnd: 20,
                                        marginTop: 20,
                                        marginBottom: 20
                                    }}
                                >
                                    <Text>{'Do you have General Liability Insurance?'}</Text>
                                    <View
                                        style={{flexDirection: 'row', width: '100%', right: 15}}
                                    >
                                        {this.renderRowWithChecks({title: 'Yes', checked: false})}
                                        {this.renderRowWithChecks1({title: 'No', checked: true})}
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            width: '100%',
                            height: 40,
                            marginBottom: 20
                        }}
                    >
                        <Text
                            style={{
                                textAlignVertical: 'center',
                                color: 'red',
                                fontSize: 20
                            }}
                        >
                            {'Other Information'}
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            paddingBottom: 30
                        }}
                    >
                        {this.renderFirstName({
                            hintText: 'First Name'
                        })}
                        {this.renderLastName({
                            hintText: 'Last Name'
                        })}
                        {this.renderEmail({
                            hintText: 'Email'
                        })}
                        {this.renderPhone({
                            hintText: 'Phone'
                        })}
                        {this.renderPassword({
                            hintText: 'Password'
                        })}
                        {this.renderConfirmPassword({
                            hintText: 'Confirm Password'
                        })}
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            width: '100%',
                            backgroundColor: 'white'
                        }}
                    >
                        <TouchableOpacity
                            onPress={this.onSignUp1}
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
                                <Text style={{color: 'white', fontWeight: 'bold'}}>
                                    {'Sign Up'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                marginTop: 30,
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    width: '40%',
                                    height: 0.5,
                                    backgroundColor: Colors.lightGrey
                                }}
                            />

                            <View
                                style={{
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    width: 40,
                                    height: 40,
                                    marginStart: 10,
                                    marginEnd: 10,
                                    shadowColor: '#000',
                                    shadowOffset: {width: 2, height: 2},
                                    shadowOpacity: 1,
                                    shadowRadius: 10,
                                    elevation: 10
                                }}
                            >
                                <Text style={{color: 'black'}}>{'OR'}</Text>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    height: 0.5,
                                    backgroundColor: Colors.lightGrey
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.onSignUpWithFBClick();
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 30,
                                marginBottom: 10
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#4E598F',
                                    width: '85%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 7
                                }}
                            >
                                <Image
                                    source={require('../../../assets/images/facebook.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: 25,
                                        height: 25,
                                        marginEnd: 5
                                    }}
                                />
                                <Text style={{color: 'white', fontWeight: 'bold'}}>
                                    {'Sign Up with Facebook'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20,
                                backgroundColor: '#F3F3F3',
                                height: 70
                            }}
                        >
                            <Text style={{color: 'black'}}>
                                {'Already have an account?'}
                            </Text>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>
                                {' Sign In'}
                            </Text>
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
                            style={{width: 100, height: 100, opacity: 1}}
                        />
                    </View>
                )}
            </View>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});
