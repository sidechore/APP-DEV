import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
export default class Receipt extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            isModalVisible: false,
            headerColor: "red",
            headerColor2: "black",
            headerColor3:"black",
            barColor: "red",
            barColor2: "transparent",
            barColor3: "transparent",
            Receipt: true,
            JobInfo: false,
            Message:false

        };
        this.Receipt = this.Receipt.bind(this);
        this.JobInfo = this.JobInfo.bind(this);
        this.Message = this.Message.bind(this);
        

    }
    Receipt() {

        this.setState({barColor: "red"});
        this.setState({headerColor: "red"});
        this.setState({Receipt: true});
        this.setState({barColor2: "transparent"});
        this.setState({headerColor2: "black"});
        this.setState({barColor3: "transparent"});
        this.setState({headerColor3: "black"});
        this.setState({JobInfo: false});
        this.setState({Message: false});
        

    }
    JobInfo() {

        this.setState({barColor: "transparent"});
        this.setState({headerColor: "black"});
        this.setState({Receipt: false});
        this.setState({barColor2: "red"});
        this.setState({headerColor2: "red"});
        this.setState({barColor3: "transparent"});
        this.setState({headerColor3: "black"});
        this.setState({JobInfo: true});
        this.setState({Message: false});
        

    }
    Message() {

        this.setState({barColor: "transparent"});
        this.setState({headerColor: "black"});
        this.setState({Receipt: false});
        this.setState({barColor2: "transparent"});
        this.setState({headerColor2: "black"});
        this.setState({barColor3: "red"});
        this.setState({headerColor3: "red"});
        this.setState({JobInfo: false});
        this.setState({Message: true});
        

    }
    renderReceiptRow1(item){
        return<View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:item.bckclr}} >
        
        <View style={{ flexDirection:"row",justifyContent:"center",alignItems:"center",width:"90%",marginTop:15,marginBottom:15,marginStart:10,}}>
        <View style={{justifyContent:"center",width:"50%",}}>
        <Text style={{color:"black",fontSize:18}} >{item.text1}</Text>
        </View>
        <View style={{width:"50%",paddingEnd:15}}>

            <Text style={{color:item.textclr, fontSize:18,textAlign:"right"}}>{item.text2}</Text>
        </View>

        
        </View>
        <View style={{width:"100%",height:1 ,backgroundColor: "#DADADA", }}></View>

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
                        text: "Furniture Assembly",
                        style: {fontWeight: "bold", color: "black", fontSize: 18}
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require("../../../../assets/images/arrowback.png")} style={{
                                marginStart: 10, height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                    }
                />
                 <View style={{flexDirection: "column", backgroundColor: "white", width: "100%"}}>
                <View style={{flexDirection: "row", width: "100%", marginTop: 15,}}>
                    <TouchableOpacity style={{
                        width: "33%", justifyContent: "center", alignItems: "center",

                    }} onPress={() => this.Receipt()}>

                        <Text style={{color: this.state.headerColor, fontSize: 16, marginBottom: 15}}>{"Receipt"}</Text>
                        <View style={{height: 4, backgroundColor: this.state.barColor, width: "100%"}}></View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{width: "33%", justifyContent: "center", alignItems: "center",}}
                                      onPress={() => this.JobInfo()}
                    >

                        <Text style={{
                            color: this.state.headerColor2,
                            fontSize: 16,
                            marginBottom: 15
                        }}>{"Job Info"}</Text>
                        <View style={{height: 4, backgroundColor: this.state.barColor2, width: "100%"}}></View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{width: "33%", justifyContent: "center", alignItems: "center",}}
                                      onPress={() => this.Message()}
                    >

                        <Text style={{
                            color: this.state.headerColor3,
                            fontSize: 16,
                            marginBottom: 15
                        }}>{"Message"}</Text>
                        <View style={{height: 4, backgroundColor: this.state.barColor3, width: "100%"}}></View>

                    </TouchableOpacity>
                </View>


            </View>
            {this.state.Receipt &&  
            <View style={{flexDirection:"column",width:"100%",marginTop:10}}>
            {this.renderReceiptRow1({
              text1:"Service Pro",
              text2:"John V." ,
              textclr:"red",
              bckclr:"transparent"
               
            })}
            {this.renderReceiptRow1({
              text1:"Date of Job",
              text2:"Jun 01, 2019" ,
              textclr:"black",
              bckclr:"transparent"
               
            })}
            {this.renderReceiptRow1({
              text1:"Rate",
              text2:"$25.88/hr",
              textclr:"black",
              bckclr:"transparent"
               
            })}
            {this.renderReceiptRow1({
              text1:"Hours",
              text2:"1:00",
              textclr:"black",
              bckclr:"transparent"
               
            })}
            {this.renderReceiptRow1({
              text1:"Service Fee",
              text2:"$3.88",
              textclr:"black",
              bckclr:"transparent"
               
            })}
            {this.renderReceiptRow1({
              text1:"Expenses",
              text2:"$0",
              textclr:"black",
              bckclr:"transparent"
              

            })}
            {this.renderReceiptRow1({
              text1:"Tip",
              text2:"$2.59",
              textclr:"black",
              bckclr:"transparent"
              
            })}
            {this.renderReceiptRow1({
              text1:"Total",
              text2:"$32.35",
              textclr:"black", 
              bckclr:"white"
              
            })}
            {this.renderReceiptRow1({
              text1:"Pending Charge",
              text2:"$32.35",
              textclr:"black", 
              bckclr:"white"
              
            })}
           
             

            </View>}
                </View>

        )
                }
}
