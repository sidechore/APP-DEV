import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import {constants} from "../../../utils/constants";


export default class Tip extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            TipBGclr: "transparent",
            TipBGclr2: "transparent",
            TipBGclr3: "transparent",
            TipBGclr4: "transparent",
            TipBGclr5: "transparent",
            TipTxTclr: "#646464",
            TipTxTclr2: "#646464",
            TipTxTclr3: "#646464",
            TipTxTclr4: "#646464",
            TipTxTclr5: "#646464",
            tip:0,
            isConnected:true,
            btnClr: "#B7B7B7",
            JobId:"",
            JobStatus:undefined,
            showLoading:false,



        };
        const {navigation} = this.props;
        const itemId = navigation.getParam('jobId', 'NO-ID');
        const Status=navigation.getParam('TipStatus','NO-STATUS')
        console.log("gettingUSer--->" + itemId);
        console.log("gettingstatus--->" +Status);
        this.state.JobId=itemId;
        this.state.JobStatus=Status;
    }

    onSelect() {
        this.setState({
            TipBGclr: "red",
            TipBGclr2: "transparent",
            TipBGclr3: "transparent",
            TipBGclr4: "transparent",
            TipBGclr5: "transparent"
        }, () => {
            if (this.state.TipBGclr === "red") {
                this.setState({tip:0}, () => {
                    console.log(this.state.tip)
                });

            }
        });
        this.setState({
            TipTxTclr: "white",
            TipTxTclr2: "#646464",
            TipTxTclr3: "#646464",
            TipTxTclr4: "#646464",
            TipTxTclr5: "#646464"
        });
        this.setState({btnClr: "red"});

    }

    onSelect2() {
        this.setState({
            TipBGclr2: "red",
            TipBGclr: "transparent",
            TipBGclr3: "transparent",
            TipBGclr4: "transparent",
            TipBGclr5: "transparent"
        }, () => {
            if (this.state.TipBGclr2 === "red") {
                this.setState({tip:10}, () => {
                    console.log(this.state.tip)
                });

            }
        });
        this.setState({
            TipTxTclr2: "white",
            TipTxTclr: "#646464",
            TipTxTclr3: "#646464",
            TipTxTclr4: "#646464",
            TipTxTclr5: "#646464"
        });
        this.setState({btnClr: "red"});
    }

    onSelect3() {
        this.setState({
            TipBGclr3: "red",
            TipBGclr: "transparent",
            TipBGclr4: "transparent",
            TipBGclr5: "transparent",
            TipBGclr2: "transparent"
        }, () => {
            if (this.state.TipBGclr3 === "red") {
                this.setState({tip: 20}, () => {
                    console.log(this.state.tip)
                });
            }
        });
        this.setState({
            TipTxTclr3: "white",
            TipTxTclr: "#646464",
            TipTxTclr2: "#646464",
            TipTxTclr4: "#646464",
            TipTxTclr5: "#646464"
        });
        this.setState({btnClr: "red"});
    }

    onSelect4() {
        this.setState({
            TipBGclr4: "red",
            TipBGclr: "transparent",
            TipBGclr2: "transparent",
            TipBGclr3: "transparent",
            TipBGclr5: "transparent"
        }, () => {
            if (this.state.TipBGclr4 === "red") {
                this.setState({tip: 25}, () => {
                    console.log(this.state.tip)
                });
            }
        });
        this.setState({
            TipTxTclr4: "white",
            TipTxTclr: "#646464",
            TipTxTclr2: "#646464",
            TipTxTclr3: "#646464",
            TipTxTclr5: "#646464"
        });
        this.setState({btnClr: "red"});
    }

    onSelect5() {
        this.setState({
            TipBGclr5: "red",
            TipBGclr: "transparent",
            TipBGclr2: "transparent",
            TipBGclr3: "transparent",
            TipBGclr4: "transparent"
        }, () => {
            if (this.state.TipBGclr5 === "red") {
                this.setState({tip: 30}, () => {
                    console.log(this.state.tip)
                });
            }
        });
        this.setState({
            TipTxTclr5: "white",
            TipTxTclr: "#646464",
            TipTxTclr2: "#646464",
            TipTxTclr3: "#646464",
            TipTxTclr4: "#646464"
        });
        this.setState({btnClr: "red"});
    }

    onSubmit = () => {

        if (this.state.isConnected) {
                this.setState({showLoading: true});
                const {tip,JobId,JobStatus} = this.state;
                var details = {
                    job_id:JobId,
                    tip_amount:tip,
                    tip_status:JobStatus

                };
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch(constants.AddaTip, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                }).then(response => response.json())
                    .then(response => {
                        console.log("responseClientlogin-->", "-" + JSON.stringify(response));
                        if (response.ResultType === 1) {
                            this.setState({showLoading: false});

                            this.moveToHome();

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
                        alert("Error: " + error);
                    });
                //Keyboard.dismiss();

        } else {
            alert("Please connect Internet");
        }
    };

    moveToHome() {


        this.props.navigation.goBack();

    }

    render() {
        return (


            <View style={[styles.container, {alignItems: "center"}]}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "#F3F3F3"}}
                    outerContainerStyles={{backgroundColor: "#F3F3F3"}}


                    containerStyle={{
                        backgroundColor: "#F3F3F3",
                        justifyContent: "space-around"
                    }}
                    rightComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                                          style={{justifyContent: "center", alignItems: "center", marginEnd: 10}}
                        >
                            <Image source={require("../../../assets/images/close.png")} style={{
                                height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }/>
                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                    <Text style={{fontSize: 20, color: "black"}}>{"Would you like to tip John?"}</Text>
                    <Image source={require("../../../assets/images/pimg1.png")}
                           style={{resizeMode: "contain", height: 105, width: 105, marginTop: 30}}
                    />
                    <Text style={{color: "red", fontSize: 24, marginTop: 20}}>{"$29.68"}</Text>
                </View>
                <View style={{flexDirection: "row", marginTop: 40, justifyContent: "center", alignItems: "center",}}>
                    <TouchableOpacity onPress={() => this.onSelect()} style={{
                        borderRadius: 100,
                        borderColor: "#B7B7B7",
                        borderWidth: 1,
                        width: 65,
                        height: 65,
                        justifyContent: "center",
                        alignItems: "center",
                        marginEnd: 5,
                        backgroundColor: this.state.TipBGclr
                    }}>
                        <Text style={{fontSize: 15, color: this.state.TipTxTclr}}>{"No Tip"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelect2()} style={{
                        borderRadius: 100,
                        borderColor: "#B7B7B7",
                        borderWidth: 1,
                        width: 65,
                        height: 65,
                        justifyContent: "center",
                        alignItems: "center",
                        marginEnd: 5,
                        backgroundColor: this.state.TipBGclr2
                    }}>
                        <Text style={{fontSize: 15, color: this.state.TipTxTclr2}}>{"$10"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelect3()} style={{
                        borderRadius: 100,
                        borderColor: "#B7B7B7",
                        borderWidth: 1,
                        width: 65,
                        height: 65,
                        justifyContent: "center",
                        alignItems: "center",
                        marginEnd: 5,
                        backgroundColor: this.state.TipBGclr3
                    }}>
                        <Text style={{fontSize: 15, color: this.state.TipTxTclr3}}>{"$20"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelect4()} style={{
                        borderRadius: 100,
                        borderColor: "#B7B7B7",
                        borderWidth: 1,
                        width: 65,
                        height: 65,
                        justifyContent: "center",
                        alignItems: "center",
                        marginEnd: 5,
                        backgroundColor: this.state.TipBGclr4
                    }}>
                        <Text style={{fontSize: 15, color: this.state.TipTxTclr4}}>{"$25"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelect5()} style={{
                        borderRadius: 100,
                        borderColor: "#B7B7B7",
                        borderWidth: 1,
                        width: 65,
                        height: 65,
                        justifyContent: "center",
                        alignItems: "center",
                        marginEnd: 5,
                        backgroundColor: this.state.TipBGclr5
                    }}>
                        <Text style={{fontSize: 15, color: this.state.TipTxTclr5}}>{"$30"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                    width: "75%"
                }}>
                    <Text style={{
                        textAlign: "center",
                        color: "#646464",
                        fontSize: 16
                    }}>{"Tips are optional and 100% goes to the Service Professional."}</Text>

                </View>
                <TouchableOpacity onPress={this.onSubmit} style={{
                    justifyContent: "center",
                    backgroundColor: this.state.btnClr,
                    alignItems: "center",
                    marginTop: 40,
                    width: "90%",
                    height: 55,
                    borderRadius: 7
                }}>

                    <Text style={{color: "white", fontSize: 17}}>{"Submit"}</Text>

                </TouchableOpacity>
                {this.state.showLoading && <View style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    opacity: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image resizeMode={"contain"} source={require("../../../assets/images/loading.gif")} style={{width:100,height:100, opacity: 1,}}/>
                </View>}
            </View>

        )
    }
}