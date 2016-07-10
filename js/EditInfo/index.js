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
import {connect} from 'react-redux'
import KGLoading from 'KGLoading'

import {
    editBirthday,
    editName,
    editSex
} from '../action'

class EditInfo extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态

        let title;
        let Component;

        switch (props.type){
            case 'name':
                title = '编辑名字';
                Component = EditName;
                break;
            case 'birthday':
                title = '编辑生日';
                Component = EditBirthday;
                break;
            case 'sex':
                title = '编辑性别';
                Component = EditSex;
                break;
        }
        this.state = {
            title,
            Component,
            data:''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.loading.isShow() && !nextProps.child.isLoading){
            this.loading.dismiss();
            this.props.navigator.pop()
        }
    }

    pushEdit(){
        this.loading.show("请稍后...");

        switch (this.props.type){
            case 'name':
                this.props.dispatch(editName(this.state.data));
                break;
            case 'birthday':
                this.props.dispatch(editBirthday(this.state.data));
                break;
            case 'sex':
                this.props.dispatch(editSex(this.state.data));
                break;
        }
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fcfcfc'}}>
                <KGHeader title={this.state.title} style={{backgroundColor:KGColor.primaryHeader}}
                          leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            this.props.navigator.pop()
                          }}} rightItem={{title:'完成',onPress:() =>{
                            this.pushEdit();
                          }}}/>

                <this.state.Component {...this.props} onPress={(data) =>{
                    this.setState({
                        data
                    })
                }} onChangeText={(data) =>{
                    this.setState({
                        data
                    })
                }}/>

                <KGLoading ref={(loading) =>this.loading = loading} />
            </View>
        )
    }
}

function select(store) {
    return {
        child:store.child
    };
}

module.exports = connect(select)(EditInfo);