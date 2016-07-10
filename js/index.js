/**
 * Created by Guang on 16/4/26.
 */

"use strict";

import React from 'react'

import {
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

        this.state = {
          isLoading: true,
          store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    render(){
        if (this.state.isLoading) {
            return null;
        }
        return(
            <Provider store={this.state.store}>
                <Root {...this.props}/>
            </Provider>
        )
    }
}