/**
 * Created by Guang on 16/6/9.
 */

"use strict";

import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'

import {logIn} from '../action'

import {Text} from 'KGText'
import KGColor from 'KGColor'

import KGLoading from 'KGLoading'
import {connect} from 'react-redux'


class Login extends React.Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            name:'',
            password:''
        };
      }

    logIn(){
        //fixme 检测输入合法性
        this.loading.show("正在登录...");
        this.props.dispatch(logIn(this.state.name,this.state.password));
    }

    componentWillReceiveProps(nexProps) {

        if (nexProps.login.isLogin){
            //登录成功
            this.loading.dismiss();
        }else if(nexProps.login.error){
            //登录失败
            const error = nexProps.login.error;
            this.loading.dismiss();
            alert("Error: " + error.code + " " + error.message);
        }
    }

    render(){
        return(
            <View style={{flex:1,padding:22,justifyContent:'center'}}>

                <Text>
                    用户名:
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />

                <Text style={{marginTop:48}}>
                    密码:
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />

                <TouchableOpacity style={{marginTop:48,
                                        backgroundColor:KGColor.primaryDark,
                                        height:40,
                                        justifyContent:'center',
                                        alignItems:'center'}}
                                  onPress={this.logIn.bind(this)}>
                    <Text style={{fontSize:24,color:'#FFF'}}>
                        登录
                    </Text>
                </TouchableOpacity>

                <KGLoading ref={(loading) => this.loading = loading}/>
            </View>
        )
    }
}

function select(store) {
    return {
        login:store.login
    };
}

module.exports = connect(select)(Login);
