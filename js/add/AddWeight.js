/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
} from 'react-native'

import EditDateTime from './EditDateTime'
import EditText from './EditText'
import WeightSlide from './EditWeightSlide'

export default class AddWeight extends React.Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            startTime:new Date(),
            weight:0
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
            weight:parseFloat(this.slide.getValue())
        }
    }

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

                <WeightSlide ref ={(slide) => this.slide = slide} title="体重"/>
            </View>
        )
    }
}