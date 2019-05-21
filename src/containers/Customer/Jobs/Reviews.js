import React, {Component} from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header, Image} from "react-native-elements";
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class Jobs extends Component {
    constructor(props) {
        super(props);
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    renderRowInputEmail(item) {
        return <View style={{flexDirection: 'column', width: "100%"}}>
            <View style={{flexDirection: "row", marginStart: 20, marginEnd: 20}}>
                <TextInput
                    style={{height: 50, width: "100%"}}
                    onChangeText={(text) => this.checkEmail(text)}
                    textContentType={"Email"}
                    placeholder={"(Optional)"}
                    keyboardType={"email-address"}
                />
            </View>
            <View style={{height: 0.5, backgroundColor: "#52525D", marginStart: 25, marginEnd: 25,}}></View>
        </View>;
    }
    checkEmail(email) {

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
                        text: "Review",
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
                    }/>
                <ScrollView>
                    <View style={{flexDirection: "column", width: "100%",}}>
                        <View style={{
                            flexDirection: "column",
                            marginTop: 15,
                            marginStart: 25,
                            marginEnd: 25,
                            backgroundColor: "white"
                        }}>
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 15
                                    }}
                                >{"How would you rate your overall"}</Text>
                                <Text style={{
                                    color: "black",
                                    fontSize: 15
                                }}>{"experience with SideChore?"}</Text>
                                <Rating
                                    type='custom'
                                    onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical: 15,}}
                                    imageSize={22}
                                    ratingColor={"red"}
                                    ratingBackgroundColor={"#646464"}
                                />
                            </View>
                            <View style={{height: 1, backgroundColor: "#DADADA"}}></View>
                            <View style={{
                                width: "100%", justifyContent: "center",
                                alignItems: "center", marginTop: 10
                            }}>
                                <Text style={{
                                    color: "black",
                                    fontSize: 15
                                }}>{"How would you rate your"}</Text>
                                <Text style={{
                                    color: "black",
                                    fontSize: 15
                                }}>{"service professional john?"}</Text>
                                <Rating
                                    type='custom'
                                    onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical: 15,}}
                                    imageSize={22}
                                    ratingColor={"red"}
                                    ratingBackgroundColor={"#646464"}
                                />
                                <View style={{height: 1, backgroundColor: "#DADADA"}}></View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "column",
                            marginTop: 15,
                            marginStart: 25,
                            marginEnd: 25,
                            marginBottom: 20,
                            backgroundColor: "white"
                        }}>
                            <View style={{
                                width: "100%", justifyContent: "center",
                                alignItems: "center", marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 15
                                    }}
                                >{"How would you rate your John's"}</Text>
                                <Text style={{
                                    color: "black",
                                    fontSize: 15
                                }}>{"response time?"}</Text>
                                <Rating
                                    type='custom'
                                    onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical: 15,}}
                                    imageSize={22}
                                    ratingColor={"red"}
                                    ratingBackgroundColor={"#646464"}
                                />
                            </View>
                            <View style={{height: 1, backgroundColor: "#DADADA"}}></View>
                            <View style={{
                                width: "100%", justifyContent: "center",
                                alignItems: "center", marginTop: 10
                            }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 15

                                    }}
                                >{"How likely are you to recommend"}</Text>
                                <Text style={{
                                    color: "black",
                                    fontSize: 15

                                }}>{"SideChore to a friend?"}</Text>
                                <Rating
                                    type='custom'
                                    onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical: 15,}}
                                    imageSize={22}
                                    ratingColor={"red"}
                                    ratingBackgroundColor={"#646464"}
                                />
                                <View style={{height: 1, backgroundColor: "#DADADA"}}></View>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "column",
                            marginTop: 15,
                            marginStart: 25,
                            marginEnd: 25,
                            marginBottom: 20,
                            backgroundColor: "white",

                        }}>
                            <View style={{ justifyContent: "center",
                                alignItems: "center",marginTop:10,marginBottom:20 }} >
                            <Text style={{color:"black"}}  >
                                {"Do you have any suggestions about how"}
                            </Text>
                            <Text style={{color:"black"}} >
                                {"we can improve our service or any comments"}
                            </Text >
                            <Text style={{color:"black"}}  >
                                {"related to your experience with SideChore?"}
                            </Text>
                                {this.renderRowInputEmail()}

                            </View>



                        </View>
                        <TouchableOpacity
                            style={{
                                justifyContent: "center",
                                alignItems: "center",

                                marginBottom: 50
                            }}>
                            <View style={{
                                backgroundColor: "red",
                                height: 50,
                                width: 310,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 7


                            }}>
                                <Text style={{color: "white", fontSize: 15}}>{"Submit"}</Text>


                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        )
    }


}