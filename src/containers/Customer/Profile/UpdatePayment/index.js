import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";


export default class UpdatePayment extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {text: 'Useless Placeholder',
        };
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
                    text: "Edit Payment",
                    style: {fontWeight: "bold", color: "black", fontSize: 18}
                }}
                containerStyle={{
                    backgroundColor: "white",
                    justifyContent: "space-around"
                }}
                leftComponent={
                    <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} >
                        <Image source={require("../../../../assets/images/arrowback.png" )} style={{
                            marginStart:10, height:14,width:14,resizeMode:"contain"


                        }}  /></TouchableOpacity>
                }


            />

                <View style={{alignItems: "center", width: "100%"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Payment")} >

                    <View style={{
                        flexDirection: "row", width: "85%", marginTop: 20,
                        backgroundColor: "white",

                        height: 50,
                        borderRadius: 5,
                        alignItems:"center"

                    }}>
                        <View style={{width:"10%"}} >
                            <Image source={require("../../../../assets/images/mscard.png")}
                                   style={{resizeMode:"contain",width:35,height:35,
                                   marginStart:15
                                   }}

                            />
                        </View>

                        <View style={{width:"80%"}} >

                            <Text
                                style={{marginStart: 35, fontSize: 15, color: "#646464",marginBottom:5}}>{"Ending in 2458"}</Text>
                        </View>

                        <View style={{width:"10%"}} >


                            <Image style={{resizeMode:"contain",
                                height:14,width:14
                            }}  source={require("../../../../assets/images/arrowforward.png")}/>
                        </View>


                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Rewards")} >
                    <View style={{
                        flexDirection: "row", width: "85%", marginTop: 20,
                        backgroundColor: "white",

                        height: 50,
                        borderRadius: 5,
                        alignItems:"center"

                    }}>
                        <View style={{width:"90%"}} >
                            <Text
                                style={{marginStart: 15, fontSize: 15, color: "#646464",marginBottom:5}}>{"Balance Rewards"}</Text>
                        </View>

                        <View style={{width:"10%"}} >


                            <Image style={{resizeMode:"contain",
                                height:14,width:14
                            }}  source={require("../../../../assets/images/arrowforward.png")}/>
                        </View>



                    </View>
                    </TouchableOpacity>


                </View>
            </View>
        )


    }
}