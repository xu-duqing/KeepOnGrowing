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

export default class AddShit extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            startTime:new Date()
        };
    }

    setTime(date){
        this.setState({
            startTime:date
        })
    }

    getData(){
        return{
            startTime:this.state.startTime
        }
    }


    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="上次大便时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

            </View>
        )
    }
}