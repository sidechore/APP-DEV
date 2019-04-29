import React from "react";
import {StyleSheet, Image} from "react-native";
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
    VerifyPhoneNo

} from './containers';








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
    VerifyPhoneNo:VerifyPhoneNo


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