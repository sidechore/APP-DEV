import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image,Divider} from "react-native-elements";

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            monthSet: "",
            lastChecked: 0,
            
            
        }

    }
    renderRowReviews(item){
        return <View style={{flexDirection:"column",width:"100%",}}>
        <View style={{flexDirection:"row",width:"90%",marginStart:25,marginTop:20}}>
        <View style={{width:"90%",}} >
        <Text style={{color:"black",fontSize:16,fontWeight:"500"}} >{item.text1}</Text>
        </View>
        <View style={{width:"20%"}} >
         <Image style={{resizeMode:"contain",height:18,width:18,alignItems:"center",marginTop:3}}
          source={require("../../../assets/images/tickred.png")}/>
         </View>
       </View>
       <View style={{flexDirection:"column",marginTop:5,marginStart:25,marginEnd:15}} >
       <Text style={{ color:"#646464",fontWeight:"200",fontSize:14 }} >{item.text2}</Text>
       {item.showtext && <Text style={{color:"black",marginTop:10,marginBottom:5,fontSize:15,fontWeight:"200"}} >{item.text3}</Text>}
       <Text style={{ color:"#646464",fontWeight:"200",fontSize:14 }} >{item.text4}</Text>
       
       </View>
       <View style={{width:"100%",height:1 ,backgroundColor: "#DADADA",marginTop:20 }}></View>

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
                    text: "Reviews",
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
            <View style={{flexDirection:"column"}}>
             {this.renderRowReviews({
               text1:"Furniture Assembly", 
               text2:"1:00 hour worked on Mar 24, 2019",
               showtext:false,
               
               text4:"Reviewd on Mar 26, 2019"
              
            })}
            {this.renderRowReviews({
               text1:"Assemble Furniture", 
               text2:"2:00 hour worked on Aug 12, 2018",
               showtext:true,
               text3:"Assemble furniture",
               text4:"Reviewd on Dec 12, 2018"
              
            })}
            {this.renderRowReviews({
               text1:"Assemble Furniture", 
               text2:"9:00 hour worked on Aug 16, 2018",
               showtext:true,
               text3:"John did outstanding quality work. if i have assembly jobs in the future, I plan to book with him. Thank you. John!",
               text4:"Reviewd on Nov 16, 2018"
              
            })}
            {this.renderRowReviews({
               text1:"Assemble Furniture", 
               text2:"9:00 hour worked on Aug 16, 2018",
               showtext:true,
               text3:"John did outstanding quality work. if i have assembly jobs in the future, I plan to book with him. Thank you. John!",
               text4:"Reviewd on Nov 16, 2018"
              
            })}

            </View>
            </ScrollView>
            </View>
    )
                    }
                }