/**
 * Created by wang on 16/6/8.
 */
"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    Text
} from 'react-native'

import * as KGColor from 'KGColor'

export default class AddWeight extends React.Component{

    render(){

        return(
            <View style={styles.pageBox}>

                <View style={styles.pageBox}>

                    <View style={styles.itemBox}>

                        <Image style={styles.iconImg} source = {require('../keep/img/ic_rili.png')}></Image>

                        <Text style={styles.textContent}>
                            2016-06-08
                        </Text>

                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.itemBox}>

                        <Image style={styles.iconImg} source = {require('../keep/img/ic_tizhong.png')}></Image>

                        <TextInput
                            style={styles.textInput}
                            placeholder = '请输入宝宝的体重'
                            placeholderTextColor = '#e1bdbe'>

                        </TextInput>

                        <View style = {{alignItems:'flex-end', flex:1}}>
                            <Text style={styles.textContent}>
                                kg
                            </Text>
                        </View>

                    </View>
                    <View style={styles.line}></View>

                </View>

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
        backgroundColor:"#ffe1e2"
    },
    textInput: {
        height: 48,
        borderWidth: 0,
        flex: 1,
        fontSize: 14,
        paddingLeft: 12
    },
    iconImg:{
        width:18,
        height:18,
        marginLeft:12
    }
});