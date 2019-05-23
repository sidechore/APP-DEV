import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";

export default class Current extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
        };
    }
    onPrss(){

        this.props.navigation.navigate("TaskerProfile")

    }

    renderJobsOpen(item) {

        return <View style={{flexDirection: "row", width: "100%", backgroundColor: "white", marginTop: 20}}>
            <View style={{
                flexDirection: "column", width: "40%", justifyContent: "center",
                alignItems: "center", marginTop: 20, marginBottom: 30
            }}>
                <TouchableOpacity onPress={() => this.onPrss()}>

                <Image
                    source={require('../../../../assets/images/pimg1.png')}
                    style={{resizeMode: "contain", width: 70, height: 70}}
                />
                </TouchableOpacity>


                    <Text style={{color: "black", marginTop: 5, fontSize: 15}}>{"John Brown"}</Text>

            </View>
            <View style={{
                flexDirection: "column", width: "60%", marginTop: 20, marginBottom: 30

            }}>
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate("ProJobsDetails")} >
                <Text style={{color: "black", fontSize: 17,}}>{"Furniture Assembly"}</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", alignItems: 'center', marginTop: 25}}>
                    <Image
                        source={require("../../../../assets/images/calendargrey.png")}
                        style={{resizeMode: "contain", width: 13, height: 13, marginEnd: 10}}
                    />
                    <Text style={{color: "#606366"}}>{"Mar 29, 2019"}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: 'center', marginTop: 5}}>
                    <Image
                        source={require("../../../../assets/images/pingrey.png")}
                        style={{resizeMode: "contain", width: 13, height: 13, marginEnd: 10}}
                    />
                    <Text style={{color: "#606366"}}>{"Carpenter Village"}</Text>
                </View>
            </View>

        </View>


    }

    jobOpen() {
        this.setState({JobsOpen: true});
        this.setState({JobClose: false});

    }


    render() {
        return (


            <View style={{flexDirection: "column", width: "100%",}}>

                {this.state.JobClose &&
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
                    <TouchableOpacity onPress={() => this.jobOpen()}>

                        <Image source={require("../../../../assets/images/Currenticon.png")}
                               style={{resizeMode: "contain", height: 80, width: 80}}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{color: "black", marginTop: 20, fontSize: 20}}
                    >{"You have no current jobs."}</Text>
                    <Text
                        style={{color: "black", marginTop: 10}}
                    >{"SideChore can get the job done."}</Text>
                    <Text style={{color: "black"}}>{"Book a job and see it here."}</Text>
                </View>
                }

                {this.state.JobsOpen &&


                <View style={{marginTop: 15, marginStart: 20, marginEnd: 20, marginBottom: 20}}>
                    <Text style={{color: "red", fontSize: 15}}>March 2019</Text>


                    {this.renderJobsOpen()}
                    {this.renderJobsOpen()}
                    <Text style={{color: "red", fontSize: 15, marginTop: 15}}>November 2018</Text>

                    {this.renderJobsOpen()}
                    {this.renderJobsOpen()}
                    {this.renderJobsOpen()}

                </View>
                }
            </View>


        )
    }
}