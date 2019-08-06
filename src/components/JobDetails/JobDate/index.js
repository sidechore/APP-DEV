import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default class JobDate extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            text: 'Useless Placeholder',
            showIconLeftEmail: false,
            Cross1: false,
            date: new Date()
        };
        this.props.onGetDate(this.state.date);
    }

    render() {
        return (
            <View style={{
                flexDirection: "column", width: "100%", justifyContent: "center",
                alignItems: "center", marginTop: 20
            }}>
                <Text style={{color: "red", fontSize: 18}}>{"Please choose date and time"}</Text>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginTop: 20,
                    height: 200,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <DatePicker
                        date={this.state.date}
                        onDateChange={date => {
                            this.setState({date}, () => {
                                this.props.onGetDate(this.state.date)
                            });

                        }}
                        mode={"datetime"}

                    />
                </View>
            </View>
        )
    }
}