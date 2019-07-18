import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import {constants} from "../../../../utils/constants";
import Preference from "react-native-preference";


export default class ProAbout extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state={
            Greytext: true,
            joining_data:Preference.get("joining_data"),
            total_jobs:Preference.get("total_jobs"),
            Response_Status:"",
            isConnected:true,
            userId:Preference.get("userId"),
            showLoading:false
        }
    }
   /*componentDidMount=()=>{
const {userId}=this.state;
console.log("userId--"+JSON.stringify(Preference.get("userId")))
       if (this.state.isConnected) {
           this.setState({showLoading: true});

           fetch(constants.Aboutme + "/" +Preference.get("userId"), {
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
                       this.setState({showLoading: false,joining_data:Data.joining_data,
                           total_jobs:Data.total_jobs });
                       Preference.set({
                           clientlogin: true,
                           userEmail: response.Data.email,
                           userId: response.Data.id,
                           userName:
                               response.Data.firstname + ' ' + response.Data.lastname,
                           userToken: response.Data.token,
                           joining_data:Data.joining_data,
                           total_jobs:Data.total_jobs

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



    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "white"}}
                    outerContainerStyles={{backgroundColor: "white"}}

                    centerComponent={{
                        text: "About Me",
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
                <View style={{flexDirection:"column",width:"100%",marginStart:20,marginTop:30}}>
                    <View style={{}}  >
                <Text style={{color:"black"}}>
                    {"Official start date:"+this.state.joining_data}
                </Text>
                </View>
                    <Text style={{color:"black",marginTop:5,marginBottom:5}} >
                        {"Total amount of jobs completed:"+this.state.total_jobs}
                    </Text>
                    <Text style={{color:"black"}}>
                        {"Average response time:Good"+this.state.Response_Status}
                    </Text>


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
