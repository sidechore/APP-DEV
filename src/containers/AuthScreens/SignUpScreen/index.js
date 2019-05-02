import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import {checkEmail} from '../../../utils';
import {Colors} from "../../../themes";

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',

            showIconLeftpass1: false,
            showIconLeftpass2: false,
            showIconLeftpass3: false,
            showIconLeftpass4: false,
            showIconLeftpass5: false,
            showIconLeftpass6: false,
            showIconLeftpass7: false,
            Cross1:false,
            Cross2:false,
            Cross3:false,
            Cross4:false,
            Cross5:false,
            Cross6:false,
            Cross7:false,
            Password:'',
            Cpassword:"",

        };
    }

    renderRowInputText(item) {
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength(text)}

                    maxLength={12}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftpass1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}

                {this.state.Cross1 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowInputText2(item) {
        return<View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checklength2(text)}

                    maxLength={12}
                    placeholder={item.hintText}
                />

                {this.state.showIconLeftpass2 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}

                {this.state.Cross2 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass3 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross3 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowInputPhone(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPhone(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass4 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross4 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowInputPassword(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkPassword(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass5 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross5 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowcnfrPassword(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.cnfrPassword(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass6 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross6 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    renderRowPostal(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.postal(text)}
                    textContentType={"Email"}
                    placeholder={item.hintText}
                    keyboardType={"email-address"}
                />

                {this.state.showIconLeftpass7 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/checked.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}


                {this.state.Cross7 &&
                <Image resizeMode={"contain"} source={require("../../../assets/images/close.png")}
                       style={{
                           width: 20,
                           height: 20,
                           position: "absolute",
                           right: 10,
                           top: 15
                       }}/>}
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }



    checklength(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass1: true});
            this.setState({Cross1:false})
        }else if(text.length===0){
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1:true})
        }
        else{
            this.setState({showIconLeftpass1: false})
            this.setState({Cross1:true})


        }
    }
    checklength2(text) {
        if (text.length >= 3) {
            this.setState({showIconLeftpass2: true});
            this.setState({Cross2:false})
        }else if(text.length===0){
            this.setState({showIconLeftpass2: false})
            this.setState({Cross2:true})
        }
        else{
            this.setState({showIconLeftpass2: false})
            this.setState({Cross2:true})


        }
    }


    checkEmail(email) {
        if (this.validate(email)) {
            this.setState({showIconLeftpass3: true});
            this.setState({Cross3:false})
        }else if(email.length===0){
            this.setState({showIconLeftpass3: false})
            this.setState({Cross3:true})
        }

        else {
            this.setState({showIconLeftEmail3: false});
            this.setState({Cross3:true})
        }

    }
    validate = (text) => {
        console.log(text);
        let reg = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({email: text})
            return false;
        } else {
            this.setState({email: text})
            console.log("Email is Correct");
            return true;
        }
    };

    checkPhone(text) {
        if (text.length >=11 && text.length <= 13) {
            this.setState({showIconLeftpass4: true});
            this.setState({Cross4:false})
        }else if(text.length===0 ||text.length>13){
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4:true})
        }
        else{
            this.setState({showIconLeftpass4: false})
            this.setState({Cross4:true})


        }
    }

    checkPassword(text) {
        this.setState({Password:text});
        if (text.length >= 8 && text.length <= 12) {
            this.setState({showIconLeftpass5: true});
            this.setState({Cross5:false})
        }else {
            this.setState({showIconLeftpass5: false})
            this.setState({Cross5:true})
        }
    }
    cnfrPassword(text) {
        this.setState({Cpassword:text});
        if (this.state.Password === text){
            this.setState({showIconLeftpass6: true});
            this.setState({Cross6:false})
        }else if(text.length===0){
            this.setState({showIconLeftpass6: false})
            this.setState({Cross6:true})
        }
        else{
            this.setState({showIconLeftpass6: false})
            this.setState({Cross6:true})
        }
    }
    postal(text) {
        if (text.length >= 5 && text.length <= 6) {
            this.setState({showIconLeftpass7: true});
            this.setState({Cross7:false})
        }else if(text.length===0){
            this.setState({showIconLeftpass7: false})
            this.setState({Cross7:true})
        }
        else{
            this.setState({showIconLeftpass7: false})
            this.setState({Cross7:true})
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "Sign Up",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}/>
                <ScrollView>
                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 200, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 200, height: 200, marginTop: 40}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 60, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>

                        </View>

                    </View>
                    {this. renderRowInputText({
                        hintText: "First Name",

                    })}
                    {this. renderRowInputText2({
                        hintText: "Last Name",

                    })}
                    {this.renderRowInputEmail({
                        hintText: "Email",

                    })}
                    {this.renderRowInputPhone({
                        hintText: "Phone",

                    })}
                    {this. renderRowInputPassword({
                        hintText: "Password",

                    })}
                    {this.  renderRowcnfrPassword({
                        hintText: "Confirm Password",

                    })}
                    {this.   renderRowPostal({
                        hintText: "Postal Code",

                    })}
                    <View style={{flexDirection:"column",width:"100%",height:130,backgroundColor:"#F3F3F3",marginTop:10}} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("PhoneNumber")}  style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
                        <View style={{
                            flexDirection: "column",
                            backgroundColor: "#FA2021",
                            width: "85%",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7


                        }}>
                            <Text style={{color: "white", fontWeight: "bold"}}>{"Sign Up"}</Text>


                        </View>
                    </TouchableOpacity   >
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:20  }} >
                            <Text style={{color:'black'}} >{"Already have an account?"}</Text>
                            <Text style={{color:"red", fontWeight:"bold" }}>{" Sign In"}</Text>
                        </View>

                    </View>



                </ScrollView>




            </View>





        )}




}