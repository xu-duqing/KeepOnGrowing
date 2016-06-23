/**
 * Created by Guang on 16/6/23.
 */
"use strict";

import React,{
    View
} from 'react-native'
import {Text} from 'KGText'
import EditText from '../add/EditText'


export default class EditName extends React.Component{

    render(){
        return(
            <View style={{flex:1,marginTop:20}}>

                <EditText title="名 字:"  onChangeText={this.props.onChangeText} />
            </View>
        )
    }
}