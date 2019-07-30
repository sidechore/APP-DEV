import React, {Component} from "react";
import {Text, View} from "react-native";
import {CheckBox} from "react-native-elements";

export default class Vehicle extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: "Useless Placeholder",
            showIconLeftEmail: false,
            Cross1: false,
            date: new Date(),
            checked: false,
            checked2: false,
            checked3: false,
            VehicleValue: ""

        };
    }

    renderRowWithChecks(item) {
        return (
            <CheckBox
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
            />
        );
    }

    VehiclePressed = () => {
        this.setState({checked: !this.state.checked, checked2: false, checked3: false});
        if(this.state.checked===true){
        this.setState({VehicleValue: "No Vehicle Needed"});

       }else{
            this.setState({vehicleValue:null});
            alert("Vvalue" + this.state.VehicleValue)
        }
    };
    VehiclePressed2 = () => {
        this.setState({checked2: !this.state.checked2, checked: false, checked3: false})
        if(this.state.checked2===true) {
            this.setState({VehicleValue: "A car is needed"});
            alert("Vvalue" + this.state.VehicleValue)
        }else{ this.setState({vehicleValue:null});
            alert("Vvalue" + this.state.VehicleValue)}

    };
    VehiclePressed3 = () => {
        this.setState({checked3: !this.state.checked3, checked2: false, checked: false})
        if(this.state.checked3===true) {
        this.setState({VehicleValue: "A truck is needed"});
        alert("Vvalue" + this.state.VehicleValue)}else{
            this.setState({vehicleValue:null});
            alert("Vvalue" + this.state.VehicleValue)
        }
    };

    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                }}
            >
                <Text style={{color: "red", fontSize: 18}}>
                    {"Does this job require a car or truck?"}
                </Text>
                <View
                    style={{
                        flexDirection: "column",
                        backgroundColor: "white",
                        marginTop: 20,
                        height: 170,
                        width: "100%",
                    }}
                >
                    <View style={{flexDirection: "column"}}>
                        <View style={{flexDirection: "column"}}>
                            {this.renderRowWithChecks({
                                title: "No Vehicle Needed",
                                checked: this.state.checked,
                                onpressed: this.VehiclePressed
                            })}
                            {this.renderRowWithChecks({
                                title: "A car is needed",
                                checked: this.state.checked2,
                                onpressed: this.VehiclePressed2
                            })}
                            {this.renderRowWithChecks({
                                title: "A truck is needed",
                                checked: this.state.checked3,
                                onpressed: this.VehiclePressed3
                            })}

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
