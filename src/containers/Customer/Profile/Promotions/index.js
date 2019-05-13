import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView,Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";



export default class Promotions extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({})
    }

    renderRowProfile() {
        return (
            <View style={{alignItems: "center", width: "90%",flexDirection:"row",
            backgroundColor:"white",margin:20,height:90,borderRadius:10
            }}>


             <View style={{width:"15%",marginStart: 20,}}  >
                 <Image source={require("../../../../assets/images/promo.png")}
                 style={{resizeMode:"contain",width:40,height:40}}

                 />
             </View>
                <View style={{width:"70%",flexDirection:"column"}} >
                    <Text style={{color:"black", fontSize:16,}}  >{"Help Your Friend Get $10"}</Text>
                    <Text style={{color:"red",marginTop:5}}  >{"Refer a Friend"}</Text>


                </View>


            </View>
        )

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
                        text: "Promotions",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />
                {this.renderRowProfile()}

            </View>
        )

    }
}