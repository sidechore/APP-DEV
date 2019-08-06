import React, {Component} from 'react';
import { Text, View,TextInput} from 'react-native';

import {CheckBox, Image} from "react-native-elements";

export default class AddJobDetails extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false,
            date: new Date()
        };

    }

    render() {
        return (
            <View style={{
                flexDirection: "column", width: "100%", justifyContent: "center",
                alignItems: "center", marginTop: 20
            }}>
                <Text style={{color: "red", fontSize: 18}}>{"What else should we know?"}</Text>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginTop: 20,
                    height: 200,
                    width: "100%",
                }}>
                    <TextInput style={{width:"85%",
                        color:"black",position: "absolute",top:10, left:35,fontSize:17,}}
                               multiline={true}
                               numberOfLines={2}
                               onChangeText={(text) => this.props.onAddJob(text)}
                               placeholder={"Describe what you need done. Include the quantity of items and the model/brand name.... "}

                    />

                </View>
            </View>
        )
    }
}