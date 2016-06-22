/**
 * Created by Guang on 16/6/13.
 */

"use strict";

import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import StringUtils from '../utils/string-utils'

export default class EditDateTime extends React.Component{

    render(){
        const {title,date} = this.props;
        return(
            <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                <Text style={styles.text}>
                    {title}
                </Text>


                <Text style={styles.text}>
                    {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
                </Text>


                <Text style={styles.text}>
                    {`${StringUtils.prefixInteger(date.getHours(),2)}:${StringUtils.prefixInteger(date.getMinutes(),2)}`}
                </Text>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        height:64,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:19,
        marginRight:19,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
        alignItems:'center'
    },
    text:{
        fontSize:15,
        color:"#727480"
    }
});