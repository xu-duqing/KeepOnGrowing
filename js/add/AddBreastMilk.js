/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'

import * as KGColor from 'KGColor'
import DateTimePicker from 'KGDatePicker'
import EditDateTime from './EditDateTime'

export default class AddBreastMilk extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const nowDate = new Date();
        this.state = {
            startTime:nowDate,
            endTime:nowDate
        };
    }

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="开始时间" onPress={() =>{
                    this.picker.show(0)
                }} date={this.state.startTime}/>
                <EditDateTime title="结束时间" onPress={() =>{
                    this.picker.show(1)
                }} date={this.state.endTime}/>


                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                    if (tag === 0){
                        this.setState({
                            startTime:date
                        })
                    }else {
                         this.setState({
                            endTime:date
                        })
                    }
                }} />
            </View>
        )
    }
}
