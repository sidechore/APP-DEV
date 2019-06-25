import React, {Component} from "react";
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity, TouchableWithoutFeedback,
    TextInput,
    ScrollView, Switch
} from "react-native";
import {SafeAreaView} from "react-navigation";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {styles} from "./styles";
import {Header, Image} from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import DatePicker from "react-native-date-picker";


     

export default class SubmitInvoice extends Component {
    constructor(props)
    {
        console.disableYellowBox=true
        super(props);
        this.state = { showHours: false, showTimeHours:"00:00",date: new Date() };
      
        
          
        
    }

    renderRowItem(item) {
        return (
            <TouchableWithoutFeedback onPress={() => this.checkHours(item)}>
                <View style={{flexDirection: "column", width: "100%"}}>
                    <View style={{alignItems: "center", width: "100%", flexDirection: "row"}}>
                        <View style={{width: "60%", height: 60, justifyContent: "center"}}>
                            <Text style={{fontSize: 18, color: "black", marginStart: 20}}>{item.text1}</Text>
                        </View>
                        <View style={{width: "40%", height: 60, justifyContent: "center", alignItems: "flex-end",}}>
                            <Text style={{fontSize: 18, color: item.Colortext, marginEnd: 20}}>{item.text2}</Text>
                        </View>
                    </View>
                    <View style={{height: 0.3, width: "100%", backgroundColor: "black"}}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    checkHours(itm) {
        if (itm.text1 === "Hours Worked") {
            this.setState({showHours: true});
        } else {
            this.setState({showHours: false});
        }

    }

    previewData() {
        this.RBSheet.open();
    }

    setTimeForHours(dte)
    {
        console.log("timeHours1:" + dte.getHours());
        console.log("timeHours1:" + dte.getMinutes());
        let txt = dte.getHours() + ":" + dte.getMinutes();
        this.setState({ showTimeHours: txt, date:dte });
    }

    renderRowSheet(item) {
        return <View style={{flexDirection: "column", width: "100%"}}>
            <View style={{alignItems: "center", width: "100%", flexDirection: "row"}}>
                <View style={{width: "60%", justifyContent: "center"}}>
                    <Text style={{fontSize: 15, color: "black", marginStart: 30,fontWeight:"300"}}>{item.text1}</Text>
                </View>
                <View style={{width: "40%", justifyContent: "center", alignItems: "flex-end",}}>
                    <Text style={{fontSize: 15, color: "black", marginEnd: 20,fontWeight:"300"}}>{item.text2}</Text>
                </View>
            </View>
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{ barStyle: "light-content" }}
                    barStyle="light-content" // or directly
                    style={{ backgroundColor: "white" }}
                    outerContainerStyles={{ backgroundColor: "white" }}
                    centerComponent={{
                        text: "Submit Invoice",
                        style: {
                            fontWeight: "bold",
                            color: "black",
                            fontSize: 18
                        }
                    }}
                    containerStyle={{
                        backgroundColor: "white",
                        justifyContent: "space-around"
                    }}
                    leftComponent={
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.goBack()
                            }
                        >
                            <Image
                                source={require("../../../assets/images/arrowback.png")}
                                style={{
                                    marginStart: 10,
                                    height: 14,
                                    width: 14,
                                    resizeMode: "contain"
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                <ScrollView>
                    <View
                        style={{ width: "100%", alignItems: "center" }}
                    >
                        {this.renderRowItem({
                            text1: "Client",
                            text2: "Allison K.",
                            Colortext: "black"
                        })}
                        {this.renderRowItem({
                            text1: "Hours Worked",
                            text2: this.state.showTimeHours,
                            Colortext: "red"
                        })}
                        {this.state.showHours && (
                            <View
                                style={{ width: "100%", height: 200 }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 20
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "45%",
                                            justifyContent: "center",
                                            alignItems: "flex-end",
                                            marginEnd: 25
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: "black",
                                                textAlign: "right",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {"Hours  "}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: "45%",
                                            justifyContent: "center",
                                            alignItems: "flex-start"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                color: "black",
                                                textAlign: "left",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {"Minutes"}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%"
                                    }}
                                >
                                    <DatePicker
                                        date={this.state.date}
                                        onDateChange={date =>
                                            this.setTimeForHours(date)
                                        }
                                        mode={"time"}
                                        locale={"es"}
                                    />
                                </View>
                            </View>
                        )}
                        {this.renderRowItem({
                            text1: "Expenses",
                            text2: "$00.00",
                            Colortext: "red"
                        })}

                        <View>
                            <View
                                style={{
                                    alignItems: "center",
                                    width: "100%",
                                    flexDirection: "row"
                                }}
                            >
                                <View
                                    style={{
                                        width: "60%",
                                        height: 60,
                                        justifyContent: "center",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            color: "black",
                                            marginStart: 20
                                        }}
                                    >
                                        {"Your service Pro Rate"}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: "black",
                                            marginStart: 20
                                        }}
                                    >
                                        {"$32/hr"}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: "40%",
                                        height: 60,
                                        justifyContent: "center",
                                        alignItems: "flex-end"
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: "black",
                                            marginEnd: 20
                                        }}
                                    >
                                        {"$32/hr"}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 0.3,
                                    width: "100%",
                                    backgroundColor: "black"
                                }}
                            />
                        </View>
                        <View
                            style={{
                                height: 0.3,
                                width: "100%",
                                backgroundColor: "black"
                            }}
                        />
                        <View>
                            <View
                                style={{
                                    alignItems: "center",
                                    width: "100%",
                                    flexDirection: "row"
                                }}
                            >
                                <View
                                    style={{
                                        width: "45%",
                                        height: 60,
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: "black"
                                        }}
                                    >
                                        {"Is this on going job?"}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: "45%",
                                        height: 60,
                                        justifyContent: "center",
                                        alignItems: "flex-end"
                                    }}
                                >
                                    <Switch
                                        onTintColor="red"
                                        thumbTintColor="white"
                                        value={true}
                                        style={{
                                            position: "absolute",
                                            tintColor: "red"
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 0.3,
                                    width: "100%",
                                    backgroundColor: "black"
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: "100%",
                                backgroundColor: "white",
                                flexDirection: "column"
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "red",
                                    marginStart: 20,
                                    marginTop: 20
                                }}
                            >
                                {"CLOSING MESSAGE"}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: "black",
                                    marginStart: 20,
                                    marginTop: 20,
                                    marginBottom: 30
                                }}
                            >
                                {
                                    "Thanks for hiring me for your job! If you'd like to hire me again in the future,check out my profile where you can see all my skills and rates https://tr.co/jhon. You'll also get $10 off your next time working with me if you use this referral code: TSK$BQW8."
                                }
                            </Text>
                        </View>
                        <View
                            style={{
                                width: "100%",
                                height: 60,
                                justifyContent: "center",
                                alignItems: "flex-end"
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "black",
                                    marginEnd: 20
                                }}
                            >
                                {"266/500"}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.previewData()}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                                marginBottom: 40,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth: 1,
                                borderColor: "white"
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 18
                                    }}
                                >
                                    {"Preview"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    animationType="fade"
                    duration={500}
                    height={400}
                    customStyles={{
                        container: { alignItems: "center" }
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            width: "100%",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                color: "black",
                                marginBottom: 10,
                                fontWeight: "500"
                            }}
                        >
                            {"Confirm Invoice"}
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: "#646464"
                            }}
                        >
                            {"Alison K."}
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: "#646464",
                                marginBottom: 20
                            }}
                        >
                            {"Furniture Assembly Rckwood"}
                        </Text>
                        {this.renderRowSheet({
                            text1: "Hours Worked",
                            text2: "1:00"
                        })}
                        {this.renderRowSheet({
                            text1: "Your Service Pro Rate",
                            text2: "$32/hr"
                        })}
                        {this.renderRowSheet({
                            text1: "Expenses",
                            text2: "$18:00"
                        })}
                        {this.renderRowSheet({
                            text1: "Service Pro Total",
                            text2: "$50.00"
                        })}
                        <Text
                            style={{
                                fontSize: 13,
                                color: "black",
                                marginTop: 20
                            }}
                        >
                            {"This is NOT an ongoing job."}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.RBSheet.close()}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 20,
                                marginBottom: 10,
                                width: "85%",
                                backgroundColor: "red",
                                height: 50,
                                borderRadius: 7,
                                borderWidth: 1,
                                borderColor: "white"
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 18
                                    }}
                                >
                                    {"Submit"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.previewData()}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 10,
                                width: "85%",
                                backgroundColor: "black",
                                height: 50,
                                borderRadius: 7,
                                borderWidth: 1,
                                borderColor: "white"
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 18
                                    }}
                                >
                                    {"Edit"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </View>
        );
    }
}
