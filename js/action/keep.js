/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from './types';

function addFirst(action:{}){
    return {
        type:KEEP.ADD_FIRST,
        keep:action
    }
}

module.exports = {
    addFirst
};