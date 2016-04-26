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


export default class App extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
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