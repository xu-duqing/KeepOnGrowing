/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import * as KGColor from 'KGColor'

export default class AddPowderedMilk extends React.Component{

    render(){

        return(
            <View style={styles.pageBox}>

                <Text style={{fontSize:14,color:'#e8888c'}}>
                    吃奶粉
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageBox:{
        flex:1,
        backgroundColor:KGColor.icons,
        justifyContent:'center',
        flexDirection: 'row',
        padding:11,
        flexWrap:'wrap'
    }
});