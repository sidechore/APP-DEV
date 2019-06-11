import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";

export default class Tip extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            TipBGclr:"transparent",
            TipBGclr2:"transparent",
            TipBGclr3:"transparent",
            TipBGclr4:"transparent",
            TipBGclr5:"transparent",
            TipTxTclr:"#646464",
            TipTxTclr2:"#646464",
            TipTxTclr3:"#646464",
            TipTxTclr4:"#646464",
            TipTxTclr5:"#646464",
            
        btnClr:"#B7B7B7"

        
        };
    }
    onSelect(){
        this.setState({TipBGclr: "red",TipBGclr2:"transparent",TipBGclr3:"transparent",TipBGclr4:"transparent",TipBGclr5:"transparent"});
        this.setState({TipTxTclr: "white",TipTxTclr2:"#646464",TipTxTclr3:"#646464",TipTxTclr4:"#646464",TipTxTclr5:"#646464"});
        this.setState({btnClr: "red"});
        }
        onSelect2(){
            this.setState({TipBGclr2: "red",TipBGclr: "transparent",TipBGclr3: "transparent",TipBGclr4: "transparent",TipBGclr5: "transparent"});
            this.setState({TipTxTclr2: "white",TipTxTclr: "#646464",TipTxTclr3: "#646464",TipTxTclr4: "#646464",TipTxTclr5: "#646464"});
            this.setState({btnClr: "red"});
            }
            onSelect3(){
                this.setState({TipBGclr3: "red",TipBGclr: "transparent",TipBGclr4: "transparent",TipBGclr5: "transparent",TipBGclr2: "transparent"});
                this.setState({TipTxTclr3: "white",TipTxTclr: "#646464",TipTxTclr2: "#646464",TipTxTclr4: "#646464",TipTxTclr5: "#646464"});
                this.setState({btnClr: "red"});
                }
                onSelect4(){
                    this.setState({TipBGclr4: "red",TipBGclr: "transparent",TipBGclr2: "transparent",TipBGclr3: "transparent",TipBGclr5: "transparent"});
                    this.setState({TipTxTclr4: "white",TipTxTclr: "#646464",TipTxTclr2: "#646464",TipTxTclr3: "#646464",TipTxTclr5: "#646464"});
                    this.setState({btnClr: "red"});
                    }
                    onSelect5(){
                        this.setState({TipBGclr5: "red",TipBGclr: "transparent",TipBGclr2: "transparent",TipBGclr3: "transparent",TipBGclr4: "transparent"});
                        this.setState({TipTxTclr5: "white",TipTxTclr: "#646464",TipTxTclr2: "#646464",TipTxTclr3: "#646464",TipTxTclr4: "#646464"});
                        this.setState({btnClr: "red"});
                        }

    render() {
        return (


            <View style={[styles.container,{alignItems:"center"}]}>
                <Header
                    statusBarProps={{barStyle: "light-content"}}
                    barStyle="light-content" // or directly
                    style={{backgroundColor: "#F3F3F3"}}
                    outerContainerStyles={{backgroundColor: "#F3F3F3"}}

                    
                    containerStyle={{
                        backgroundColor: "#F3F3F3",
                        justifyContent: "space-around"
                    }}
                    rightComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                        style={{justifyContent:"center",alignItems:"center",marginEnd:10}}
                        >
                            <Image source={require("../../../assets/images/close.png")} style={{
                                height: 14, width: 14, resizeMode: "contain"


                            }}/></TouchableOpacity>
                  }/>
                  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:30}}>
                   <Text style={{fontSize:20,color:"black"}} >{"Would you like to tip John?"}</Text>
                   <Image source={require("../../../assets/images/pimg1.png")}
                    style={{resizeMode:"contain",height:105,width:105,marginTop:30}}   
                   />
                   <Text style={{color:"red",fontSize:24,marginTop:20}} >{"$29.68"}</Text>
                   </View>
                   <View style={{flexDirection:"row",marginTop:40,justifyContent:"center",alignItems:"center",marginTop:70}}>
                   <TouchableOpacity onPress={()=>this.onSelect()} style={{borderRadius:100,borderColor:"#B7B7B7",borderWidth:1,width:65,height:65,
                   justifyContent:"center",alignItems:"center",marginEnd:5,backgroundColor:this.state.TipBGclr
                   }}>
                   <Text style={{fontSize:15,color:this.state.TipTxTclr}} >{"No Tip"}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onSelect2()} style={{borderRadius:100,borderColor:"#B7B7B7",borderWidth:1,width:65,height:65,
                   justifyContent:"center",alignItems:"center",marginEnd:5,backgroundColor:this.state.TipBGclr2
                   }}>
                   <Text style={{fontSize:15,color:this.state.TipTxTclr2}} >{"$10"}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onSelect3()} style={{borderRadius:100,borderColor:"#B7B7B7",borderWidth:1,width:65,height:65,
                   justifyContent:"center",alignItems:"center",marginEnd:5,backgroundColor:this.state.TipBGclr3
                   }}>
                   <Text style={{fontSize:15,color:this.state.TipTxTclr3}} >{"$20"}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onSelect4()} style={{borderRadius:100,borderColor:"#B7B7B7",borderWidth:1,width:65,height:65,
                   justifyContent:"center",alignItems:"center",marginEnd:5,backgroundColor:this.state.TipBGclr4
                   }}>
                   <Text style={{fontSize:15,color:this.state.TipTxTclr4}} >{"25$"}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.onSelect5()} style={{borderRadius:100,borderColor:"#B7B7B7",borderWidth:1,width:65,height:65,
                   justifyContent:"center",alignItems:"center",marginEnd:5,backgroundColor:this.state.TipBGclr5
                   }}>
                   <Text style={{fontSize:15,color:this.state.TipTxTclr5}} >{"30$"}</Text>
                   </TouchableOpacity>

                   </View>
                   <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:30,width:"75%"}}  >
                   <Text style={{textAlign:"center",color:"#646464",fontSize:16}} >{"Tips are optional and 100% goes to the Service Professional."}</Text>
                   
                   </View>
                   <TouchableOpacity style={{justifyContent: "center",backgroundColor: this.state.btnClr, alignItems: "center", marginTop: 40,width: "90%",
                            height: 55,borderRadius: 7}}>
            
                        <Text style={{color: "white",fontSize:17  }}>{"Submit"}</Text>
                       
                    </TouchableOpacity>

            </View>
            
)
}
}