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

import {Text} from 'KGText'
import KGColor from 'KGColor'

var Parse = require('parse/react-native');
import KGLoading from 'KGLoading'


export default class Login extends React.Component{

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

        Parse.User.logIn(this.state.name,this.state.password,{
            success:  (user) => {
                console.log(user);
                this.loading.dismiss();
                alert("登录成功");

            },
            error: (user,error) => {
                console.log(error);
                this.loading.dismiss();
                alert("Error: " + error.code + " " + error.message);
            }
        })
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