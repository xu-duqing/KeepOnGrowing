/**
 * Created by Guang on 16/4/26.
 */

"use strict";

import keep from './keep';
import user from './user'
import child from './child'
import {combineReducers} from 'redux';

module.exports = combineReducers({
    keep,
    user,
    child
});