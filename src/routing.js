import React from "react";
import {StyleSheet, Image,} from "react-native";
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
import AdditionalJobDetails from './containers/Customer/Home/AdditionalJobDetails';
import Tasker from  "./containers/Customer/Tasker";
import Account from "./containers/Customer/Profile/Account"
import Profile from "./containers/Customer/Profile/index.js"
import ChangePassword from "./containers/Customer/Profile/ChangePassword/index.js"
import UpdatePayment from "./containers/Customer/Profile/UpdatePayment/index.js"
import Rewards from "./containers/Customer/Profile/UpdatePayment/Rewards.js"
import Payment from "./containers/Customer/Profile/UpdatePayment/Payment.js"
import Promotions from "./containers/Customer/Profile/Promotions/index.js"
import Notifications from "./containers/Customer/Profile/Notifications/index.js"
import Help from "./containers/Customer/Profile/Help/index.js"
import TaskerProfile from"./containers/Customer/Tasker/TaskerProfile/index.js"

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
            screen:Profile,
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
    TabNavigator:TabNavigator,
    AdditionalJobDetails:AdditionalJobDetails,
    Tasker:Tasker,
    Account:Account,
    Profile:Profile,
    ChangePassword:ChangePassword,
    UpdatePayment:UpdatePayment,
    Rewards:Rewards,
    Payment:Payment,
    Promotions:Promotions,
    Notifications:Notifications,
    Help:Help,
    TaskerProfile:TaskerProfile




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