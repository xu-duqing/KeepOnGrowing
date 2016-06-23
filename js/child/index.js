/**
 * Created by Guang on 16/6/23.
 */

"use strict";

import React,{
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {connect} from 'react-redux'
import KGHeader from '../common/KGHeader';
import KGColor from 'KGColor'
import {Text} from 'KGText'
import AddPage from '../add'

import EditBirthday from './EditBirthday'
import EditHeight from './EditHeight'
import EditName from './EditName'
import EditWight from './EditWight'


class ChildPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page:0
        };
    }

    renderCenter(){
        switch (this.state.page){
            case 0:
                return <EditName />
            case 1:
                return <EditBirthday />
            case 2:
                return <EditHeight />
            case 3:
                return <EditWight />
            default:
                return <EditName />
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <KGHeader title="编辑宝贝信息" style={{backgroundColor:KGColor.primaryHeader}}
                          leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            this.props.navigator.pop()
                          }}}/>

                {this.renderCenter()}

                <TouchableOpacity style={styles.nextBottom}
                                  onPress={() =>{
                                    if (this.state.page === 3){
                                        this.props.navigator.replace({
                                            component:AddPage
                                        });
                                        return
                                    }
                                    this.setState({
                                        page:this.state.page + 1
                                    })}}>
                    <Text style={{fontSize:16,color:'#e8888c',alignItems:'center'}}>
                        下一步
                    </Text>
                </TouchableOpacity>

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
