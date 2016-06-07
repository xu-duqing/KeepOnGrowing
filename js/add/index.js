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



export default class AddPage extends React.Component{

    render(){

        return(
            <View style={{flex:1}}>
                <KGHeader title='新的记录' style={{backgroundColor:KGColor.primary}}/>
                <View style={styles.actionBox}>
                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            吃奶粉啦
                        </Text>
                    </View>

                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            喂母乳
                        </Text>
                    </View>


                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            睡觉觉
                        </Text>
                    </View>


                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            拉臭臭
                        </Text>
                    </View>

                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            第一次
                        </Text>
                    </View>

                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            量身高
                        </Text>
                    </View>

                    <View style={styles.btnBox}>
                        <Text style={{fontSize:14,color:'#e8888c'}}>
                            称体重
                        </Text>
                    </View>

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