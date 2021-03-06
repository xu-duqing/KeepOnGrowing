/**
 * Created by Guang on 16/5/17.
 */

import React from 'react'


import {
    View,
    Image,
    Dimensions,
    ActionSheetIOS,
    Platform,
    StyleSheet
} from 'react-native';

import KGHeader from '../common/KGHeader';
import KeepListView from './KeepListView';
import {connect} from 'react-redux'
import ActionButton from 'react-native-action-button';
import AddPage from '../add'
import UserPage from '../user'
import KGLoading from 'KGLoading'
import ChildPage from '../child'

import {
    loadKeep,
    loadChild
} from '../action'



import {Text} from 'KGText'
import * as KGColor from 'KGColor'



class KeepPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };

    }

    componentDidMount() {
        this.props.dispatch(loadKeep());
        this.props.dispatch(loadChild());
    }

    _onRefresh(){
        this.props.dispatch(loadKeep())
    }



    render(){
        const child = this.props.child.childs[0];
        const title = `${child && child.name?child.name:"宝贝"}成长记`;
        return(
            <View style={{flex:1}}>
                <KGHeader title={title} style={{backgroundColor:KGColor.primaryHeader}} leftItem={{title:'账户',onPress:() =>{
                        if(child){
                            this.props.navigator.push({
                                component:UserPage
                            })
                        }else {
                            this.props.navigator.push({
                                component:ChildPage
                            })
                        }
                }}}/>


                <KeepListView data={this.props.keep.data} dataHeights={this.props.keep.heights} dataWeights={this.props.keep.weights} refreshing={this.props.keep.isLoading} onRefresh={this._onRefresh.bind(this)}/>

                <ActionButton
                    buttonColor="#FF6666"
                    onPress={() => {
                            if(child){
                                this.props.navigator.push({
                                    component:AddPage
                                })
                            }else {
                                this.props.navigator.push({
                                    component:ChildPage
                                })
                            }

                        }}/>

                <KGLoading ref={(loading) => this.loading = loading}/>
            </View>
        )
    }
}

function select(store) {
    return {
        keep:store.keep,
        child:store.child
    };
}

module.exports = connect(select)(KeepPage);