import React, {Component} from "react";
import {Text, View} from "react-native";
import {CheckBox, Image} from "react-native-elements";

export default class Vehicle extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: "Useless Placeholder",
            showIconLeftEmail: false,
            Cross1: false,
            VehicleValue: null,
            checked: false,
            checked2: false,
            checked3: false
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
        this.setState({
            checked: !this.state.checked,
            checked2: false,
            checked3: false,
            VehicleValue: "No Vehicle Needed"
        }, ()=> {
            if (!this.state.checked) {
                this.setState({VehicleValue: null} ,()=>{
                    alert("first " + this.state.VehicleValue)
                })

            }else{
              this.props.onVehicle(this.state.VehicleValue)
            }
        });

    };
    VehiclePressed2 = () => {

        this.setState({
            checked2: !this.state.checked2,
            checked: false,
            checked3: false,
            VehicleValue: "A car is needed"
        }, ()=> {
            if (!this.state.checked2) {
                this.setState({VehicleValue: null} ,()=>{
                    alert("first " + this.state.VehicleValue)
                })

            }else{
                this.props.onVehicle(this.state.VehicleValue)
            }
        });


    };
    VehiclePressed3 = () => {
        this.setState({
            checked3: !this.state.checked3,
            checked: false,
            checked2: false,
            VehicleValue: "A truck is needed"
        }, ()=> {
            if (!this.state.checked3) {
                this.setState({VehicleValue: null} ,()=>{
                   alert("first " + this.state.VehicleValue)
                })

            }else{
                this.props.onVehicle(this.state.VehicleValue)
            }
        });
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
                        flexDirection: "row",
                        backgroundColor: "white",
                        marginTop: 20,
                        height: 170,
                        width: "100%",

                        alignItems: "center"
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
