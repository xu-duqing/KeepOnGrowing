/**
 * Created by Guang on 16/6/23.
 */

"use strict";
import React from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import KGHeader from '../common/KGHeader';
import KGColor from 'KGColor'
import {Text} from 'KGText'
import AddPage from '../add'
import KGLoading from '../common/KGLoading'
import {
    addFirst,
    addHeight,
    addWeight,
    addChild
} from '../action'

import EditName from './EditName'
import EditBirthday from './EditBirthday'
import EditSex from './EditSex'
import EditHeight from './EditHeight'
import EditWeight from './EditWeight'


class ChildPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page:0,
            name:'',
            height:60,
            weight:3.3,
            birthday:new Date(),
            sex:'女'
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.child.isAdding){
            this.loading.show("请稍后...");
        }else {
            this.loading.dismiss();
        }
    }

    pushInfo(){
        this.props.dispatch(addChild(this.state.name,this.state.birthday,this.state.sex,() =>{

            this.props.dispatch(addFirst({
                keynote:'来到这个世界',
                description:'Hello World!',
                startTime:this.state.birthday
            }));

            this.props.dispatch(addHeight({
                height:this.state.height,
                startTime:this.state.birthday
            }));

            this.props.dispatch(addWeight({
                weight:this.state.weight,
                startTime:this.state.birthday
            }));

            this.props.navigator.replace({
                component:AddPage
            })
        }));
    }

    renderCenter(){
        switch (this.state.page){
            case 0:
                return <EditName onChangeText={(text) =>{
                    this.state.name = text
                }}/>;
            case 1:
                return <EditBirthday onPress={(date) =>{
                    this.state.birthday = date
                }}/>;
            case 2:
                return <EditSex onChangeText={(text) =>{
                    this.state.sex = text
                }}/>;

            case 3:
                return <EditHeight onChangeText={(text) =>{
                    this.state.height = parseInt(text)
                }}/>;
            case 4:
                return <EditWeight onChangeText={(text) =>{
                    this.state.weight = parseInt(text)
                }}/>;
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <KGHeader title="添加宝贝信息" style={{backgroundColor:KGColor.primaryHeader}}
                          leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            this.props.navigator.pop()
                          }}}/>

                {this.renderCenter()}

                <TouchableOpacity style={styles.nextBottom}
                                  onPress={() =>{

                                    if (this.state.page == 0 && !this.state.name){
                                        return alert("名字不能为空哦!!")
                                    }
                                    if (this.state.page === 4){
                                        return this.pushInfo()
                                    }
                                    this.setState({
                                        page:this.state.page + 1
                                    })}}>
                    <Text style={{fontSize:16,color:'#e8888c',alignItems:'center'}}>
                        下一步
                    </Text>
                </TouchableOpacity>

                <KGLoading ref={(loading) => this.loading = loading}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nextBottom:{
        height:45,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#e8888c',
        justifyContent:'center',
        alignItems:'center',
        margin:36
    }
});
function select(store) {
    return {
        child:store.child
    };
}

module.exports = connect(select)(ChildPage);
