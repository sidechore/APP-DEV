import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,CheckBox } from "react-native-elements";





export default class ServiceProviderSignUp extends Component {


    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',};

    }
    renderRowInput(item) {
        return <View style={{
            flexDirection: 'column', width: "100%",

        }}>
            <View style={{flexDirection: "column",}}>
                <TextInput
                    style={{height: 50, marginStart: 20, marginEnd: 20, marginTop: 10}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={item.hintText}
                />
                {item.showIC && <Image resizeMode={"contain"} source={require("../../../assets/images/arrowup.png")}
                                       style={{
                                           width: 10,
                                           height: 10,
                                           position: "absolute",
                                           right: 30,
                                           bottom:10,
                                           visibility: "hidden"
                                       }}/>}

                {item.showIC2 && <Image resizeMode={"contain"} source={require("../../../assets/images/arrowdown.png")}
                                       style={{
                                           width: 10,
                                           height: 10,
                                           position: "absolute",
                                           right: 30,
                                           bottom:25,
                                           visibility: "hidden"
                                       }}/>}

            </View>
            <View
                style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>

        </View>;
    }

    renderRowWithChecks(item) {
        return<CheckBox
                center
                title={item.title}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={item.checked}
                checkedColor={"red"}
                containerStyle={{backgroundColor:"white", borderWidth:0,marginStart:10}}
                textStyle={{fontWeight:"normal"}}


            />;


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
                        text: "Sign up",

                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}



                />

                <ScrollView>

                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                        height: 250, backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 200, height: 200, marginTop: 40}}/>
                        <View style={{
                            flexDirection: "column", marginBottom: 80, justifyContent: "center",
                            alignItems: "center", color: "black",
                        }}>
                            <Text style={{color: "red",fontSize:20}}>{"Profession Information"}</Text>


                        </View>

                    </View>

                    <View style={{backgroundColor:"white",width:"100%",height:170}}  >
                        {this.renderRowInput({
                            hintText: "Select Business Type",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Select Service Type",
                            showIC:true,
                            showIC2:false,


                        })}

                    </View>
                    <View  style={{justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:20,width:"100%",height:40 }} >
                        <Text style={{textAlignVertical:"center",color:"red",fontSize:20 }}  >{"Company Information"}</Text>

                    </View>
                    <View style={{backgroundColor:"white",width:"100%"}}  >
                        {this.renderRowInput({
                            hintText: "Company Name",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Street Address",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "City",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "State",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Zip Code",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Online Review Link (yelp, google, facebook, etc)",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Company Website",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Years in business",
                            showIC:true,
                            showIC2:true,


                        })}
                        {this.renderRowInput({
                            hintText: "Number of Employees",

                            showIC:false,
                            showIC2:false,


                        })}

                        <View style={{flexDirection:"column",width:"100%",marginStart:25,marginEnd:20,marginTop:20,marginBottom:20}}  >
                            <Text>{"Do you have General Liability Insurance?"}</Text>
                            <View style={{flexDirection:"row",width:"100%",right:15}}>
                                {this.renderRowWithChecks({title: "Yes",checked:false})}
                                {this.renderRowWithChecks({title: "No",checked:true})}

                            </View>



                        </View>




                    </View>
                    <View  style={{justifyContent:"center",alignItems:"center",marginTop:20,width:"100%",height:40,marginBottom:20 }} >
                        <Text style={{textAlignVertical:"center",color:"red",fontSize:20, }}  >{"Other Information"}</Text>

                    </View>
                    <View style={{backgroundColor:"white",width:"100%",paddingBottom:30}}  >
                        {this.renderRowInput({
                            hintText: "First Name",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Last Name",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Email",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Phone",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Password",
                            showIC:false,
                            showIC2:false,


                        })}
                        {this.renderRowInput({
                            hintText: "Confirm Password",
                            showIC:false,
                            showIC2:false,


                        })}

                    </View>
                    {/*<View style={{flexDirection:"row",width:"100%",height:30,marginTop:20,marginStart:25}} >
                        <Image source={require("../../../assets/images/arrowupred.png")} style={{resizeMode:"contain",
                        height:15,width:15
                        }}  />
                        <Image source={require("../../../assets/images/arrowdownred.png")} style={{resizeMode:"contain",
                            height:15,width:15,marginStart:20
                        }}  />

                    </View>
*/}

                    <View style={{flexDirection:"column",width:"100%",height:100,backgroundColor:"#F3F3F3",marginTop:10}} >
                        <TouchableOpacity style={{justifyContent: "center", alignItems: "center", marginTop: 25}}>
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
                        </TouchableOpacity>


                    </View>


                </ScrollView>

            </View>



        )



    }
}