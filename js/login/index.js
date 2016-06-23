/**
 * Created by Guang on 16/6/9.
 */

"use strict";

import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import {
    logIn,
    logOut,
    register
} from '../action'

import {Text} from 'KGText'
import * as KGColor from 'KGColor'

import KGLoading from 'KGLoading'
import {connect} from 'react-redux'
import KGHeader from '../common/KGHeader';

class Login extends React.Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            name:'',
            password:'',
            checkPassword:'',
            isRegister:true
        };
      }

    logIn(){
        if(this.state.name && this.state.password){
            this.loading.show("正在登录...");
            this.props.dispatch(logIn(this.state.name,this.state.password));
        }else {
            alert("用户名或密码不可为空")
        }
    }

    register(){
        if(this.state.name && this.state.password && this.state.checkPassword){
            if (this.state.password === this.state.checkPassword){
                this.loading.show("正在注册...");
                this.props.dispatch(register(this.state.name,this.state.password));
            }else {
                alert("输入密码不一致")
            }
        }else {
            alert("用户名或密码不可为空")
        }
    }

    logOut(){
        this.loading.show("正在退出...");
        this.props.dispatch(logOut());
    }

    componentWillReceiveProps(nexProps) {

        if (nexProps.user.isLogin){
            //登录成功
            this.loading.dismiss();
        }else if(nexProps.user.error){
            //登录失败
            const error = nexProps.user.error;
            this.loading.dismiss();
            alert("Error: " + error.code + " " + error.message);
        }
    }

    render(){

        return(
            <View style={{flex:1}}>

                <KGHeader style={{backgroundColor:KGColor.primaryHeader}} leftItem={{icon:require('../common/img/back_white.png'),onPress:() =>{
                            //this.props.navigator.pop()
                          }}}/>

                <View style={styles.headerBox}>
                    <TouchableOpacity style={[styles.btnBox,{borderColor:this.state.isRegister?'#f8bfbe' : KGColor.primaryHeader}]} onPress={() =>{
                        this.setState({
                            isRegister:true
                        })
                    }}>
                        <Text style={{fontSize:14,color:"#FFF"}}>
                            注册
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btnBox,{borderColor:!this.state.isRegister?'#f8bfbe' : KGColor.primaryHeader}]} onPress={() =>{
                        this.setState({
                            isRegister:false
                        })
                    }}>
                        <Text style={{fontSize:14,color:"#FFF"}}>
                            登录
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box} >

                    <Text style={styles.textTitle}>
                        用户名 :
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="请输入用户名"
                        onChangeText={(name) => this.setState({name})}
                    />

                </View>

                <View style={styles.box} >

                    <Text style={styles.textTitle}>
                        密码 :
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />

                </View>

                {this.state.isRegister?
                    <View style={styles.box} >

                        <Text style={styles.textTitle}>
                            密码 :
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="请确认密码"
                            secureTextEntry={true}
                            onChangeText={(checkPassword) => this.setState({checkPassword})}
                        />

                    </View>:null}


                <TouchableOpacity style={styles.submitButton}
                                  onPress={() =>{
                                    if (this.state.isRegister){
                                        this.register()
                                    }else {
                                        this.logIn()
                                    }
                                  }}>
                    <Text style={{fontSize:16,color:'#FFF'}}>
                        {this.state.isRegister?'注    册':'登    录'}
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
        flexDirection: 'row',
        padding:11,
        justifyContent:'center'
    },
    btnBox:{
        height:32,
        justifyContent:'center',
        borderRadius:26,
        paddingLeft:26,
        paddingRight:26,
        marginTop:6,
        marginRight:20,
        borderWidth:1
    },
    box:{
        height:44,
        marginLeft:19,
        marginRight:19,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
        alignItems:'center',
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#f0f0f0',
        marginTop:20
    },
    textTitle:{
        fontSize:15,
        color:"#727480"
    },
    textInput:{
        height: 40,
        flex:1,
        alignSelf:'center',
        paddingLeft:10,
        marginLeft:4,
        alignItems:'flex-end',
        fontSize:15
    },
    submitButton:{
        height:40,
        marginLeft:19,
        marginRight:19,
        borderRadius:4,
        backgroundColor:KGColor.primaryHeader,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }
});

function select(store) {
    return {
        user:store.user
    };
}

module.exports = connect(select)(Login);
