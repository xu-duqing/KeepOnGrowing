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

export default class AddShit extends React.Component{

    render(){

        return(
            <View style={styles.pageBox}>

                <View style={styles.itemBox}>

                    <Image style={styles.iconImg} source = {require('../keep/img/ic_rili.png')}></Image>

                    <Text style={styles.textContent}>
                        2016-06-08 17:34
                    </Text>


                </View>

                <View style={styles.line}></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageBox:{
        flex:1,
        backgroundColor:KGColor.icons,
        flexWrap:'wrap'
    },
    itemBox:{
        alignItems:'center',
        flexDirection:'row',
        height:48
    },
    textContent:{
        paddingLeft:12,
        paddingRight:12,
        fontSize:14,
        color:'#e8888c'
    },
    line:{
        height:1,
        backgroundColor:"#f7a7aa"
    },
    iconImg:{
        width:18,
        height:18,
        marginLeft:12
    }
});