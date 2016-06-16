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

export default class AddHeight extends React.Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            startTime:new Date(),
            height:0
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
            height:parseInt(this.state.height)
        }
    }


    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

                <EditText title="身 高:" onChangeText={(text) =>this.state.height=text} />
            </View>
        )
    }
}