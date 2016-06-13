/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    Text
} from 'react-native'

import * as KGColor from 'KGColor'

import DateTimePicker from 'KGDatePicker'
import EditDateTime from './EditDateTime'
import EditText from './EditText'

export default class AddFirst extends React.Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            startTime:new Date()
        };
    }

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.picker.show()
                }} date={this.state.startTime}/>

                <EditText title="第  一  次:" />

                <EditText title="还想说点:" />

                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                        this.setState({
                            startTime:date
                        })
                }} />
            </View>
        )
    }
}