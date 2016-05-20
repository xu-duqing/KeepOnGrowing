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
import {connect} from 'react-redux'
import {
    MKButton,
    MKColor,
} from 'react-native-material-kit'
import {
    addFirst
} from '../action'

import {Text} from 'KGText'

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
        const PlainFab = MKButton.coloredFab()
            .withBackgroundColor(MKColor.LightBlue)
            .withOnPress(() => {
                //this.props.dispatch(addFirst());
                this.showActionSheet()
            })
            .build();

        return(
            <View style={{flex:1}}>
                <KGHeader/>
                <KeepListView data={this.props.keep.data}/>
                <View style={styles.plusBox}>
                    <PlainFab>
                        <Image pointerEvents="none" source={require('./img/plus_white.png')} />
                    </PlainFab>
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
        }
    }

    actionClick(index){
        this.props.navigator.push({
            component:FirstKeep,
            name:'FirstKeep'
        })
    }
}

const styles = React.StyleSheet.create({
    plusBox:{
        position:'absolute',
        bottom:10,
        left:Dimensions.get('window').width/2 - 27
    }
});

function select(store) {
    return {
        keep:store.keep
    };
}

module.exports = connect(select)(KeepPage);