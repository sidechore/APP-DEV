import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView, Switch} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
export default class Support extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.setState({



        })
    }
    renderRowProfile(item){
        return(
            <View style={{alignItems: "center", width: "100%"}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 50,
                    borderRadius: 5,
                    alignItems:"center"

                }}>
                    <View style={{flexDirection: "column", width: "80%", justifyContent: "center",marginStart:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>

                    </View>


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
                        text: "Help Center",
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
                <View style={{flexDirection:"column"}}>
                    {this.renderRowProfile({

                        text2:"Live Chat",
                    })}
                    {this.renderRowProfile({

                        text2:"Privacy Policy",
                    })}
                    {this.renderRowProfile({

                        text2:"Terms and Conditions",
                    })}


                </View>
            </View>
        )
    }

}