import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import ImagePicker from 'react-native-image-picker';

export default class ProProfile extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state={ avatarSource:null,

            Greytext:true,}



    }
    renderRowProfile(item){
        return(
            <View style={{alignItems: "center", width: "100%"}}>

                <View style={{
                    flexDirection: "row", width: "85%", marginTop: 20,
                    backgroundColor: "white", height: 65,
                    borderRadius: 5,
                    alignItems:"center"

                }}>
                    <View style={{flexDirection: "column", width: "80%", justifyContent: "center",marginStart:10}}>
                        <Text
                            style={{marginStart: 5, fontSize: 15, color: "black",marginBottom:5}}>{item.text2}</Text>
                        {item.Greytext &&
                            <Text
                                style={{marginStart: 5,color:"#BABABA" ,fontSize: 13, textAlignVertical: "center"}}>{item.text1}</Text>
                        }
                        </View>
                    <View style={{width:"10%"}} >


                        <Image style={{resizeMode:"contain",
                            height:14,width:14,
                        }}  source={require("../../../assets/images/arrowforward.png")}/>
                    </View>


                </View>

            </View>
        )

    }

    onAvatarPress() {

        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'H2H',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = {uri: response.uri};

                this.setState({
                    avatarSource: source,
                });
            }
        });
        this.setState({cameraicon: false});
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
                        text: "Profile",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}

                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../../assets/images/arrowback.png")} style={{
                            marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                        }}/></TouchableOpacity>}
                />
                <ScrollView>
                    <View style={{width:"100%",justifyContent:"center",alignItems:"center",
                        marginTop:20
                    }}>
                        <TouchableOpacity onPress={() => this.onAvatarPress()}>
                            <Image source={this.state.avatarSource ? this.state.avatarSource : require("../../../assets/images/pimg1.png")}
                                   style={{resizeMode:"cover",height:110,width:110,borderRadius:55}}

                            />
                        </TouchableOpacity>

                        <Image source={require("../../../assets/images/camera.png")}
                               style={{resizeMode:"contain",height:39,width:39,position:"absolute",bottom:45,left:30}}

                        />
                        <Text style={{color:"black",fontSize:20,marginTop:20}}  >
                            {"John Doe"}

                        </Text>

                    </View>

                    <View style={{width:"100%",marginBottom:20,alignItems:"center"}} >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProAbout")} >
                            {this.renderRowProfile({

                                text2:"About Me",
                                text1:"This is what the client sees.",
                                Greytext:true



                            })}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("ServiceArea")}  >
                            {this.renderRowProfile({
                                text2:"Service Area",
                                text1:"View or edit your work area.",
                                Greytext:true


                            })}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("DirectDeposit")}  >
                            {this.renderRowProfile({
                                text2:"Direct Deposit",
                                text1:"Edit your bank account information.",
                                Greytext:true



                            })}
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={()=> this.props.navigation.navigate("Vehicles")} >
                            {this.renderRowProfile({
                                text2:"Vehicles",
                                text1:"View or edit your vehicles.",
                                Greytext:true



                            })}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Promote")}  >
                            {this.renderRowProfile({
                                text2:"Promote Yourself",
                                text1:"Copy your profile URL and promote code.",
                                Greytext:true



                            })}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Support") } >
                            {this.renderRowProfile({

                                text2:"Support",
                                Greytext:false


                            })}
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => this.props.navigation.navigate("TabNavigator")}
                                          style={{
                                              justifyContent: "center",
                                              alignItems: "center",
                                              marginTop: 20,
                                              width: "85%",
                                              backgroundColor: "#FA2021",
                                              height: 50,
                                              borderRadius: 7,
                                              marginBottom: 20
                                          }}>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Text style={{color: "white", fontSize: 18}}>{"Sign Out"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }




}
