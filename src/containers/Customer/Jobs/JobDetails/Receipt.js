import React, { Component } from "react";
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import { Header, Image } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import { red } from "ansi-colors";

export default class Receipt extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: "Useless Placeholder",
            isModalVisible: false,
            headerColor: "red",
            headerColor2: "black",
            headerColor3: "black",
            barColor: "red",
            barColor2: "transparent",
            barColor3: "transparent",
            Receipt: true,
            JobInfo: false,
            Message: false,

            JobsOpen: false,
            JobClose: true,
            MsgData: [
                {
                    id: 1,
                    body: "hello",
                    time: "12:15 am Sun 19 Dec",
                    type: "send"
                },
                {
                    id: 2,
                    body: "who are you",
                    time: "01:15 am Sun 19 Dec",
                    type: "receive"
                },
                {
                    id: 3,
                    body: "where are you",
                    time: "06:15 am Sun 19 Dec",
                    type: "send"
                },
                {
                    id: 4,
                    body: "hahaha",
                    time: "07:15 pm Sun 20 Dec",
                    type: "receive"
                },
                {
                    id: 5,

                    body: "what is your name",
                    time: "09:50 am Sun 21 Dec",
                    type: "image"
                },
                {
                    id: 6,
                    body: "what are you doing?",
                    time: "04:23 pm Sun 22 Dec",
                    type: "receive"
                },
                {
                    id: 7,
                    body: "what are you doing?",
                    time: "04:23 pm Sun 22 Dec",
                    type: "refer"
                }
            ]
        };
        this.Receipt = this.Receipt.bind(this);
        this.JobInfo = this.JobInfo.bind(this);
        this.Message = this.Message.bind(this);
    }

    renderSentText(item) {
        if (item.type === "send") {
            return (
                <View
                    style={{ flexDirection: "row", width: "100%" }}
                >
                    <View
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/pimg1.png")}
                            style={{
                                resizeMode: "contain",
                                width: 45,
                                height: 45
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: "75%",
                            backgroundColor: "white",
                            flexDirection: "row",
                            marginTop: 20,
                            borderRadius: 5,
                            alignItems: "center",
                            borderRightWidth: 0.5,
                            borderRightColor: "#D1D0D0",
                            borderBottomWidth: 1,
                            borderBottomColor: "#D1D0D0"
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                marginStart: 10,
                                marginTop: 5,
                                marginBottom: 5,
                                width: "100%"
                            }}
                        >
                            <Text style={{ color: "black" }}>
                                {item.txt}
                            </Text>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    width: "90%"
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginTop: 10
                                    }}
                                >
                                    {item.txt2}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        if (item.type === "receive") {
            return (
                <View
                    style={{ flexDirection: "row", width: "100%" }}
                >
                    <View
                        style={{
                            width: "75%",
                            backgroundColor: "red",
                            flexDirection: "row",
                            marginTop: 20,
                            borderRadius: 5,
                            alignItems: "center",
                            marginStart: 20
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                marginStart: 10,
                                marginTop: 5,
                                marginBottom: 5,
                                width: "100%"
                            }}
                        >
                            <Text style={{ color: "white" }}>
                                {item.txt}
                            </Text>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    width: "90%"
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginTop: 10,
                                        color: "white",
                                        borderRightWidth: 0.5,
                                        borderRightColor: "#D1D0D0",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#D1D0D0"
                                    }}
                                >
                                    {item.txt2}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/pimp2.png")}
                            style={{
                                resizeMode: "contain",
                                width: 45,
                                height: 45
                            }}
                        />
                    </View>
                </View>
            );
        }
        if (item.type === "image") {
            return (
                <View
                    style={{ flexDirection: "row", width: "100%" }}
                >
                    <View
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/pimg1.png")}
                            style={{
                                resizeMode: "contain",
                                width: 45,
                                height: 45
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            width: "75%",
                            backgroundColor: "white",
                            marginTop: 20,
                            marginBottom: 20,
                            marginStart: 5,
                            marginEnd: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRightWidth: 0.5,
                            borderRightColor: "#D1D0D0",
                            borderBottomWidth: 1,
                            borderBottomColor: "#D1D0D0"
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/listimg4.png")}
                            style={{
                                width: 80,
                                height: 80,
                                margin: 10
                            }}
                        />
                        <View
                            style={{
                                alignItems: "flex-end",
                                width: "90%",
                                marginBottom: 5,
                                marginEnd: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    marginTop: 10
                                }}
                            >
                                {item.txt2}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
        if (item.type === "refer") {
            <View
                style={{
                    marginTop: 30,
                    width: "90%",
                    height: 200,
                    backgroundColor: "white",
                    borderRadius: 5,
                    borderTopColor: "red",
                    borderWidth: 2
                }}
            />;
        }
    }
    checkEmail() {}

    renderRowInputEmail(item) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    backgroundColor: "white"
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginStart: 5,
                        width: "84%"
                    }}
                >
                    <TextInput
                        style={{ height: 50, width: "90%" }}
                        onChangeText={text => this.checkEmail(text)}
                        textContentType={"Email"}
                        placeholder={"Type a Message"}
                        keyboardType={"email-address"}
                    />
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/paper-clips.png")}
                            style={{
                                resizeMode: "contain",
                                width: 25,
                                height: 25
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        width: "15%",
                        marginEnd: 10,
                        backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={require("../../../../assets/images/mailred.png")}
                        style={{ resizeMode: "contain", width: 25, height: 25 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderreceiveText(item) {
        return (
            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        width: "75%",
                        backgroundColor: "red",
                        flexDirection: "row",
                        marginTop: 20,
                        borderRadius: 5,
                        alignItems: "center",
                        marginStart: 20
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            marginStart: 10,
                            marginTop: 5,
                            marginBottom: 5,
                            width: "100%"
                        }}
                    >
                        <Text style={{ color: "white" }}>{item.txt}</Text>
                        <View style={{ alignItems: "flex-end", width: "90%" }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    marginTop: 10,
                                    color: "white"
                                }}
                            >
                                {item.txt2}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: "20%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={require("../../../../assets/images/pimp2.png")}
                        style={{ resizeMode: "contain", width: 45, height: 45 }}
                    />
                </View>
            </View>
        );
    }

    renderImagetext(item) {
        return (
            <View style={{ flexDirection: "row", width: "100%" }}>
                <View
                    style={{
                        width: "20%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={require("../../../../assets/images/pimg1.png")}
                        style={{ resizeMode: "contain", width: 45, height: 45 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        width: "75%",
                        backgroundColor: "white",
                        marginTop: 20,
                        marginBottom: 20,
                        marginStart: 5,
                        marginEnd: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={require("../../../../assets/images/listimg4.png")}
                        style={{ width: 80, height: 80, margin: 10 }}
                    />
                    <View
                        style={{
                            alignItems: "flex-end",
                            width: "90%",
                            marginBottom: 5,
                            marginEnd: 20
                        }}
                    >
                        <Text style={{ fontSize: 12, marginTop: 10 }}>
                            {item.txt2}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    Receipt() {
        this.setState({ barColor: "red" });
        this.setState({ headerColor: "red" });
        this.setState({ Receipt: true });
        this.setState({ barColor2: "transparent" });
        this.setState({ headerColor2: "black" });
        this.setState({ barColor3: "transparent" });
        this.setState({ headerColor3: "black" });
        this.setState({ JobInfo: false });
        this.setState({ Message: false });
    }

    JobInfo() {
        this.setState({ barColor: "transparent" });
        this.setState({ headerColor: "black" });
        this.setState({ Receipt: false });
        this.setState({ barColor2: "red" });
        this.setState({ headerColor2: "red" });
        this.setState({ barColor3: "transparent" });
        this.setState({ headerColor3: "black" });
        this.setState({ JobInfo: true });
        this.setState({ Message: false });
    }

    Message() {
        this.setState({ barColor: "transparent" });
        this.setState({ headerColor: "black" });
        this.setState({ Receipt: false });
        this.setState({ barColor2: "transparent" });
        this.setState({ headerColor2: "black" });
        this.setState({ barColor3: "red" });
        this.setState({ headerColor3: "red" });
        this.setState({ JobInfo: false });
        this.setState({ Message: true });
    }

    renderReceiptRow1(item) {
        return (
            <View
                style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: item.bckclr
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "90%",
                        marginTop: 15,
                        marginBottom: 15,
                        marginStart: 10
                    }}
                >
                    <View style={{ justifyContent: "center", width: "50%" }}>
                        <Text style={{ color: "black", fontSize: 18 }}>
                            {item.text1}
                        </Text>
                    </View>
                    <View style={{ width: "50%", paddingEnd: 15 }}>
                        <Text
                            style={{
                                color: item.textclr,
                                fontSize: 18,
                                textAlign: "right"
                            }}
                        >
                            {item.text2}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: "#DADADA"
                    }}
                />
            </View>
        );
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
                        text: "Furniture Assembly",
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
                                source={require("../../../../assets/images/arrowback.png")}
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
                <View
                    style={{
                        flexDirection: "column",
                        backgroundColor: "white",
                        width: "100%"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            marginTop: 15
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "33%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            onPress={() => this.Receipt()}
                        >
                            <Text
                                style={{
                                    color: this.state.headerColor,
                                    fontSize: 16,
                                    marginBottom: 15
                                }}
                            >
                                {"Receipt"}
                            </Text>
                            <View
                                style={{
                                    height: 4,
                                    backgroundColor: this.state
                                        .barColor,
                                    width: "100%"
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "33%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            onPress={() => this.JobInfo()}
                        >
                            <Text
                                style={{
                                    color: this.state.headerColor2,
                                    fontSize: 16,
                                    marginBottom: 15
                                }}
                            >
                                {"Job Info"}
                            </Text>
                            <View
                                style={{
                                    height: 4,
                                    backgroundColor: this.state
                                        .barColor2,
                                    width: "100%"
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "33%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            onPress={() => this.Message()}
                        >
                            <Text
                                style={{
                                    color: this.state.headerColor3,
                                    fontSize: 16,
                                    marginBottom: 15
                                }}
                            >
                                {"Chat"}
                            </Text>
                            <View
                                style={{
                                    height: 4,
                                    backgroundColor: this.state
                                        .barColor3,
                                    width: "100%"
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {this.state.Message && (
                    <ScrollView>
                        <View
                            style={{
                                flexDirection: "column",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 50
                            }}
                        >
                            <FlatList
                                style={{
                                    width: "100%",
                                    marginBottom: 10,
                                    marginTop: 10
                                }}
                                data={this.state.MsgData}
                                keyExtractor={(item, index) => index}
                                showsVerticalScrollIndicator={false}
                                numColumns={1}
                                scrollEnabled={false}
                                removeClippedSubviews={false}
                                renderItem={({ item }) => (
                                    <View>
                                        {this.renderSentText({
                                            txt: item.body,
                                            txt2: item.time,
                                            type: item.type
                                        })}
                                    </View>
                                )}
                            />
                            <View
                                style={{
                                    
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    width: "90%",
                                    borderRadius: 10,
                                    height: 180,
                                    borderTopWidth: 5,
                                    borderTopColor: "red",
                                    borderRightWidth: 0.5,
                                    borderRightColor: "#D1D0D0",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#D1D0D0"
                                }}
                            >
                                <Text  style={{marginTop:15,fontSize:20,color:"red",fontWeight:"500"}}  >
                                    {"Help your Friends, GET $10  "}
                                </Text>
                                <View style={{width:"65%",marginTop:15,marginBottom:15}} >
                                    <Text
                                    style={{fontSize:16,fontWeight:"300",textAlign:"center"}}
                                    >{"Help a busy friend! Refer them and you both get $10"}</Text>
                                </View>
                                <TouchableOpacity style={{ width: "60%", height: 50, backgroundColor: "red", justifyContent: 'center', alignItems:"center",borderRadius:5}}  >
                                    <Text style={{fontSize:18,fontWeight:"bold",color:"white"}} >{"Refer a Friend"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )}

                {this.state.Receipt && (
                    <View
                        style={{
                            flexDirection: "column",
                            width: "100%",
                            marginTop: 10
                        }}
                    >
                        {this.renderReceiptRow1({
                            text1: "Service Pro",
                            text2: "John V.",
                            textclr: "red",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Date of Job",
                            text2: "Jun 01, 2019",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Rate",
                            text2: "$25.88/hr",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Hours",
                            text2: "1:00",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Service Fee",
                            text2: "$3.88",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Expenses",
                            text2: "$0",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Tip",
                            text2: "$2.59",
                            textclr: "black",
                            bckclr: "transparent"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Total",
                            text2: "$32.35",
                            textclr: "black",
                            bckclr: "white"
                        })}
                        {this.renderReceiptRow1({
                            text1: "Pending Charge",
                            text2: "$32.35",
                            textclr: "black",
                            bckclr: "white"
                        })}
                    </View>
                )}
            </View>
        );
    }
}
