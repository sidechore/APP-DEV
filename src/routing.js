import React from "react";
import {StyleSheet, Image} from "react-native";
import colors from "./themes/colors";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {
    SelectScreen,
    SignInScreen,
    SignUpScreen,
    ForgotPassword,
    ServiceProviderSignUp,
    InitialScreen,
    SignInProvider,
    ResetPassword,
    PhoneNumber,
    VerifyPhoneNo,
    EnableNotfi,
    SelectLocation,
    StayUpToDate,


} from './containers';
import JobSearch from './containers/Customer/Home';

const TabNavigator = createBottomTabNavigator(
    {
        JobSearch: {
            screen:JobSearch,
            navigationOptions: {
                tabBarLabel: "Home"
            }
        },

        Jobs: {
            screen: SignInScreen,
            navigationOptions: {
                tabBarLabel: "Jobs"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",
            },
            headerTintColor: "#fff"
        },
        Profile: {
            screen: SelectLocation,
            navigationOptions: {
                tabBarLabel: "Profile"
            },
        }
    },
    {
        initialRouteName: "JobSearch",
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;

                if (routeName === "JobSearch") {
                    if (focused) {
                        return <Image source={require('./assets/images/Home.png')} style={styles.icon}/>
                    } else {
                        return <Image source={require('./assets/images/HomeG.png')} style={styles.icon}/>
                    }
                } else if (routeName === "Jobs") {
                    if (focused) {
                        return <Image source={require('./assets/images/Job.png')} style={styles.icon}/>
                    } else {
                        return <Image source={require('./assets/images/JobG.png')} style={styles.icon}/>
                    }
                } else if (routeName === "Profile") {
                    if (focused) {
                        return <Image source={require('./assets/images/Profile.png')} style={styles.icon}/>
                    } else {
                        return <Image source={require('./assets/images/ProfileG.png')} style={styles.icon}/>
                    }
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: colors.bottomTabTintColor
        }
    }
);






const AuthStack = createStackNavigator({
    SelectScreen: SelectScreen,
    SignInScreen:SignInScreen,
    SignUpScreen:SignUpScreen,
    ForgotPassword:ForgotPassword,
    ServiceProviderSignUp:ServiceProviderSignUp,
    InitialScreen:InitialScreen,
    SignInProvider:SignInProvider,
    ResetPassword:ResetPassword,
    PhoneNumber:PhoneNumber,
    VerifyPhoneNo:VerifyPhoneNo,
    EnableNotfi:EnableNotfi,
    SelectLocation:SelectLocation,
    StayUpToDate:StayUpToDate,
    JobSearch:JobSearch,
    TabNavigator:TabNavigator


}, {
    initialRouteName: 'SelectScreen',
    headerMode: 'none'
});

const routing = createSwitchNavigator({
    AuthStack: AuthStack
}, {
    initialRouteName: 'AuthStack',
    headerMode: 'none'
});

export default createAppContainer(AuthStack);

const styles = StyleSheet.create({
    icon: {height: 23, width: 23,justifyContent:"center",alignContent:"center",resizeMode:"contain"}
});