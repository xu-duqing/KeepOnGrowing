/**
 * Created by Guang on 16/4/26.
 */

"use strict";

import React,{
    View,
    Text
} from 'react-native'

import Root from './App';
var { Provider } = require('react-redux');
var configureStore = require('./store/configureStore');
var Parse = require('parse/react-native');
var { serverURL,parseAppID } = require('./env');


export default class App extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        Parse.initialize(parseAppID);
        Parse.serverURL = `${serverURL}/parse`;

        //用户注册
        //let user = new Parse.User();
        //user.set("username","SamXu");
        //user.set("password","111111");
        //user.set("email","xu.duqing@gmail.com");
        //user.set("phone","18268839400");
        //
        //user.signUp(null,{
        //    success:function(user){
        //        console.log(user)
        //    },
        //    error:function(user,error){
        //        console.log(error);
        //        console.log(user);
        //        alert("Error: " + error.code + " " + error.message);
        //    }}
        //)

        this.state = {
          isLoading: true,
          store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render(){
        return(
            <Provider store={this.state.store}>
                <Root {...this.props}/>
            </Provider>
        )
    }
}