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
            weight:parseInt(this.state.weight)
        }
    }

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

                <EditText title="体 重:" unit="千克" onChangeText={(text) =>this.state.weight=text}/>
            </View>
        )
    }
}