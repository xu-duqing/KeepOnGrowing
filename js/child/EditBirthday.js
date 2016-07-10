/**
 * Created by Guang on 16/6/23.
 */
"use strict";

import React from 'react'

import {
    View
} from 'react-native'
import {Text} from 'KGText'
import DateTimePicker from 'KGDatePicker'
import EditDateTime from '../add/EditDateTime'


export default class EditBirthday extends React.Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            date:new Date(props.date || 0)
        };
      }

    render(){
        return(
            <View style={{flex:1,marginTop:20}}>

                <EditDateTime title="生日" onPress={() =>{
                    this.picker.show()
                }} date={this.state.date}/>

                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                        this.setState({
                            date
                        });
                        this.props.onPress(date)
                }} />
            </View>
        )
    }
}