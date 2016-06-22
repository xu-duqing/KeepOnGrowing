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
import {connect} from 'react-redux'
import KGActionSheet from '../common/KGActionSheet';
import ActionButton from 'react-native-action-button';
import AddPage from '../add'
import User from '../user'
import UserPage from '../user'
import KGLoading from 'KGLoading'

import {
    loadKeep
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

    componentDidMount() {
        this.props.dispatch(loadKeep())
    }

    componentWillReceiveProps(nextProps) {

    }

    _onRefresh(){
        this.props.dispatch(loadKeep())
    }

    render(){

        return(
            <View style={{flex:1}}>
                <KGHeader title='小诺成长记' style={{backgroundColor:KGColor.primaryHeader}} leftItem={{title:'账户',onPress:() =>{
                    this.props.navigator.push({
                        component:User,
                        name:'user'
                    })
                }}}/>
                <KeepListView data={this.props.keep.data} refreshing={this.props.keep.isLoading} onRefresh={this._onRefresh.bind(this)}/>

                <ActionButton
                    buttonColor="#FF6666"
                    onPress={() => {
                            this.props.navigator.push({
                                component:AddPage,
                                name:'AddPage'
                            })
                        }}/>

                <KGLoading ref={(loading) => this.loading = loading}/>
            </View>
        )
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