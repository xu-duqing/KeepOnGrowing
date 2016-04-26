/**
 * Created by Guang on 16/4/26.
 */

"use strict";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import promise from './promise';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;


var logger = createLogger({
    predicate:(getState,action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
});

var createMyStore = applyMiddleware(thunk,promise,logger)(createStore);

function configureStore(){

    const store = autoRehydrate()(createMyStore)(reducers);
    if (isDebuggingInChrome){
        window.store = store
    }

    return store;
}

module.exports = configureStore;

