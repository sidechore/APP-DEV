import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

import Preference from "react-native-preference";

export default class Promote extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state={
            parmote_code:Preference.get("PromoteCode"),
            showLoading:false,
            isConnected:true


        }
    }
   /* componentDidMount=()=>{
        console.log("userId--"+JSON.stringify(Preference.get("userId")))
        if (this.state.isConnected) {
            this.setState({showLoading: true});

            fetch(constants.Promote + "/" +Preference.get("userId"), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },

            })
                .then(response => response.json())
                .then(response => {
                    console.log(
                        'responseClientlogin-->',
                        '-' + JSON.stringify(response)
                    );
                    if (response.ResultType === 1) {
                        let Data=response.Data;
                        this.setState({showLoading: false,parmote_code:Data.parmote_code});
                        Preference.set({
                            clientlogin: true,
                            userEmail: response.Data.email,
                            userId: response.Data.id,
                            userName:
                                response.Data.firstname + ' ' + response.Data.lastname,
                            userToken: response.Data.token,
                            PromoteCode:Data.parmote_code,
                        });
                    } else {
                        this.setState({showLoading: false});
                        if (response.ResultType === 0) {
                            alert(response.Message);
                        }
                    }
                })
                .catch(error => {
                    //console.error('Errorr:', error);
                    console.log('Error:', error);
                    alert('Error: ' + error);
                });

            //Keyboard.dismiss();
        } else {
            alert('Please connect Internet');
        }
    };*/
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

                        <Text
                            style={{marginStart: 5, fontSize: 13,color:"#BABABA" ,textAlignVertical: "center"}}>{item.text1}</Text>

                    </View>
                    <View style={{width:"10%"}} >

                        {item.Greytext &&
                        <Image style={{resizeMode:"contain",
                            height:20,width:20
                        }}  source={require("../../../../assets/images/Sharered.png")}/>
                        }
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
                        text: "Promote",
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

                        text2:this.state.parmote_code,
                        text1:"Give clients $10 off their next job",
                        Greytext:false
                    })}
                    {this.renderRowProfile({

                        text2:"https://sc.co/john-v--17",
                        text1:"Share your profile with clients",
                        Greytext:true
                    })}


                </View>
                {this.state.showLoading && (
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            opacity: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../../assets/images/loading.gif')}
                            style={{ width: 100, height: 100, opacity: 1 }}
                        />
                    </View>
                )}
            </View>
        )
    }

}