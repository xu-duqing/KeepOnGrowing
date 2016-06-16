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

    setTime(date,tag){
        if (tag == 0){
            this.setState({
                startTime:date
            })
        }else {
            this.setState({
                endTime:date
            })
        }
    }

    getData(){
        return{
            startTime:this.state.startTime,
            endTime:this.state.endTime
        }
    }


    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="开始时间" onPress={() =>{
                    this.props.showPicker(0)
                }} date={this.state.startTime}/>
                <EditDateTime title="结束时间" onPress={() =>{
                    this.props.showPicker(1)
                }} date={this.state.endTime}/>

            </View>
        )
    }
}
