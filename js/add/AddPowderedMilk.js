/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
} from 'react-native'


import DateTimePicker from 'KGDatePicker'
import EditDateTime from './EditDateTime'
import EditSlide from './EditSlide'

export default class AddPowderedMilk extends React.Component{


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

                <EditSlide title="容量"/>

                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                        this.setState({
                            startTime:date
                        })
                }} />
            </View>
        )
    }
}