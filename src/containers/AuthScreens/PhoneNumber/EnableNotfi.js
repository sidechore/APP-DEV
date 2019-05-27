import React, {Component} from 'react';
import {ScrollView, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

export default class EnableNotfi extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder', NProvider:false,NClient:false};
        const {navigation} = this.props;
        const itemId = navigation.getParam('User', 'NO-ID');
        console.log("gettingUSer--->" + itemId);
        this.state.userName=itemId;

    }
    onVerify = () => {
        if(this.state.userName==="Client")
            this.props.navigation.navigate('SelectLocation', {User:this.state.userName});
        else {

            this.props.navigation.navigate("StayUpToDate", {User:this.state.userName})
        }
    };
    componentDidMount(): void {
        if (this.state.userName==="Client"){

            this.setState({NClient:true});
            this.setState({NProvider:false})

        }
        if (this.state.userName==="Provider"){

            this.setState({NClient:false});
            this.setState({NProvider:true})

        }
    }


    renderRow(item) {
        return <View style={{marginTop: 15, flexDirection: 'row', width: "80%", alignItems: "center"

        }}>
            <Image style={{width: 6, height: 6, resizeMode: "contain"}}
                   source={require("../../../assets/images/square_bulets.png")}/>
            <Text style={{marginStart: 15, color: "black", fontsize: 15}}>{item.hintText}</Text>
        </View>;
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
                        text: "Enable Notifications",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }


                />

                <ScrollView>

                    <View style={{
                        flexDirection: "column",
                        width: "100%",
                         backgroundColor: "#F3F3F3",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image resizeMode={"contain"} source={require("../../../assets/images/logo3x.png")}
                               style={{width: 180, height: 150,marginBottom:20}}/>

                    </View>
                    {this.state.NProvider && <View
                        style={{width: "100%", height: 280, marginStart: 35, marginEnd: 20, backgroundColor: "white",
                        justifyContent:"center",
                        }}>
                        <Text style={{
                            marginTop: 20,
                            color: "black",
                            fontsize: 15
                        }}>{"Whoops! It looks like notifications are not"}</Text>
                        <Text style={{color: "black", fontsize: 15}}>{"enabled. please enable notifications in "}</Text>
                        <Text style={{color: "black", fontsize: 15}}>{"settings."}</Text>

                        {this.renderRow({
                            hintText: "When new jobs are available",

                        })}
                        {this.renderRow({
                            hintText: "When a customer confirms you for a job.",

                        })}
                        {this.renderRow({
                            hintText: "When you have an upcoming job",

                        })}
                        {this.renderRow({
                            hintText: "Achore is complete",

                        })}
                        <Text style={{
                            marginTop: 20,
                            color: "black",
                            fontsize: 15
                        }}>{"Communication with our customers is an"}</Text>
                        <Text style={{
                            color: "black",
                            fontsize: 15,
                            marginBottom:30
                        }}>{"important part of SideChore."}</Text>
                    </View>}
                    {this.state.NClient &&
                    <View
                        style={{
                            width: "100%", height: 280, marginStart: 35, marginEnd: 20, backgroundColor: "white",
                            justifyContent: "center"
                        }}>
                        <Text style={{
                            marginTop: 20,
                            color: "black",
                            fontsize: 15
                        }}>{"SideCore uses notifications to update you on"}</Text>
                        <Text style={{color: "black", fontsize: 15}}>{"the status of your order when:"}</Text>

                        {this.renderRow({
                            hintText: "Providers are available",

                        })}
                        {this.renderRow({
                            hintText: "Your provider is enroute",

                        })}
                        {this.renderRow({
                            hintText: "Your provider arrives",

                        })}
                        {this.renderRow({
                            hintText: "Achore is complete",

                        })}
                        <Text style={{
                            marginTop: 20,
                            color: "black",
                            fontsize: 15
                        }}>{"Communication is a vital part of SideChore."}</Text>
                        <Text style={{
                            color: "black",
                            fontsize: 15
                        }}>{"Please allow notification when prompted."}</Text>
                    </View>
                    }


                    <View style={{width: "100%", height: 100, backgroundColor: "#F3F3F3"}}>
                    </View>

                    <View style={{flexDirection: "row", width: "100%",backgroundColor:"#F3F3F3"}}>
                        <View style={{flexDirection:"row",width:"50%",justifyContent:'center'}}  >
                        <TouchableOpacity onPress={this.onVerify}
                                          style={{

                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 25,
                                              marginBottom:25
                                          }}>
                            <View style={{
                                backgroundColor: "black",
                                height: 50,
                                width:150,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Not Now"}</Text>


                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row",width:"50%",justifyContent:'center'}}  >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ResetPassword")}
                                          style={{

                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 25,
                                              marginBottom:25
                                          }}>
                            <View style={{
                                backgroundColor: "#FA2021",

                                height: 50,
                                width:150,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"OK"}</Text>


                            </View>
                        </TouchableOpacity>
                        </View>
                        </View>


                </ScrollView>


            </View>

        )


    }


}