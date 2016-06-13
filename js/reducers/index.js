/**
 * Created by Guang on 16/4/26.
 */

"use strict";

import keep from './keep';
import login from './user'
import {combineReducers} from 'redux';

module.exports = combineReducers({
    keep,
    login
});