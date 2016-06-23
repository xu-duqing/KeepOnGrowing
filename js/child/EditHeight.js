/**
 * Created by Guang on 16/6/23.
 */
"use strict";

import React,{
    View
} from 'react-native'
import {Text} from 'KGText'

export default class EditHeight extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
                <Text> 身高</Text>
            </View>
        )
    }
}