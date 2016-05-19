/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from './types';

function addFirst(){
    return {
        type:KEEP.ADD_FIRST,
        keep:{
            time:new Date().getTime(),
            typeName:'第一次',
            keynote:'换尿布',
            note:'这是一段描述,记录当时的心情'
        }
    }
}

module.exports = {
    addFirst
};