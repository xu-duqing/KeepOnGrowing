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

export default class AddFirst extends React.Component{


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            startTime:new Date(),
            keynote:'',
            description:'',
        };
    }

    setTime(date,tag){
        this.setState({
            startTime:date
        })
    }

    getData(){
        return{
            keynote:this.state.keynote,
            description:this.state.description,
            startTime:this.state.startTime
        }
    }


    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.props.showPicker()
                }} date={this.state.startTime}/>

                <EditText title="第  一  次:" onChangeText={(text) =>this.state.keynote=text}/>

                <EditText title="还想说点:" onChangeText={(text) =>this.state.description=text}/>

            </View>
        )
    }
}