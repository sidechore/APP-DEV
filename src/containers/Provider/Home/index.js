import {Header, Image} from "react-native-elements";
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from './styles';
import HomeJobs from './HomeJobs.js'


export default class ProviderHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            JobsOpen: false,
            JobClose: true,
        };
    }
    Open(){
        this.setState({JobsOpen:true});
        this.setState({JobClose:false})



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
                        text: "Home",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }


                />


                {this.state.JobClose &&  <View>
                    <View style={{
                flexDirection: "column", width: "100%", backgroundColor: "white",
                justifyContent: "center", alignItems: "center"
            }}>
                <View style={{
                    width: "80%",
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: 17, color: "black"}}>
                        {"Hi, [First Name] Here's what's going "}</Text>
                    <Text style={{fontSize: 17, color: "black"}}>
                        {"on today."}</Text>
                </View>
            </View>
                <View style={{
                    justifyContent: "center", alignItems: "center", marginTop: 20,
                    marginBottom: 20
                }}>
                    <TouchableOpacity
                    onPress={()=>this.Open()}
                    >
                    <Text
                        style={{
                            color: "red",
                            fontSize: 17

                        }}
                    >{"Today's Scheduled Jobs"}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{

                    justifyContent: "center", alignItems: "center",
                    backgroundColor: "white", width: "85%",marginStart:25 , marginBottom: 20,borderRadius:5
                }}>
                    <View style={{
                        width: "100%",

                        justifyContent: "center",
                        alignItems: "center",
                        marginTop:10,
                        marginBottom:10
                    }}>
                        <Text style={{color:"black"}} >{"No jobs scheduled today."}</Text>
                        <Text style={{marginTop:10,color:"#B8B8B8"}}>{"Make sure that your availability is set up date so"}</Text>
                        <Text style={{color:"#B8B8B8"}}>{"that you can receive new jobs."}</Text>

                    </View>
                    <TouchableOpacity style={{width:"100%",backgroundColor:"red",justifyContent:"center"
                        ,alignItems:"center",borderBottomRightRadius:5,borderBottomLeftRadius:5,height:50,marginTop:20
                    }} >
                        <Text style={{color:"white",fontSize:17}} >{"Set my Availability"}</Text>
                    </TouchableOpacity>

                </View>
</View>}

                {this.state.JobsOpen &&
                    <HomeJobs/>


                }

            </View>
        )
    }

}
