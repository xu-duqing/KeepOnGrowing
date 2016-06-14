/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
    Dimensions
} from 'react-native'

import DateTimePicker from 'KGDatePicker'
import EditDateTime from './EditDateTime'
import EditText from './EditText'
import ActionButton from 'react-native-action-button';

import {
    addFirst,
} from '../action';

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

    render(){

        return(
            <View style={{flex:1}}>
                <EditDateTime title="时间" onPress={() =>{
                    this.picker.show()
                }} date={this.state.startTime}/>

                <EditText title="第  一  次:" onChangeText={(text) =>this.state.keynote=text}/>

                <EditText title="还想说点:" onChangeText={(text) =>this.state.description=text}/>

                <ActionButton
                    offsetX = {Dimensions.get('window').width/2 - 30}
                    buttonColor="#FF6666"
                    onPress={() => {
                        this.props.dispatch(addFirst({
                            keynote:this.state.keynote,
                            description:this.state.description,
                            startTime:this.state.startTime
                        }));
                    }}/>

                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                        this.setState({
                            startTime:date
                        })
                }} />
            </View>
        )
    }
}