/**
 * Created by Guang on 16/7/10.
 */

"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Text from 'KGText'
import KGHeader from 'KGHeader'
import * as KGColor from 'KGColor'

import EditName from '../child/EditName'
import EditBirthday from '../child/EditBirthday'
import EditSex from '../child/EditSex'


export default class EditInfo extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态

        let title;
        let Component;

        switch (props.type){
            case 'name':
                title = '编辑名字';
                Component = EditName
                break;
            case 'birthday':
                title = '编辑生日';
                Component = EditBirthday
                break;
            case 'sex':
                title = '编辑性别';
                Component = EditSex
                break;
        }
        this.state = {
            title,
            Component
        };
    }

    pushEdit(){
        //fixme 提交编辑结果
    }

    render(){
        console.log(this.props);

        return(
            <View style={{flex:1,backgroundColor:'#fcfcfc'}}>
                <KGHeader title={this.state.title} style={{backgroundColor:KGColor.primaryHeader}}
                          leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            this.props.navigator.pop()
                          }}} rightItem={{title:'完成',onPress:() =>{
                            this.pushEdit();
                            this.props.navigator.pop()
                          }}}/>

                <this.state.Component />

            </View>
        )
    }
}