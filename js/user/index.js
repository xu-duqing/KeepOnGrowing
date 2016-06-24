/**
 * Created by Guang on 16/6/8.
 */

"use strict";

import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import KGHeader from '../common/KGHeader';
import {Text} from 'KGText'
import * as KGColor from 'KGColor'
import KGLoading from 'KGLoading'
import {connect} from 'react-redux'


import {
    logOut
} from '../action'

class UserPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:1
        };
    }

    logOut(){
        this.loading.show("正在退出...");
        this.props.dispatch(logOut());
    }

    render(){
        const child = this.props.child[0] || {};
        const date = new Date(child.birthday || 0);

        return(
            <View style={{flex:1}}>
                <KGHeader title='用户信息' style={{backgroundColor:KGColor.primaryHeader}}
                          leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            this.props.navigator.pop()
                          }}}/>
                <View style={styles.headerBox}>

                    <View style={styles.headPortraitBox}>
                        <Image style={styles.headerImg} source = {require('./img/ic_header.png')}/>
                    </View>
                    <Text style={styles.nameText}>{child.name || "我的宝贝"}</Text>
                </View>

                <View style={{backgroundColor:'#fffed2',height:30,justifyContent:'center',paddingLeft:11}}>
                    <Text style={{fontSize:12,color:'#877e61'}}>
                        点击可以编辑相关信息
                    </Text>
                </View>

                <View style={styles.itemBox}>
                    <View style={{flex:1,alignItems:'center',}}>
                        <Text style={styles.textBold}>
                            出生日期
                        </Text>

                        <Text style={styles.text}>
                            {`${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`}
                        </Text>

                    </View>

                    <View style={{backgroundColor:'#f0f0f0',width:1,height:65}}/>

                    <View style={{flex:1,alignItems:'center',}}>
                        <Text style={styles.textBold}>
                            性别
                        </Text>

                        <Text style={styles.text}>
                            女
                        </Text>
                    </View>
                </View>

                <View style={styles.itemBox}>
                    <View style={{flex:1,alignItems:'center',}}>
                        <Text style={styles.textBold}>
                            身长
                        </Text>

                        <Text style={styles.text}>
                            60 CM
                        </Text>

                    </View>

                    <View style={{backgroundColor:'#f0f0f0',width:1,height:65}}/>

                    <View style={{flex:1,alignItems:'center',}}>
                        <Text style={styles.textBold}>
                            体重
                        </Text>

                        <Text style={styles.text}>
                            4.5 千克
                        </Text>
                    </View>
                </View>


                <TouchableOpacity style={styles.outBottom}
                                  onPress={this.logOut.bind(this)}>
                    <Text style={{fontSize:16,color:'#e8888c',alignItems:'center'}}>
                        退出登录
                    </Text>
                </TouchableOpacity>

                <KGLoading ref={(loading) => this.loading = loading}/>
                
            </View>
        )
    }
}




const styles = StyleSheet.create({
    headerBox:{
        backgroundColor:KGColor.primaryHeader,
        justifyContent:'center',
        alignItems:'center',
        height:130
    },
    headerImg:{
        width:70,
        height:70,
        borderRadius:35
    },
    headPortraitBox:{
        width:76,
        height:76,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:38
    },
    nameText:{
        fontSize:18,
        color:'#FFF',
        marginTop:5,
        fontWeight:'bold'
    },
    text:{
        fontSize:12,
        color:"#727480",
        marginTop:6
    },
    textBold:{
        fontSize:15,
        color:"#727480",
        fontWeight:'bold'
    },
    itemBox:{
        flexDirection:'row',
        alignItems:'center',
        height:65,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0'
    },
    outBottom:{
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
        child:store.child.childs
    };
}

module.exports = connect(select)(UserPage);
