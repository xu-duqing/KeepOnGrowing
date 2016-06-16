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
            startTime:new Date(),
            volume:0
        };
    }

    setTime(date){
        this.setState({
            startTime:date
        })
    }

    getData(){
        return{
            startTime:this.state.startTime,
            volume:this.slide.getValue()
        }
    }

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

                <EditSlide ref ={(slide) => this.slide = slide} title="容量"/>

            </View>
        )
    }
}