/**
 * Created by Guang on 16/6/8.
 */

"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

import KGHeader from '../common/KGHeader';
import {Text} from 'KGText'
import * as KGColor from 'KGColor'
import ActionButton from 'react-native-action-button';

class AddButton extends React.Component{

    render(){
        return(
            <View style={styles.btnBox}>
                <Text style={{fontSize:14,color:'#e8888c'}}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}


export default class AddPage extends React.Component{

    render(){

        return(
            <View style={{flex:1}}>
                <KGHeader title='新的记录' style={{backgroundColor:KGColor.primary}}/>
                <View style={styles.actionBox}>
                    <AddButton name="吃奶粉啦"/>
                    <AddButton name="喂母乳"/>
                    <AddButton name="睡觉觉"/>
                    <AddButton name="拉臭臭"/>
                    <AddButton name="第一次"/>
                    <AddButton name="量身高"/>
                    <AddButton name="称体重"/>
                </View>


                <ActionButton
                    offsetX = {Dimensions.get('window').width/2 - 30}
                    buttonColor="#FF6666"
                    onPress={() => {

                    }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    actionBox:{
        backgroundColor:KGColor.primary,
        flexDirection: 'row',
        padding:11,
        flexWrap:'wrap'
    },
    btnBox:{
        height:32,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius:16,
        paddingLeft:10,
        paddingRight:10,
        marginTop:6,
        marginRight:10
    }
});