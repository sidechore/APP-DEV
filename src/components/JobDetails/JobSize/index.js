import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {CheckBox, Image} from "react-native-elements";

export default class JobSize extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false,
            checked: false,
            checked2: false,
            checked3: false,
            JobValue: null,
        };

    }

    JobPressed = () => {
        this.setState({
            checked: !this.state.checked,
            checked2: false,
            checked3: false,
            JobValue: "Small"
        }, () => {
            if (!this.state.checked) {
                this.setState({JobValue: null}, () => {
                    alert("first " + this.state.JobValue)
                })

            } else {
                this.props.onJobSize(this.state.JobValue);
            }

        });

    };
    JobPressed2 = () => {
        this.setState({
            checked2: !this.state.checked2,
            checked: false,
            checked3: false,
            JobValue: "Medium"
        }, () => {
            if (!this.state.checked2) {
                this.setState({JobValue: null}, () => {
                    alert("first " + this.state.JobValue)
                })

            } else {
                this.props.onJobSize(this.state.JobValue);
            }
        });

    };
    JobPressed3 = () => {
        this.setState({
            checked3: !this.state.checked3,
            checked: false,
            checked2: false,
            JobValue: "Large"
        }, () => {
            if (!this.state.checked3) {
                this.setState({JobValue: null}, () => {
                    alert("first " + this.state.JobValue)
                })

            } else {
                this.props.onJobSize(this.state.JobValue);
            }
        });
    }

    renderRowWithChecks(item) {
        return <CheckBox

            title={item.title}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={item.checked}
            checkedColor={"red"}
            containerStyle={{
                backgroundColor: "white",
                borderWidth: 0,
                marginStart: 10
            }}
            onPress={item.onpressed}
            textStyle={{fontWeight: "normal", color: "black"}}

        />;


    }

    render() {
        return (
            <View style={{
                flexDirection: "column", width: "100%", justifyContent: "center",
                alignItems: "center", marginTop: 20
            }}>
                <Text style={{color: "red", fontSize: 18}}>{"What is the Estimated Time"}</Text>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginTop: 20,
                    height: 250,
                    width: "100%",
                    marginStart: 20,

                    alignItems: "center"
                }}>
                    <View style={{flexDirection: "column",}}>

                        {this.renderRowWithChecks({
                            title: "Small",
                            checked: this.state.checked,
                            onpressed: this.JobPressed
                        })}
                        <Text style={{color:"black",marginStart:25}}>{"Estimate 1 hour or less"}</Text>
                        {this.renderRowWithChecks({
                            title: "Medium",
                            checked: this.state.checked2,
                            onpressed: this.JobPressed2
                        })}
                        <Text style={{color:"black",marginStart:25}}>{"Estimate 1 hour or less"}</Text>
                        {this.renderRowWithChecks({
                            title: "Large",
                            checked: this.state.checked3,
                            onpressed: this.JobPressed3
                        })}
                        <Text style={{color:"black",marginStart:25}}>{"Estimate 1 hour or less"}</Text>


                    </View>

                </View>
            </View>
        )
    }
}