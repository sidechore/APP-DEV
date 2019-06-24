import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import { Header, Image } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
export default class ProCall extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      text: "Useless Placeholder",
      JobsOpen: false,
      JobClose: true
    };
  }
  render() {
    return (
      <View style={{ flexDirection: "column", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            margin: 25
          }}
        >
          <View style={{ flexDirection: "row", width: "70%" }}>
            <Image
              source={require("../../../../assets/images/pimg1.png")}
              style={{ resizeMode: "contain", height: 50, width: 50 }}
            />
            <View style={{ flexDirection: "column", marginStart: 10 }}>
              <Text style={{ color: "#646464", fontSize: 13 }}>
                {"Service Pro"}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginStart: 1
                }}
              >
                {"John Doe"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "30%"
            }}
          >
            <Image
              source={require("../../../../assets/images/callred.png")}
              style={{ resizeMode: "contain", width: 30, height: 30 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              width: "85%",
              backgroundColor: "black",
              height: 50,
              borderRadius: 7
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>{"End Call"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
