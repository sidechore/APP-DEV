import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";
import Carousel from 'react-native-snap-carousel';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class ServicesAndRate2 extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            visible:false,
            entries:["1","2","3",]
        }

    }
  renderSwiperrow(item){

   return <View  style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:20}}>

        <View style={{flexDirection:"column",justifyContent:"center",
            alignItems:"center",
            backgroundColor:"red",
            borderRadius:50,
            height:100,
            width:100
        }}>
            <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}  >{"$32/hr"}</Text>
            <Text style={{color:"white",fontSize:13}}  >{"Client Rate"}</Text>
            <Text style={{color:"white",fontSize:13}} >{"$40.00/hr"}</Text>

        </View>

    </View>


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
                        text: "Services & Rates",
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
                <ScrollView>
                <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:'center'}}>
                    <View style={{width:"80%",borderRadius:5,justifyContent:"center",alignItems:"center",backgroundColor:"white",marginTop:20}}>
                        <View  style={{justifyContent:"center",alignItems:"center",flexDirection:"row",
                        width:"100%"
                        }} >
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.entries}
                            renderItem={this.renderSwiperrow}
                            sliderWidth={290}
                            sliderHeight={290}
                            itemWidth={120}
                            itemHeight={120}
                            enableMomentum={true}
                        />
                        </View>

                        <View style={{width:"35%",height:35,backgroundColor:"red",borderRadius:5,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:'white',fontSize:15}} >HIGH</Text>
                        </View>
                        <View style={{flexDirection:"column",width:"85%",marginTop:20,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"black",textAlign:"center",lineHeight: 20,}} >{"Based on market research, providers with your experience and background are most likely to get hire at the rate of: $21/hr"}</Text>


                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:'center'}}>
                    <View style={{width:"80%",justifyContent:"center",alignItems:"center",borderRadius:5,backgroundColor:"white",marginTop:20}}>

                        <View style={{width:"50%",justifyContent:"center",alignItems:"center",marginTop:10,}}>
                            <Text style={{color:'red',fontSize:17}} >{"Speciality Services"}</Text>
                        </View>
                        <View style={{flexDirection:"column",width:"90%",marginTop:5,marginBottom:20,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{color:"black",textAlign:"center",lineHeight: 20,
                            }} >{"I am on time, very knowledgeable and I tend to strive beyond my goals. Customer satisfaction is important, therefore I try my best to make sure the experience is great so i am requested again in the future. There's a $25 expense fee included for travel."}</Text>


                        </View>



                    </View>
                    <View style={{width:"100%",justifyContent:'center',alignItems:"center",marginTop:60,marginBottom:20}}>
                        <Text style={{color:"red",fontSize:17}} >{"Remove Services"}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {
      this.setState({ visible: true });
    }}
                                      style={{
                                          justifyContent: "center",
                                          alignItems: "center",

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
                            <Text style={{color: "white", fontSize: 18}}>{"Save"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                <Dialog
    visible={this.state.visible}
    
    width={300}

    
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}>
    <DialogContent>
    
    <View style={{flexDirection:"column",width:"100%",backgroundColor:"white",justifyContent:"center",alignItems:"center"}}  >
     <View style={{flexDirection:"column",
     justifyContent:"center"
     ,alignItems:"center",
     marginTop:20,
     width:"100%"
     }}>
     <Text 
     style={{color:"black",fontWeight:"bold"}}
     >{"Are you sure you want to continue?"} </Text>


     </View>
     <View style={{flexDirection:"column",
     justifyContent:"center"
     ,alignItems:"center",
     marginTop:10,width:"100%"
     }}>
     <Text 
     style={{color:"grey",fontSize:13,}}
     >{"Removing a service means you will no longer receive these types of jobs alerts and deletes these info for this category."} </Text>


      </View>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:30,}} >
      <TouchableOpacity
      style={{width:"50%",height:50,borderRadius:5,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
      <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}} >{"YES"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{marginStart:10,width:"50%",height:50,borderRadius:5,backgroundColor:"black",justifyContent:"center",alignItems:"center"}}>
     <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}} >{"NO"}</Text>
      </TouchableOpacity>
     

      </View>


    </View>
    
    </DialogContent>
  </Dialog>
            </View>
        )
    }
}