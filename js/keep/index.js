/**
 * Created by Guang on 16/5/17.
 */

import React,{
    View,
    Image,
    Dimensions,
    ActionSheetIOS,
    Platform
} from 'react-native';

import KGHeader from '../common/KGHeader';
import KeepListView from './KeepListView';
import FirstKeep from './FirstKeep'
import HeightKeep from './HeightKeep'
import WeightKeep from './WeightKeep'
import {connect} from 'react-redux'
import KGActionSheet from '../common/KGActionSheet';
import ActionButton from 'react-native-action-button';

import {
    addFirst,
    keepClear
} from '../action'

import {Text} from 'KGText'
import * as KGColor from 'KGColor'

var BUTTONS = [
    '第一次',
    '体重',
    '身长',
    '取消'
];
var CANCEL_INDEX = 3;

class KeepPage extends React.Component{

// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){

        return(
            <View style={{flex:1}}>
                <KGHeader title='小诺成长记' style={{backgroundColor:'#e7888c'}}/>
                <KeepListView data={this.props.keep.data}/>

                <View style={styles.plusBox}>
                    <ActionButton
                        buttonColor="#ffed44"
                        onPress={() => { console.log("hi")}}/>
                </View>
            </View>
        )
    }

    showActionSheet() {
        if (Platform.OS == 'ios'){
            ActionSheetIOS.showActionSheetWithOptions({
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    title:'添加记录'
                },(index) => this.actionClick(index));
        }else {
            //fixme Android选择弹框暂时没有实现, 寻找更好的方案 https://github.com/gowong/material-sheet-fab
            this.ActionSheet.show();
        }
    }

    actionClick(index){
        let component;
        switch (index){
            case 0:
                component = {
                    component:FirstKeep,
                    name:'FirstKeep',
                    params:{dispatch:this.props.dispatch}
                };
                break;
            case 1:
                component = {
                    component:WeightKeep,
                    name:'WeightKeep',
                    params:{dispatch:this.props.dispatch}
                };
                break;
            case 2:
                component = {
                    component:HeightKeep,
                    name:'HeightKeep',
                    params:{dispatch:this.props.dispatch}
                };
                break;
        }

        if (component)
            this.props.navigator.push(component)
    }
}

const styles = React.StyleSheet.create({
    plusBox:{
        position:'absolute',
        bottom:80,
        right:100
    }
});

function select(store) {
    return {
        keep:store.keep
    };
}

module.exports = connect(select)(KeepPage);